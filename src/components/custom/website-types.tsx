
"use client"

import { useTranslations } from "next-intl";
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import useWebsiteTypeaData from "@/hooks/custom/use-website-types-data";
import PageLayout from "./page-layout";

const SLIDE_COLORS = [
    "#003366",
    "#174978",
    "#2F5F8A",
    "#46769B",
    "#5E8CAD",
    "#75A2BF",
];

const WebsiteTypes: React.FC = () => {
    const t = useTranslations("WebsiteTypes");
    const websites = useWebsiteTypeaData();

    return (
        <PageLayout id="website-types" className="flex items-center flex-col gap-10">
            <div className="flex-1 text-center px-8 flex flex-col gap-6 lg:gap-8 w-full max-w-2xl">
                <h3 className="text-xl md:text-2xl xl:text-3xl font-medium text-zinc-800 dark:text-white">{t('websiteTypesTitle')}</h3>
                <p className="text-lg md:text-xl font-medium text-zinc-800 dark:text-gray-200">{t('websiteTypesDescription')}</p>
            </div>

            <div className="flex-1 w-full">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-60 h-75 md:w-87.5 md:h-100 lg:w-100 lg:h-100"
                >
                    {websites.map(({ key, descKey, img }, index) => {
                        const bgColor = SLIDE_COLORS[index % SLIDE_COLORS.length];
                        return (
                            <SwiperSlide key={key} className="flex! items-center justify-center rounded-2xl" style={{
                                backgroundColor: bgColor
                            }}>
                                <div className="text-center px-8 xl:px-8 flex flex-col gap-4 md:gap-8 w-full">
                                    <h3 className="text-base lg:text-xl font-medium text-white">{key}</h3>
                                    <p className="text-sm lg:text-base font-medium text-white">{descKey}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </PageLayout>
    );
};

export default WebsiteTypes;
