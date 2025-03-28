"use client"
import { useTranslations } from "next-intl";

import { MEDIUM_SUBSCRIBE } from "@/lib/constants";
import { Button } from "../ui/button";
import SocialMedia from "./social-media";
import PageLayout from "./page-layout";

const Subscribe: React.FC<{ text?: string | any }> = ({ text }) => {
  const t = useTranslations("Subscribe");
  const tContact = useTranslations("Header");

  const handleSubscribeClick = () => {
    window.open(MEDIUM_SUBSCRIBE, "_blank")
  }

  return (
    <PageLayout
      id="contact"
      className="bg-gradient-to-b from-zinc-50 to-white transition-colors duration-300 dark:from-zinc-800/30 dark:to-zinc-800"
    >
      <div className="flex items-center justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center gap-6 px-4">
          <h2 className="text-sm font-medium text-primary-600 dark:text-zinc-300 tracking-wider">
            ⎯ {t("latestNews")}
          </h2>
          <p className="text-center text-xl md:text-3xl lg:text-4xl font-italiana text-zinc-800 dark:text-zinc-100">
            {text ? text : (
              <>{t('stayInTouch')}{' '}{t('joinMyMailingList')}</>
            )}
          </p>
          <SocialMedia className="dark:text-zinc-300 hover:dark:text-primary" />
          <Button onClick={handleSubscribeClick}>
            {tContact("contact")}
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}

export default Subscribe;