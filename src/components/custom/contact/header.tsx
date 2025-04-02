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
        <div className="gap-4 flex flex-col-reverse md:flex-row relative min-h-96">
            <motion.div
                className="w-full lg:w-1/2 px-0 md:px-5 flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Title title={t("getInTouch")} className="md:text-5xl text-primary uppercase" />
            </motion.div>
            <AnimatedCircleEffect />
            <div className="w-full lg:w-1/2 px-0 md:px-5 hidden lg:block">
                <motion.div
                    className="w-full lg:w-3/4 xl:w-2/3 h-full rounded-t-full overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <Image
                        src={coverImage}
                        alt={t("getInTouch")}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default ContactHeader;
