"use client"
import { useTranslations } from "next-intl";
import useIsMobile from "@/hooks/custom/use-mobile";

import PageLayout from "../page-layout";
import CircleThumb from "../circle-thumb";
import meImage from "@/images/about/me4.jpg";

const WhatWeDo: React.FC = () => {
    const t = useTranslations("About");
    const isMobile = useIsMobile();

    return (
        <PageLayout id="about-what-we-do" className="flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-center px-4">
            <div className="flex flex-1 justify-center">
                <CircleThumb
                    className="relative"
                    size={isMobile ? "md" : "lg"}
                    imageSrc={meImage}
                />
            </div>
            <div className="flex-1">
                <p className="py-4 text-2xl lg:text-3xl text-center text-primary font-medium font-italiana uppercase tracking-widest">
                    {t("welcome")}
                </p>
                <div className="px-6 py-4 space-y-3 text-start text-base font-normal text-zinc-800 dark:text-gray-300">
                    <p>{t('whereSimplicityIsKey')}</p>
                    <p> {t("aboutPurposeOfWork")}</p>
                </div>
                {/* <HeadingTitle>
                    <p><code className="text-zinc-800 dark:text-white font-italiana">{"<Engineer />"}</code></p>
                    <p><code className="text-zinc-800 dark:text-white font-italiana">{"<Thinker />"}</code></p>
                </HeadingTitle> */}
            </div>
        </PageLayout>
    )
}

export default WhatWeDo;

// const HeadingTitle: React.FC<{ children?: React.ReactNode }> = (({ children }) => {
//     return (
//         <h2 className="text-center text-3xl md:text-lg xl:text-xl font-italiana whitespace-break-spaces
//                 tracking-wide text-zinc-800 dark:text-white flex-1">
//             {children}
//         </h2>
//     )
// });
// HeadingTitle.displayName = "HeadingTitle";