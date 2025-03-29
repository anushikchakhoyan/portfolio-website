
"use client"
import { useTranslations } from "next-intl";
import useIsMobile from "@/hooks/custom/use-mobile";

import CircleThumb from "../circle-thumb";
import meImage from "@/images/about/me4.jpg";

const Heading: React.FC = () => {
  const t = useTranslations("About");
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-2 md:gap-10 lg:gap-8 md:h-96 w-full
     bg-zinc-50 dark:bg-[#202020]">
      <HeadingTitle>{t("itsMe")}</HeadingTitle>
      <CircleThumb
        className="relative md:top-24"
        size={isMobile ? "md" : "lg"}
        imageSrc={meImage}
      />
      <HeadingTitle>
        <p><code className="text-zinc-800 dark:text-white font-italiana">{"<Engineer />"}</code></p>
        <p><code className="text-zinc-800 dark:text-white font-italiana">{"<Thinker />"}</code></p>
      </HeadingTitle>
    </div>
  )
}

export default Heading;

const HeadingTitle: React.FC<{ children?: React.ReactNode }> = (({ children }) => {
  return (
    <h2 className="text-center text-3xl md:text-2xl xl:text-4xl font-italiana whitespace-break-spaces
                tracking-wide py-10 md:py-20 text-zinc-800 dark:text-white flex-1">
      {children}
    </h2>
  )
});
HeadingTitle.displayName = "HeadingTitle";
