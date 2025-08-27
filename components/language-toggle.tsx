"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "fr" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          type="button"
          size="icon"
          className="size-10"
          onClick={toggleLanguage}
        >
          {locale === "en" ? (
            <span className="text-base" role="img" aria-label="French flag">
              🇫🇷
            </span>
          ) : (
            <span className="text-base" role="img" aria-label="British flag">
              🇬🇧
            </span>
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Language</p>
      </TooltipContent>
    </Tooltip>
  );
}
