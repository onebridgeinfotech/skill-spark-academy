import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";

/** Tight-crop of the original artwork with transparent background for header blending. */
export const BRAND_LOGO_SRC = "/images/ismart-skills-logo-trimmed.png";
export const BRAND_LOGO_WIDTH = 743;
export const BRAND_LOGO_HEIGHT = 187;
export const BRAND_LOGO_ALT = `${siteConfig.name} — professional IT training and development`;

type BrandLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function BrandLogo({ variant = "header", className }: BrandLogoProps) {
  const isFooter = variant === "footer";

  const image = (
    <img
      src={BRAND_LOGO_SRC}
      alt={BRAND_LOGO_ALT}
      width={BRAND_LOGO_WIDTH}
      height={BRAND_LOGO_HEIGHT}
      decoding="async"
      fetchPriority={variant === "header" ? "high" : undefined}
      loading={variant === "header" ? "eager" : "lazy"}
      className={cn(
        "block w-auto max-w-full shrink-0 select-none object-contain object-left",
        isFooter ? "h-10 sm:h-11" : "h-9 sm:h-10 md:h-11 lg:h-12",
        className,
      )}
    />
  );

  if (isFooter) {
    return (
      <span className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-md ring-1 ring-white/10">
        {image}
      </span>
    );
  }

  return image;
}
