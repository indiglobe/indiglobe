import { ComponentProps } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { useNavAction } from "@/hooks/use-nav-state";
import { LinkProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function NavItem({
  isActive,
  ...props
}: { isActive: boolean; className?: string } & LinkProps) {
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

export function DropdownNav({ ...props }: ComponentProps<typeof DropdownMenu>) {
  return <DropdownMenu {...props} />;
}

export function DropdownNavTrigger({
  isActive,
  to,
  ...props
}: { isActive: boolean; className?: string } & ComponentProps<
  typeof DropdownMenuTrigger
> &
  Pick<LinkProps, "to">) {
  return (
    <DropdownMenuTrigger {...props} tabIndex={-1}>
      <NavItem to={to} isActive={isActive}>
        {props.children}
      </NavItem>
    </DropdownMenuTrigger>
  );
}

export function DropdownNavContent({
  ...props
}: ComponentProps<typeof DropdownMenuContent>) {
  return <DropdownMenuContent {...props} />;
}

export function DropdownNavItem({
  isActive,
  to,
  ...props
}: { isActive: boolean; className?: string } & ComponentProps<
  typeof DropdownMenuItem
> &
  Pick<LinkProps, "to">) {
  return (
    <DropdownMenuItem {...props}>
      <NavItem to={to} isActive={isActive}>
        {props.children}
      </NavItem>
    </DropdownMenuItem>
  );
}
