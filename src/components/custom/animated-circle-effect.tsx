'use client'
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const AnimatedCircleEffect = ({ className }: { className?: string }) => (
    <motion.div
        className={cn(`bg-secondary/80 w-full h-full max-w-lg rounded-b-full shadow-xl
        absolute -z-10 -top-10 -right-4 md:-top-12 md:-right-8 lg:-top-[150px] lg:right-5`, className)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
            scale: 1,
            opacity: 1,
        }}
        transition={{
            duration: 1.5,
            ease: "easeOut",
            rotate: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }}
    />
);

export default AnimatedCircleEffect;