import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/index";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 aria-invalid:ring-red-400 dark:aria-invalid:ring-red-500 focus-visible:ring-offset-background-50 aria-invalid:border-red-500",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 hover:bg-primary-400 focus-visible:bg-primary-600 text-text-50 focus-visible:ring-primary-600 dark:text-text-950",
        secondary:
          "bg-secondary-500 hover:bg-secondary-400 focus-visible:bg-secondary-600 text-text-50 focus-visible:ring-secondary-600 dark:text-text-950",
        accent:
          "bg-accent-500 hover:bg-accent-400 focus-visible:bg-accent-600 text-text-50 focus-visible:ring-accent-600 dark:text-text-950",
        default:
          "bg-primary-500 hover:bg-primary-400 focus-visible:bg-primary-600 text-text-50 focus-visible:ring-primary-600 dark:text-text-950",
        destructive:
          "bg-red-500 hover:bg-red-400 focus-visible:bg-red-600 text-text-50 focus-visible:ring-red-600 dark:text-text-950",
        outline: "border-2 border-text-600",
        ghost: "hover:bg-primary-100 dark:hover:bg-primary-200",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
