'use client'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import useRatesData from "@/hooks/custom/use-rates-data";
import AnimatedCounter from "../animated-counter";
import PageLayout from "../page-layout";
import Title from "../title";

interface RatesProps {
    limit: [number, number];
}

const Rates: React.FC<RatesProps> = ({ limit }) => {
    const rates = useRatesData();
    const [start, end] = limit;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <PageLayout id="rates">
            <div ref={ref} className="flex flex-col items-center justify-center md:flex-row w-full gap-10">
                {rates.map(({ id, name, rate, description }) => (
                    <div key={id} className="text-center text-gray-900 dark:text-zinc-100">
                        <motion.div
                            key={id}
                            className="text-center text-gray-900 dark:text-zinc-100"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <AnimatedCounter
                                target={rate}
                                isInView={isInView}
                                className="text-3xl lg:text-4xl font-medium text-primary dark:text-primary-300" />
                        </motion.div>
                        <Title title={name} className="text-2xl md:text-xl lg:text-2xl" />
                        <p className="text-sm text-gray-600 dark:text-zinc-400 mt-1">{description}</p>
                    </div>
                )).slice(start, end)}
            </div>
        </PageLayout>
    )
}

export default Rates;
