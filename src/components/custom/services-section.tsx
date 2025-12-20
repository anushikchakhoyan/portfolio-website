'use client'
import Image from 'next/image';
import Link from "next/link";
import { motion, Variants } from 'framer-motion';
import { AiFillMessage } from "react-icons/ai";
import { Service, ServiceType } from "@/lib/types";
import useServicesData from "@/hooks/custom/use-services-data";

import AnimatedCircleEffect from './animated-circle-effect';
import UnderlineText from "./underline-text";
import { Button } from "../ui/button";
import PageLayout from "./page-layout";
import Title from "./title";

const ServicesSection: React.FC<{ type: Service }> = ({ type }) => {
  const data = useServicesData(type);

  return (
    <PageLayout id="services" className='!py-0 px-8 bg-gradient-to-r from-transparent via-secondary/5 to-transparent'>
      <ServicesContent {...data} />
    </PageLayout>
  )
};

export default ServicesSection;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.8, ease: "easeOut" },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const ServicesContent: React.FC<ServiceType> = (
  { title, hint, description, contactMe, image }
) => {
  return (
    <div className="gap-6 flex flex-col-reverse lg:flex-row relative min-h-[60vh] md:min-h-96 px-0 sm:px-6 items-center">
      <AnimatedCircleEffect />

      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants}>
          <Title
            title={title}
            className="text-2xl sm:text-3xl md:text-4xl text-primary uppercase"
          />
        </motion.div>
        <motion.div variants={childVariants}>
          <UnderlineText text={hint} className="max-w-md text-base md:text-lg" />
        </motion.div>
        <motion.p
          variants={childVariants}
          className="text-sm sm:text-base"
        >
          {description}
        </motion.p>
        <motion.div variants={childVariants}>
          <Button
            asChild
            className="
              relative overflow-hidden group
              bg-gradient-to-r from-primary to-primary/90
              text-white px-8 py-5 rounded-full
              shadow-md hover:shadow-lg
              transition-all duration-300
              hover:-translate-y-0.5
            "
          >
            <Link href="/contact-us" className="flex items-center gap-3 font-medium">
              <AiFillMessage size={18} className="transition-transform group-hover:scale-110" />
              <span>{contactMe}</span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.div
          className="w-full max-w-xs lg:max-w-sm aspect-square rounded-t-full overflow-hidden border-4 border-white dark:border-zinc-900"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={image ?? ''}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
};
ServicesContent.displayName = "ServicesContent";