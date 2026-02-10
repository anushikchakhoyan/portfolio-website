"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import PageLayout from "../page-layout";
import about1 from "@/images/about/5.jpg";
import about2 from "@/images/about/6.jpg";

const AboutMe: React.FC = () => {
    const t = useTranslations("About");

    return (
        <PageLayout>
            <div className="flex items-start flex-col gap-10 lg:gap-20 relative">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl lg:text-6xl text-zinc-800 dark:text-zinc-100 font-medium font-italiana tracking-widest"
                >
                    {t("itsMe")}
                </motion.p>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                    className="flex flex-col md:flex-row items-start w-full"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="flex-1 text-base md:text-lg whitespace-break-spaces grid gap-8 w-full"
                    >
                        <p className="text-justify">{t("whatIs1")}</p>
                        <p className="text-justify">{t("whatIs2")}</p>
                    </motion.div>
                    <div className="flex-1 relative hidden lg:block">
                        <motion.div variants={fadeInScale}>
                            <CircleItem className="w-60 h-60 top-5 right-80" imageSrc={about1} />
                        </motion.div>
                        <motion.div variants={fadeInScale}>
                            <CircleItem className="w-75 h-75 right-8 -bottom-20" imageSrc={about2} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </PageLayout>
    );
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const CircleItem: React.FC<{ className: string, imageSrc: StaticImageData }> = ({ className, imageSrc, ...props }) => {
    return (
        <div
            className={cn("absolute overflow-hidden", className)}
            {...props}
        >
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt="Profile picture"
                    className="w-full h-full object-cover rounded-full bg-primary/20"
                />
            )}
        </div>
    );
};
CircleItem.displayName = "CircleItem";

export default AboutMe;
