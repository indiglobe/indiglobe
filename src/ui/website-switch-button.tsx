import React from "react";
import { cn } from "@/lib/utils/index";
import { Button } from "./button";
import { Link, useLocation } from "@tanstack/react-router";
import { FileRoutesByFullPath } from "../routeTree.gen";
import { useNavAction } from "@/hooks/use-nav-state";

export type WebsiteSwitchButtonProps = React.ComponentProps<"button">;

export function WebsiteSwitchButton({ ...props }: WebsiteSwitchButtonProps) {
  return <Button className={cn(`bg-primary-500 max-lg:w-full`)} {...props} />;
}

export function SwitchWebsite({ ...props }: React.ComponentProps<typeof Link>) {
  const { closeNavbar } = useNavAction();

  type RoutesList = keyof FileRoutesByFullPath;
  const pathname: RoutesList = useLocation({
    select: ({ pathname }) => pathname as RoutesList,
  });
  return (
    <Link
      tabIndex={-1}
      className={cn(
        `focus-visible:ring-primary focus-visible:ring-offset-background-50 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none max-lg:w-full`,
      )}
      {...props}
      to={pathname.startsWith("/institute") ? "/" : "/institute"}
      onClick={closeNavbar}
    >
      <WebsiteSwitchButton>
        <span>
          Switch to{" "}
          <span>
            {pathname.startsWith("/institute") && "IT Solutions"}
          </span>
          <span>{!pathname.startsWith("/institute") && "Institute"}</span>
        </span>
      </WebsiteSwitchButton>
    </Link>
  );
}
