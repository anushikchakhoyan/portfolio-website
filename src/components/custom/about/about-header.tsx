"use client"
import { useTranslations } from "next-intl";
import useIsMobile from "@/hooks/custom/use-mobile";

import PageLayout from "../page-layout";
import CircleThumb from "../circle-thumb";
import { motion, Variants } from "framer-motion";

const AboutHeader: React.FC = () => {
    const t = useTranslations("About");
    const tHeader = useTranslations("Header");
    const isMobile = useIsMobile();

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: "easeOut"
            }
        }),
    };

    return (
        <PageLayout id="about-what-we-do" className="flex px-4 max-w-5xl mx-auto relative py-32 lg:py-20">
            <CircleThumb
                className="w-60 lg:w-[500px] h-60 lg:h-[500px] static bg-primary/60 dark:bg-primary/40"
                size={isMobile ? "md" : "lg"}
            />
            <div className="grid gap-10 px-6 absolute w-full max-w-xs lg:max-w-3xl z-10 translate-y-10 md:translate-y-1/2 translate-x-16 md:translate-x-52">
                <motion.h4
                    className="text-4xl lg:text-5xl xl:text-6xl text-zinc-800 dark:text-zinc-100 font-medium font-italiana tracking-widest"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.9 },
                        visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {tHeader("name")}
                </motion.h4>

                <motion.div
                    className="grid gap-2 text-start text-sm lg:text-lg font-normal text-zinc-800 dark:text-zinc-100"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    <motion.p custom={0} variants={textVariants}>{t('whereSimplicityIsKey')}</motion.p>
                    <motion.p custom={1} variants={textVariants}>{t("aboutPurposeOfWork")}</motion.p>
                </motion.div>
                {/* <HeadingTitle>
                    <p><code className="text-zinc-800 dark:text-white font-italiana">{"<Engineer />"}</code></p>
                    <p><code className="text-zinc-800 dark:text-white font-italiana">{"<Thinker />"}</code></p>
                </HeadingTitle> */}
            </div>
        </PageLayout>
    )
}

export default AboutHeader;