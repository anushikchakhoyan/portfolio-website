'use client'
import { motion } from "framer-motion";

const AnimatedCircleEffect = () => (
    <motion.div
        className="bg-primary/80 w-3/4 lg:w-1/2 h-96 rounded-t-full absolute -z-10 -top-[150px] -right-[20px] transform rotate-180"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
    />
);

export default AnimatedCircleEffect;
