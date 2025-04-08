"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import AnimatedCircleEffect from "../animated-circle-effect";
import coverImage from "@/images/contact-cover.jpg";
import Title from "../title";

const ContactHeader = () => {
    const t = useTranslations("Header");

    return (
        <div className="gap-6 flex flex-col-reverse lg:flex-row relative min-h-[60vh] md:min-h-96 px-4 sm:px-6 items-center">
            <motion.div
                className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8"
                initial="hidden"
                animate="visible"
            >
                <Title title={t("getInTouch")} className="md:text-5xl text-primary uppercase" />
            </motion.div>

            <div className="w-full lg:w-1/2 flex justify-center relative">
                <AnimatedCircleEffect />
                <motion.div
                    className="w-full max-w-xs lg:max-w-sm aspect-square rounded-t-full 
                    overflow-hidden border-4 border-white dark:border-zinc-900"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <Image
                        src={coverImage ?? ''}
                        alt={t("getInTouch")}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default ContactHeader;
