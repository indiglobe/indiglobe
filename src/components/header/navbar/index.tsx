import { cn } from "@/lib/utils";
import { SwitchWebsite } from "@/ui/website-switch-button";
import { Link, useLocation } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import logo from "@/assets/indiglobe-logo.avif";
import { ComponentProps } from "react";
import { AlignJustify, X } from "lucide-react";
import { useNavAction, useNavState } from "@/hooks/use-nav-state";

export function NavBar({ ...props }: ComponentProps<"nav">) {
  return (
    <nav {...props} className={cn(``)}>
      <SmallScreenNavBar />
      <LargeScreenNavBar />
    </nav>
  );
}

function SmallScreenNavBar({ ...props }: ComponentProps<"div">) {
  const { navState } = useNavState();

  return (
    <div
      {...props}
      className={cn(
        `relative flex w-full justify-between px-10 md:px-20 lg:hidden lg:px-30`,
        props.className,
      )}
    >
      <div className={cn(`flex items-center gap-2`)}>
        <Logo />
      </div>

      <div
        className={cn(
          `absolute -top-10 left-0 isolate z-9999 w-full px-10 pt-26 pb-10 md:px-20 lg:px-30`,
          {
            "-translate-y-full": navState === "close",
            "translate-y-0": navState === "open",
          },
        )}
      >
        <NavItems />

        <div className={cn(`my-8`)} />

        <SwitchWebsite />

        <div
          className={cn(
            `bg-primary-100/50 absolute inset-0 -z-1 backdrop-blur-sm`,
          )}
        />
      </div>

      <div className={cn(`flex items-center gap-2`)}>
        <HamburgerButton />
      </div>
    </div>
  );
}

function LargeScreenNavBar({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `hidden w-full justify-between px-10 md:px-20 lg:flex lg:px-30`,
        props.className,
      )}
    >
      <div className={cn(`flex items-center gap-10`)}>
        <Logo />
        <NavItems />
      </div>

      <div className={cn(`flex items-center gap-2`)}>
        <SwitchWebsite />
      </div>
    </div>
  );
}

function NavItems() {
  const { pathname } = useLocation();
  return (
    <div className={cn(`flex gap-6 text-lg font-semibold max-lg:flex-col`)}>
      {pathname.startsWith("/institute") && <InstituteNavItems />}
      {!pathname.startsWith("/institute") && <ITSolutionNavItems />}
    </div>
  );
}

function ITSolutionNavItems() {
  const { pathname } = useLocation();
  const pathnameFirstSegment = pathname.split("/")[1];
  return (
    <>
      <NavItem to="/" isActive={pathnameFirstSegment === ""}>
        Home
      </NavItem>
      <NavItem to="/services" isActive={pathnameFirstSegment === "services"}>
        Services
      </NavItem>
      <NavItem to="/our-works" isActive={pathnameFirstSegment === "our-works"}>
        Our works
      </NavItem>
      <NavItem to="/about-us" isActive={pathnameFirstSegment === "about-us"}>
        About us
      </NavItem>
      <NavItem to="/contact" isActive={pathnameFirstSegment === "contact"}>
        Contact
      </NavItem>
    </>
  );
}

function InstituteNavItems() {
  const { pathname } = useLocation();
  const pathnameSecondSegment = pathname.split("/")[2];

  return (
    <>
      <NavItem to="/institute" isActive={pathnameSecondSegment === undefined}>
        Home
      </NavItem>
      <NavItem
        to="/institute/courses"
        isActive={pathnameSecondSegment === "courses"}
      >
        Courses
      </NavItem>
      <NavItem
        to="/institute/reviews"
        isActive={pathnameSecondSegment === "reviews"}
      >
        Reviewes
      </NavItem>
      <NavItem
        to="/institute/about"
        isActive={pathnameSecondSegment === "about"}
      >
        About
      </NavItem>
      <NavItem
        to="/institute/contact"
        isActive={pathnameSecondSegment === "contact"}
      >
        Contact
      </NavItem>
    </>
  );
}

function NavItem({
  isActive,
  ...props
}: { isActive: boolean } & ComponentProps<typeof Link>) {
  const { closeNavbar } = useNavAction();

  return (
    <Link
      {...props}
      className={cn(
        `focus-visible:ring-primary-500 focus-visible:ring-offset-primary-100 lg:focus-visible:ring-offset-background-50 -mx-2 rounded-md px-2 outline-none focus-visible:ring-2 focus-visible:ring-offset-2`,
        {
          "text-primary-600": isActive,
        },
        props.className,
      )}
      onClick={closeNavbar}
    />
  );
}

function Logo() {
  const { pathname } = useLocation();
  return (
    <Link
      className={cn(
        `focus-visible:ring-primary-500 focus-visible:ring-offset-background-50 inline-block size-20 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-offset-2`,
      )}
      to={pathname.startsWith("/institute") ? "/institute" : "/"}
    >
      <span className={cn(`inline-block size-full`)}>
        <Image src={logo} alt="indiglobe-logo" layout="fullWidth" />
      </span>
    </Link>
  );
}

function HamburgerButton({ ...props }: ComponentProps<"button">) {
  const { navState } = useNavState();
  const { toggleNavbar } = useNavAction();
  return (
    <button
      {...props}
      onClick={toggleNavbar}
      className={cn(`z-9999`, props.className)}
      name={navState === "open" ? "close-navbar" : "open-navbar"}
    >
      {navState === "close" && <AlignJustify size={30} />}
      {navState === "open" && <X size={35} />}
    </button>
  );
}
