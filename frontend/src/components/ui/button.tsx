import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-white shadow-[0_12px_30px_-18px_rgba(10,30,46,0.8)] hover:bg-ink-deep",
        sky:
          "bg-sky text-white shadow-[0_12px_30px_-18px_rgba(15,116,201,0.8)] hover:bg-[#0c65b0]",
        outline:
          "border border-line bg-white text-ink hover:border-ink/30 hover:bg-paper",
        ghost: "text-ink/65 hover:text-ink",
        onDark:
          "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
        light: "bg-white text-ink hover:bg-paper",
      },
      size: {
        sm: "h-10 px-5 text-[13px]",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-[15px]",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type CommonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

type LinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

export function Button(props: ButtonProps | LinkProps) {
  const { variant, size, className, children } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, target, rel, ...rest } = props;
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={classes}
          aria-label={rest["aria-label"]}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={rest["aria-label"]}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...buttonProps } =
    props as ButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
