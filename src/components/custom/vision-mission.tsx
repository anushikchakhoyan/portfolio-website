import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl";

import PageLayout from "./page-layout";
import { IoIosRocket } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";

const VisionMission = () => {
    const t = useTranslations("MissionVision");

    const data = [
        {
            Icon: IoIosRocket,
            title: t('visionTitle'),
            desc: t('visionDesc')
        },
        {
            Icon: TbTargetArrow,
            title: t('missionTitle'),
            desc: t('missionDesc')
        },
    ]

    return (
        <PageLayout id="mission">
            <div className="gap-6 flex flex-col md:flex-row justify-center mx-auto lg:w-5/6">
                {data.map(({ title, desc, Icon }, index) => (
                    <div key={title} className="px-4 lg:px-8 py-8 lg:py-12 flex flex-col gap-4 lg:gap-6 rounded-xl
                     bg-white dark:bg-zinc-800/30 shadow-xs border border-primary/20 group hover:bg-primary-200/10">
                        <div className="flex flex-col items-start gap-1 text-primary dark:text-primary">
                            <Icon className={cn("w-8 h-8",
                                index === 0 && "group-hover:translate-x-5 group-hover:-translate-y-4 transition-all duration-300",
                                index === 1 && "group-hover:scale-125 transition-all duration-300"
                            )} />
                            <h2 className="text-xl lg:text-2xl font-medium tracking-wider font-italiana">
                                {title}
                            </h2>
                        </div>
                        <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-50">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </PageLayout>
    );
};

export default VisionMission;