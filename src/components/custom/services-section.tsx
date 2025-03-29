import Image from 'next/image';
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import { Service, ServiceType } from "@/lib/types";
import useServicesData from "@/hooks/custom/use-services-data";

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

const ServicesContent: React.FC<ServiceType> = (
  { id, title, hint, description, contactMe, image }
) => {
  return (
    <div
      className="gap-4 flex flex-col-reverse md:flex-row relative min-h-96">
      <div className="w-full lg:w-1/2 px-0 md:px-5 flex items-start flex-col gap-8">
        <Title title={title} className="md:text-4xl text-primary uppercase" />
        <UnderlineText text={hint} className="max-w-md" />
        <p>{description}</p>
        <Button size="lg" asChild>
          <Link href="/contact-us" className="flex items-center gap-2">
            <AiFillMessage /> {contactMe}
          </Link>
        </Button>
      </div>
      <div className="bg-primary/80 w-3/4 lg:w-1/2 h-96 rounded-t-full absolute -z-10 -top-[150px] -right-[20px] transform rotate-180" />
      <div className="w-full lg:w-1/2 px-0 md:px-5 hidden lg:block">
        <div className="w-full lg:w-3/4 xl:w-2/3 h-full rounded-t-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
};
ServicesContent.displayName = "ServicesContent";