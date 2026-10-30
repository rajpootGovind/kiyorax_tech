import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        brand:
          "bg-[linear-gradient(100deg,#00c8f5,#286bff_52%,#852eff)] text-white shadow-[0_12px_44px_-16px_rgba(40,107,255,0.85)] hover:shadow-[0_18px_50px_-14px_rgba(40,107,255,0.9)] hover:brightness-110",
        solid:
          "bg-white text-ink hover:bg-paper shadow-[0_10px_36px_-18px_rgba(255,255,255,0.6)]",
        outline:
          "border border-white/15 text-white hover:border-white/35 hover:bg-white/[0.06]",
        outlineDark:
          "border border-ink/15 text-ink hover:border-ink/35 hover:bg-ink/[0.04]",
        ghost: "text-white/75 hover:text-white",
        ghostDark: "text-ink/70 hover:text-ink",
      },
      size: {
        sm: "h-10 px-5 text-[13px]",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-[15px]",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "brand",
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
