"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

import { LINKEDIN_URL } from "@/lib/constants";
import PageLayout from "../page-layout";
import meImage from "@/images/about/me4.jpg";
import Title from "../title";

const OurFounders: React.FC = () => {
    const t = useTranslations("About");

    const founders = [
        {
            quote1: t('foundersQuote1'),
            quote2: t('foundersQuote2'),
            linkedin: {
                url: LINKEDIN_URL,
                name: t('anushChakhoyan')
            },
            position: t('coFounder'),
            src: meImage
        }
    ];

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: "easeOut",
            }
        }),
    };

    return (
        <PageLayout className="grid gap-16 px-4 sm:px-6 lg:px-0">
            <Title
                title={t("ourFounders")}
                className="font-bold text-start font-italiana text-primary mx-auto"
            />
            <div className="w-full mx-auto max-w-sm md:max-w-5xl">
                {founders.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col gap-6 mx-auto max-w-3xl px-2 sm:px-4 md:px-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={fadeInUp}
                        custom={index}
                    >
                        <motion.p
                            className="text-justify text-base sm:text-lg"
                            variants={fadeInUp}
                            custom={0}
                        >
                            {item.quote1}
                        </motion.p>
                        <motion.p
                            className="text-justify text-base sm:text-lg"
                            variants={fadeInUp}
                            custom={1}
                        >
                            {item.quote2}
                        </motion.p>
                        <motion.div
                            className="flex flex-row items-center justify-end gap-4 pt-6"
                            variants={fadeInUp}
                            custom={2}
                        >
                            <div className="grid text-center sm:text-end">
                                <Link href={item.linkedin.url} target="_blank" className="text-base hover:text-primary">
                                    {item.linkedin.name}
                                </Link>
                                <p className="text-xs">{item.position}</p>
                            </div>
                            <Image
                                src={item.src}
                                alt={item.linkedin.name}
                                className="w-16 h-16 object-cover rounded-full"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </PageLayout>
    );
};

export default OurFounders;
