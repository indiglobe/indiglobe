import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function StatisticsCard({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `flex w-full max-w-80 flex-col items-center justify-center gap-y-2 px-6 pb-4`,
        props.className,
      )}
    />
  );
}

export function StatisticsCardIcon({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `text-primary-100 dark:text-primary-800 *:size-12 md:*:size-16`,
      )}
    />
  );
}

export function StatisticsCardBoldText({ ...props }: ComponentProps<"h2">) {
  return (
    <h2
      {...props}
      className={cn(`text-2xl font-semibold md:text-4xl`, props.className)}
    />
  );
}

export function StatisticsCardText({ ...props }: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={cn(
        `text-primary-100 dark:text-primary-800 text-center text-base md:text-xl`,
        props.className,
      )}
    />
  );
}
