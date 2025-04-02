"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Service } from "@/lib/types";
import useBenefitsData from "@/hooks/custom/use-benefits-data";

import PageLayout from "../page-layout";
import Title from "../title";
import { cn } from "@/lib/utils";

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const imageVariants = (isEven: boolean) => ({
    hidden: { x: isEven ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
});

const Benefits: React.FC<{ type: Service }> = ({ type }) => {
    const t = useTranslations("Benefits");
    const benefits = useBenefitsData(type);

    return (
        <PageLayout id="benefits">
            <motion.div
                className="bg-gold-100 text-center py-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <Title title={t("benefits")} />
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                    {benefits.map((item, index) => (
                        <div
                            key={item.title}
                            className={cn(
                                `overflow-hidden flex cursor-pointer`,
                                index % 2 === 0
                                    ? "bg-zinc-800 text-white flex-row lg:flex-col-reverse"
                                    : "bg-gray-100 text-zinc-800 flex-row lg:flex-col"
                            )}
                        >
                            <motion.div
                                variants={imageVariants(index % 2 === 0)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="w-full h-full hidden sm:block max-h-60 md:max-h-[30rem]"
                            >
                                <Image
                                    src={item.image ?? ""}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                className="p-5 lg:p-10 min-h-44 gap-4 flex flex-col items-center justify-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                transition={{ staggerChildren: 0.4 }}
                            >
                                <motion.h3
                                    className="text-xl lg:text-xl"
                                    variants={{
                                        hidden: { opacity: 0, y: 20, scale: 0.9 },
                                        visible: { opacity: 1, y: 0, scale: 1 }
                                    }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    className="text-xs lg:text-sm sm:max-w-xs"
                                    variants={{
                                        hidden: { opacity: 0, y: 15 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                >
                                    {item.desc}
                                </motion.p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </PageLayout>
    );
};

export default Benefits;
