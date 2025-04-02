'use client'
import Image from 'next/image';
import Link from "next/link";
import { motion } from 'framer-motion';
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
    <PageLayout id="services">
      <ServicesContent {...data} />
    </PageLayout>
  )
};

export default ServicesSection;

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 1.3, ease: "easeOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServicesContent: React.FC<ServiceType> = (
  { title, hint, description, contactMe, image }
) => {
  return (
    <div
      className="gap-4 flex flex-col-reverse md:flex-row relative min-h-96">
      <motion.div
        className="w-full lg:w-1/2 px-0 md:px-5 flex items-start flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants}>
          <Title title={title} className="md:text-4xl text-primary uppercase" />
        </motion.div>

        <motion.div variants={childVariants}>
          <UnderlineText text={hint} className="max-w-md" />
        </motion.div>
        <motion.p variants={childVariants}>{description}</motion.p>
        <motion.div variants={childVariants}>
          <Button size="lg" asChild>
            <Link href="/contact-us" className="flex items-center gap-2">
              <AiFillMessage /> {contactMe}
            </Link>
          </Button>
        </motion.div>
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
            src={image ?? ''}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
};
ServicesContent.displayName = "ServicesContent";