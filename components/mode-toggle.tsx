"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          type="button"
          size="icon"
          className="size-10"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="size-4 text-neutral-800 dark:hidden dark:text-neutral-200" />
          <MoonIcon className="hidden size-4 text-neutral-800 dark:block dark:text-neutral-200" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Theme</p>
      </TooltipContent>
    </Tooltip>
  );
}
