import { SERVICES_CATEGORY } from "@/lib/constants";
import { Service, ServiceType } from "@/lib/types";
import { useTranslations } from "next-intl";

import websiteImage from "@/images/services/website.jpg";
import mentorImage from "@/images/services/mentor.jpg";
import collabImage from "@/images/services/collab.jpg";

export default function useServicesData(type: Service) {
  const t = useTranslations("WhatWeOffer");

  const servicesData: Record<Service, ServiceType> = {
    [SERVICES_CATEGORY.website]: {
      id: 1,
      title: t("websiteCreationTitle"),
      hint: t("websiteCreationHint"),
      description: t("websiteCreationDescription"),
      contactMe: t("websiteCreationContact"),
      image: websiteImage,
    },
    [SERVICES_CATEGORY.mentorship]: {
      id: 2,
      title: t("mentorshipTitle"),
      hint: t("mentorshipHint"),
      description: t("mentorshipDescription"),
      contactMe: t("mentorshipContact"),
      image: mentorImage,
    },
    [SERVICES_CATEGORY.collaboration]: {
      id: 3,
      title: t("collabTitle"),
      hint: t("collabHint"),
      description: t("collabDescription"),
      contactMe: t("collabContact"),
      image: collabImage
    },
  }

  return servicesData[type];
};
