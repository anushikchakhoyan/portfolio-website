"use client"
import Image from 'next/image';
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Service } from "@/lib/types";
import useBenefitsData from "@/hooks/custom/use-benefits-data";

import PageLayout from "../page-layout";
import Title from "../title";
import { cn } from '@/lib/utils';

const Benefits: React.FC<{ type: Service }> = ({ type }) => {
    const t = useTranslations("Benefits");
    const benefits = useBenefitsData(type);

    return (
        <PageLayout id="benefits">
            <div className="bg-gold-100 dark:bg-zinc-900 text-center py-8">
                <Title title={t('benefits')} />
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                    {benefits.map((item, index) => {
                        console.log(item.image)
                        return (
                            <motion.div
                                key={item.id}
                                whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)" }}
                                transition={{ duration: 0.3 }}
                                className={cn(`overflow-hidden flex cursor-pointer`,
                                    index % 2 === 0
                                        ? "bg-zinc-800 text-white flex-row lg:flex-col-reverse"
                                        : "bg-gray-100 text-zinc-800 flex-row lg:flex-col"
                                )}
                            >
                                <Image
                                    src={item.image ?? ''}
                                    alt={item.title}
                                    className="w-full h-full hidden sm:block max-h-60 md:max-h-[30rem]"
                                />
                                <div className="p-5 lg:p-10 min-h-44 gap-4 flex flex-col items-center justify-center">
                                    <h3 className="text-xl lg:text-xl">{item.title}</h3>
                                    <p className="text-xs lg:text-sm sm:max-w-xs">{item.desc}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </PageLayout >
    );
};

export default Benefits;
