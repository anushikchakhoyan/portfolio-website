import { useTranslations } from "next-intl";

import PageLayout from "../page-layout";

const WhatWeDo: React.FC = () => {
    const t = useTranslations("About");

    return (
        <PageLayout id="about-what-we-do" className="flex items-center justify-center md:!pt-40 px-4">
            <div className="w-full lg:w-1/2 xl:w-2/4 flex flex-col items-center gap-6">
                <p className="text-lg text-center font-medium text-primary-900 dark:text-zinc-50 uppercase tracking-widest">
                    {t("welcome")}
                </p>
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary dark:bg-primary/60
                    transform -skew-y-2 scale-105 group-hover:scale-110 transition-all duration-300" />
                    <p className="relative text-center text-xl lg:text-3xl font-italiana 
                     text-zinc-50 leading-snug px-6 py-4">{t('whereSimplicityIsKey')}</p>
                </div>
                <p className="text-center text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                    {t("aboutPurposeOfWork")}
                </p>
            </div>
        </PageLayout>
    )
}

export default WhatWeDo
