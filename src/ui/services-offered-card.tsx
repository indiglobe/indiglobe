import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";

export function ServicesOffered({ ...props }: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(`max-w-80 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-100 focus-visible:ring-offset-primary-400 dark:focus-visible:ring-primary-900`, props.className)}
    />
  );
}

export function ServicesOfferedCard({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `bg-primary-100 dark:bg-primary-900 text-left text-primary-400  dark:text-primary-600 max-w-80 rounded-lg px-8 pt-4`,
        props.className,
      )}
    />
  );
}

export function ServicesOfferedHeading({ ...props }: ComponentProps<"h2">) {
  return (
    <h2 {...props} className={cn(`pb-4 text-2xl font-bold`, props.className)} />
  );
}

export function ServicesOfferedDetails({ ...props }: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={cn(`text-primary-400 dark:text-primary-600 pb-6 font-semibold`, props.className)}
    />
  );
}

export function ServicesHighlighted({
  highlights,
  ...props
}: { highlights: string[] } & ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `flex max-w-max flex-col flex-wrap gap-2 pb-6`,
        props.className,
      )}
    >
      {highlights.map((highlight) => {
        return (
          <p key={highlight}
            className={cn(
              `bg-primary-400 dark:bg-primary-600 rounded-full px-4 py-0.5 text-sm text-left max-w-max text-white`,
            )}
          >
            {highlight}
          </p>
        );
      })}
    </div>
  );
}

export function ExploreButton({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `flex w-full items-center justify-between px-2 pt-6 text-primary-50 dark:text-primary-950 text-xl pb-4 font-bold`,
        props.className,
      )}
    >
      <span>Explore</span>
      <span>
        <ArrowRight />
      </span>
    </div>
  );
}
