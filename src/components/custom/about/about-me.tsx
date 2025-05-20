import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import PageLayout from "../page-layout";

const AboutMe: React.FC = () => {
    const t = useTranslations("About");

    return (
        <PageLayout>
            <div className="flex items-start flex-col gap-20 relative">
                <p className="text-2xl lg:text-3xl xl:text-6xl text-zinc-800 dark:text-zinc-100 font-medium font-italiana tracking-widest">
                    {t("itsMe")}
                </p>
                <div className="flex items-start">
                    <div className="flex-1 text-base md:text-lg whitespace-break-spaces grid gap-8 w-full">
                        <p className="text-justify">{t('whatIs1')}</p>
                        <p className="text-justify">{t('whatIs2')}</p>
                    </div>
                    <div className="flex-1">
                        <CircelItem className="w-50 h-50 top-5 right-80" />
                        <CircelItem className="w-75 h-75 right-8 -bottom-20" />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

const CircelItem: React.FC<{ className: string }> = (({ className, ...props }) => {
    return (
        <div
            className={cn(
                `rounded-full bg-primary/20 absolute`, className
            )}
            {...props}
        >
        </div>
    )
})
CircelItem.displayName = "CircelItem"

export default AboutMe;

