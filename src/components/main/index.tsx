import { cn } from "@/lib/utils";
import { Route } from "@/routes/__root";
import { Button } from "@/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Home, RefreshCw } from "lucide-react";
import React from "react";
import { RiWhatsappLine } from "react-icons/ri";

export default function Main({ ...props }: React.ComponentProps<"main">) {
  return (
    <main {...props} className={cn(`grow`, props.className)}>
      {props.children}
      <WhatsappButton />
    </main>
  );
}

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+918145149700"
      target="_blank"
      aria-label="whatsapp-button"
    >
      <button
        className={cn(
          `fixed right-10 bottom-10 scale-100 rounded-full bg-[#25D366] p-1 text-white md:right-20 md:bottom-16 md:translate-x-10 md:scale-125 lg:right-30 lg:translate-x-16 lg:scale-140`,
        )}
        aria-label="whatsapp-button"
      >
        <RiWhatsappLine size={28} />
      </button>
    </a>
  );
}

export function RootError() {
  const route = Route.path;
  const navigate = useNavigate();

  async function reload() {
    await navigate({
      to: route,
      replace: true,
    });
  }

  return (
    <div className={cn(`flex min-h-[80svh] items-center justify-center`)}>
      <div
        className={cn(
          `m-auto flex max-w-160 flex-col items-center justify-center gap-y-4 rounded-3xl p-4`,
        )}
      >
        <p>Uhh...</p>

        <h1
          className={cn(`pb-4 text-center text-4xl font-semibold text-balance`)}
        >
          Some error happened while processing!!!
        </h1>

        <p className={cn(`pb-4 text-lg`)}>
          Try to refresh the page with the button below.
        </p>

        <div className={cn(`pb-4`)}>
          <Button onClick={reload}>
            <RefreshCw /> Reload page
          </Button>
        </div>
      </div>
    </div>
  );
}

export function RootNotFound() {
  const navigate = useNavigate();

  async function gotoHomePage() {
    await navigate({
      to: "/",
      replace: true,
    });
  }

  async function gotoPreviousPage() {
    history.back();
  }

  return (
    <div className={cn(`flex min-h-[80svh] items-center justify-center`)}>
      <div
        className={cn(
          `m-auto flex max-w-160 flex-col items-center justify-center gap-y-4 rounded-3xl p-4`,
        )}
      >
        <p>404 Not Found</p>

        <h1
          className={cn(`pb-4 text-center text-4xl font-semibold text-balance`)}
        >
          Oops! Page Not Found.
        </h1>

        <p className={cn(`pb-4 text-center text-lg text-balance`)}>
          The page you are looking for does not exists. Click the button below
          to go back or go to home page.
        </p>

        <div className={cn(`flex gap-x-4 pb-4`)}>
          <Button onClick={gotoPreviousPage}>
            <ArrowLeft /> Go to previous page
          </Button>

          <Button onClick={gotoHomePage}>
            <Home /> Go to home page
          </Button>
        </div>
      </div>
    </div>
  );
}
