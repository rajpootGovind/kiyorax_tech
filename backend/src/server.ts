import { app } from "./app";
import { connectDatabase, disconnectDatabase } from "./config/db";
import { env } from "./config/env";

async function start(): Promise<void> {
  try {
    await connectDatabase();

    const server = app.listen(env.PORT, () => {
      console.log(
        `[server] KiyoraX API listening on port ${env.PORT} (${env.NODE_ENV})`,
      );
      console.log(
        `[server] Allowed origins: ${env.corsOrigins.join(", ") || "none"}`,
      );
    });

    let shuttingDown = false;

    const shutdown = (signal: string) => {
      if (shuttingDown) return;
      shuttingDown = true;
      console.log(`[server] ${signal} received — shutting down gracefully...`);

      const forceExit = setTimeout(() => {
        console.error("[server] Forced shutdown after timeout.");
        process.exit(1);
      }, 10_000);
      forceExit.unref();

      server.close(async () => {
        try {
          await disconnectDatabase();
          console.log("[server] Shutdown complete.");
          process.exit(0);
        } catch (error) {
          console.error("[server] Error during shutdown:", error);
          process.exit(1);
        }
      });
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));

    process.on("unhandledRejection", (reason) => {
      console.error("[server] Unhandled promise rejection:", reason);
    });

    process.on("uncaughtException", (error) => {
      console.error("[server] Uncaught exception:", error);
      shutdown("uncaughtException");
    });
  } catch (error) {
    console.error("[server] Failed to start:", error);
    process.exit(1);
  }
}

void start();
