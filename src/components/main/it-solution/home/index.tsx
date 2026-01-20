import { cn } from "@/lib/utils";
import { ComponentProps, useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import { Button } from "@/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { servicesData, statisticsData } from "./data";
import {
  StatisticsCard,
  StatisticsCardBoldText,
  StatisticsCardIcon,
  StatisticsCardText,
} from "@/ui/statistics-card";
import { Image } from "@unpic/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ExploreButton,
  ServicesHighlighted,
  ServicesOffered,
  ServicesOfferedCard,
  ServicesOfferedDetails,
  ServicesOfferedHeading,
} from "@/ui/services-offered-card";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function HomePage({ ...props }: ComponentProps<"div">) {
  return (
    <div {...props} className={cn(``, props.className)}>
      <HeroSection />

      <StatisticsSection />

      <OurDetailsSection />

      <OurServicesSection />

      <OurClientsSection />

      <ContactForm />
    </div>
  );
}

function HeroSection({ ...props }: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(`px-10 md:px-20 lg:px-30`, props.className)}
    >
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
                  <span
                    className={cn(`transition-all group-hover:translate-x-2`)}
                  >
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
                  <span
                    className={cn(
                      `rotate-270 transition-all group-hover:rotate-220`,
                    )}
                  >
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

function StatisticsSection({ ...props }: ComponentProps<"section">) {
  const wrapper = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-statistics-card",
        {
          y: "20px",
          opacity: 0,
          scrollTrigger: {
            trigger: wrapper.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
        { y: "0px", stagger: 0.5, opacity: 1 },
      );
    },
    { scope: wrapper },
  );

  return (
    <section
      {...props}
      className={cn(
        `bg-primary-400 dark:bg-primary-500 text-text-50 dark:text-text-950 px-10 py-16 md:px-20 lg:px-30`,
      )}
    >
      <div
        ref={wrapper}
        className={cn(
          `grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4`,
        )}
      >
        {statisticsData.map(({ heading, icon, text }) => {
          return (
            <StatisticsCard
              className={cn(`gsap-statistics-card opacity-0`)}
              key={text}
            >
              <StatisticsCardIcon>{icon}</StatisticsCardIcon>
              <StatisticsCardBoldText>{heading}</StatisticsCardBoldText>
              <StatisticsCardText>{text}</StatisticsCardText>
            </StatisticsCard>
          );
        })}
      </div>
    </section>
  );
}

function OurDetailsSection({ ...props }: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(`px-10 py-16 md:px-20 lg:px-30`, props.className)}
    >
      <div
        className={cn(
          `m-auto space-y-16 *:overflow-clip *:rounded-2xl max-md:max-w-120 max-md:*:flex-col-reverse md:*:even:flex-row-reverse`,
        )}
      >
        <div
          className={cn(
            `flex flex-col items-center gap-x-8 gap-y-8 *:basis-full md:flex-row`,
          )}
        >
          <div>
            <h3 className={cn(`mb-8 text-2xl font-bold`)}>Who We Are</h3>

            <div className={cn(`lg:pr-30`)}>
              <p>
                We are a professional IT solutions company based in Nadia, West
                Bengal, providing reliable services in tele-calling, digital
                marketing, and website design. With 3+ years of experience, we
                have successfully delivered 22+ projects for 10+ satisfied
                clients, helping local businesses strengthen their digital
                presence and customer outreach. Our work is driven by
                transparency, innovation, and a customer-first approach.
              </p>
            </div>
          </div>

          <div className={cn(`relative aspect-video overflow-clip`)}>
            <Image
              src="https://images.pexels.com/photos/35551077/pexels-photo-35551077.jpeg"
              layout="fullWidth"
              className={cn(
                `absolute h-full w-full object-cover hover:scale-110`,
              )}
              alt="who-we-are-section-image"
            />
          </div>
        </div>

        <div
          className={cn(
            `flex flex-col items-center gap-x-8 gap-y-8 *:basis-full md:flex-row`,
          )}
        >
          <div>
            <h3 className={cn(`mb-8 text-2xl font-bold`)}>
              Mission and Vision
            </h3>

            <div className={cn(`lg:pr-30`)}>
              <p>
                Our mission is to deliver cost-effective and result-driven IT
                solutions that help businesses grow through effective
                communication and digital strategies. Our vision is to become a
                trusted local IT solutions partner in West Bengal, recognized
                for quality service, professionalism, and long-term client
                success.
              </p>
            </div>
          </div>

          <div className={cn(`relative aspect-video overflow-clip`)}>
            <Image
              src="https://images.pexels.com/photos/35629751/pexels-photo-35629751.jpeg"
              layout="fullWidth"
              className={cn(
                `absolute h-full w-full object-cover hover:scale-110`,
              )}
              alt="misson-and-vision-section-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OurServicesSection({ ...props }: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        `bg-primary-400 dark:bg-primary-500 text-text-50 dark:text-text-950 px-10 py-16 md:px-20 lg:px-30`,
        props.className,
      )}
    >
      <SectionHeading>Our Services</SectionHeading>

      <SectionSubHeading className={cn(`pb-16`)}>
        Tailored solution in digital marketing , web development and telecalling
      </SectionSubHeading>

      <div
        className={cn(
          `grid grid-cols-1 place-items-center gap-4 lg:grid-cols-3`,
        )}
      >
        {servicesData.map(({ details, heading, serviceHighlights }) => {
          return (
            <ServicesOffered key={heading}>
              <ServicesOfferedCard>
                <ServicesOfferedHeading>{heading}</ServicesOfferedHeading>
                <ServicesOfferedDetails>{details}</ServicesOfferedDetails>
                <ServicesHighlighted highlights={serviceHighlights} />
              </ServicesOfferedCard>
              <ExploreButton />
            </ServicesOffered>
          );
        })}
      </div>
    </section>
  );
}

function OurClientsSection({ ...props }: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(`px-10 py-4 md:px-20 lg:px-30`, props.className)}
    >
      <SectionHeading>Our Clients</SectionHeading>

      <SectionSubHeading>
        Hear from or clients what they have to say
      </SectionSubHeading>

      <div></div>
    </section>
  );
}

function ContactForm({ ...props }: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        `bg-secondary-300 px-10 py-4 md:px-20 lg:px-30`,
        props.className,
      )}
    ></section>
  );
}

function SectionHeading({ ...props }: ComponentProps<"h2">) {
  return (
    <h2
      {...props}
      {...props}
      className={cn(`pb-4 text-center text-3xl font-semibold`, props.className)}
    />
  );
}

function SectionSubHeading({ ...props }: ComponentProps<"h3">) {
  return (
    <h3
      {...props}
      {...props}
      className={cn(`text-center text-lg`, props.className)}
    />
  );
}
