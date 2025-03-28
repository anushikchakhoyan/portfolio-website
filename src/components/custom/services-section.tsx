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
    <PageLayout
      className="gap-4 flex flex-col-reverse md:flex-row h-3/5"
    >
      <div className="w-full md:w-1/2 px-4 md:px-5 flex items-start flex-col gap-8">
        <Title title={title} className="md:text-4xl" />
        <UnderlineText text={hint} className="max-w-md" />
        <p>{description}</p>
        <Button asChild>
          <Link href="/contact-us" className="flex items-center gap-2">
            <AiFillMessage /> {contactMe}
          </Link>
        </Button>
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-5">
        {/* {image && (
          <GatsbyImage
            image={image}
            alt={title}
            className="w-full h-full rounded-lg shadow-lg"
          />
        )} */}
      </div>
    </PageLayout>
  )
};
ServicesContent.displayName = "ServicesContent";