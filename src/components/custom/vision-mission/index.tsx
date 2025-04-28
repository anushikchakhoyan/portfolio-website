'use client'
import { useTranslations } from "next-intl";
import { IoIosRocket } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";

import MouseMoveEffect from "./mouse-move-effect";
import PageLayout from "../page-layout";
import { PURPOSE } from "@/lib/constants";

const VisionMission = () => {
    const t = useTranslations("MissionVision");

    const data = [
        {
            Icon: IoIosRocket,
            title: t('visionTitle'),
            desc: t('visionDesc'),
            type: PURPOSE.vision
        },
        {
            Icon: TbTargetArrow,
            title: t('missionTitle'),
            desc: t('missionDesc'),
            type: PURPOSE.mission
        },
    ]

    return (
        <PageLayout id="mission">
            <div className="gap-6 flex flex-col md:flex-row justify-center mx-auto lg:w-5/6">
                {data.map((items) => (
                    <MouseMoveEffect key={items.title} items={items} />
                ))}
            </div>
        </PageLayout>
    );
};

export default VisionMission;
