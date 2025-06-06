"use client"
import { cn } from "@/lib/utils"
import { GoDotFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import useInfoData from "@/hooks/custom/use-info-data";
import { Service } from "@/lib/types";
import PageLayout from "../page-layout";

const InfoBlock: React.FC<{ type: Service }> = ({ type }) => {
    const data = useInfoData(type);

    return (
        <PageLayout id="mentorship-info" className="h-[500px] md:h-[800px]">
            <Swiper
                direction="vertical"
                spaceBetween={0}
                mousewheel={{
                    forceToAxis: true,
                    thresholdDelta: 8,
                    thresholdTime: 300,
                }}
                pagination={{ clickable: true }}
                modules={[Mousewheel, Pagination]}
                className="w-full h-full"
            >
                {data.map(({ title, description, items }, index) => (
                    <SwiperSlide
                        key={title}
                        className={cn(
                            `px-2 lg:px-8 gap-6 xl:gap-4 rounded-lg !flex flex-col-reverse lg:flex-row items-center justify-center`,
                            index % 2 === 0
                                ? 'bg-gradient-to-r from-white to-primary/10 dark:from-zinc-800 dark:to-zinc-900'
                                : 'bg-gradient-to-r from-white to-secondary/30 dark:from-zinc-900 dark:to-zinc-800'
                        )}
                    >
                        <div className="xl:px-8 flex flex-col gap-8 w-full lg:w-3/5 z-10">
                            {title && (
                                <h3 className="text-center text-lg lg:text-2xl xl:text-5xl font-medium text-primary">
                                    {title}
                                </h3>
                            )}
                            {description && (
                                <p className="text-sm lg:text-xl xl:text-2xl text-zinc-700 dark:text-gray-300 whitespace-break-spaces">
                                    {description}
                                </p>
                            )}
                            {items?.length && (
                                <ul>
                                    {items.map((item: string, index: number) => (
                                        <li key={index} className="flex items-baseline py-3">
                                            <div className="w-3 lg:w-5 leading-6 mx-1 hidden md:block">
                                                <GoDotFill className="text-primary" />
                                            </div>
                                            <p
                                                dangerouslySetInnerHTML={{ __html: item as string }}
                                                className="max-w-2xl text-zinc-800 dark:text-zinc-100 text-xs lg:text-xl" />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </PageLayout>
    );
};

export default InfoBlock;
