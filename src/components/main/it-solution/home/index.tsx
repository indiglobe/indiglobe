import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import { Button } from "@/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function HomePage({ ...props }: ComponentProps<"div">) {
  return (
    <div {...props} className={cn(``, props.className)}>
      <HeroSection />
    </div>
  );
}

function HeroSection({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <div className={cn(`relative -mx-10 md:-mx-20 lg:-mx-30`)}>
        <div className={cn(`min-h-[90svh] overflow-x-clip`)}>
          <video
            className={cn(`max-w-none min-w-full object-cover`)}
            src={heroVideo}
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
          <div className={cn(`absolute inset-0 bg-black/30`)} />
        </div>

        <div
          className={cn(
            `absolute inset-0 isolate flex flex-col items-start bg-linear-to-r from-black/60 from-0% via-black/60 via-30% to-transparent`,
          )}
        >
          <div
            className={cn(
              `relative flex w-2/3 max-w-160 translate-y-20 flex-col gap-y-6 pl-10 text-white md:gap-y-8 md:pl-20 lg:gap-y-12 lg:pl-30`,
            )}
          >
            <h1
              className={cn(
                `text-3xl leading-12 font-bold md:text-5xl md:leading-18 lg:text-7xl lg:leading-20`,
              )}
            >
              Grow Your Business with Indiglobe
            </h1>

            <p className={cn(`text-lg font-semibold md:text-xl lg:text-2xl`)}>
              Affordable marketing, web, and tele calling services tailored for
              you
            </p>

            <div className={cn(`flex flex-wrap gap-6`)}>
              <Link to="/services" className={cn(`group`)} tabIndex={-1}>
                <Button
                  className={cn(
                    `focus-visible:ring-offset-background-950 dark:focus-visible:ring-offset-background-50 rounded-full px-8 py-6 text-lg`,
                  )}
                >
                  Get started{" "}
                  <span className={cn(`group-hover:translate-x-2`)}>
                    <ArrowRight />
                  </span>
                </Button>
              </Link>
              <a href="tel:+918336071074" className={cn(`group`)} tabIndex={-1}>
                <Button
                  variant={"outline"}
                  className={cn(
                    `dark:focus-visible:ring-offset-background-50 focus-visible:ring-offset-background-950 rounded-full border-white px-8 py-5.75 text-lg`,
                  )}
                >
                  Call now
                  <span className={cn(`rotate-270 group-hover:rotate-220`)}>
                    <Phone />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
