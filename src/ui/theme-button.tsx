import { useTheme } from "@/integrations/theme/theme-provider";
import { Button } from "./button";
import { Sun, Moon, Monitor, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useLayoutEffect, useState } from "react";

export function ThemeButton() {
  const { setTheme, theme } = useTheme();
  const [isRendered, setIsRendered] = useState(false);

  useLayoutEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div className={cn(``)}>
      <ThemeButtonItem
        className={cn(``, {
          "text-secondary-500": theme === "light" && isRendered,
        })}
        variant={"outline"}
        size={"sm"}
        onClick={() => setTheme("light")}
        name="switch-to-light-theme"
      >
        <span>
          <Sun />
        </span>
      </ThemeButtonItem>

      <ThemeButtonItem
        className={cn(``, {
          "text-secondary-500": theme === "system" && isRendered,
        })}
        variant={"outline"}
        size={"sm"}
        onClick={() => setTheme("system")}
        name="switch-to-system-default-theme"
      >
        <Monitor className={cn(`max-lg:hidden`)} />
        <Smartphone className={cn(`lg:hidden`)} />
      </ThemeButtonItem>

      <ThemeButtonItem
        className={cn(``, {
          "text-secondary-500": theme === "dark" && isRendered,
        })}
        variant={"outline"}
        size={"sm"}
        onClick={() => setTheme("dark")}
        name="switch-to-dark-theme"
      >
        <Moon />
      </ThemeButtonItem>
    </div>
  );
}

function ThemeButtonItem({ ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      suppressHydrationWarning
      {...props}
      className={cn(
        `text-text-500 border-background-400 rounded-none first:rounded-tl-sm first:rounded-bl-sm first:border-r-0 last:rounded-tr-sm last:rounded-br-sm last:border-l-0`,
        props.className,
      )}
    />
  );
}
