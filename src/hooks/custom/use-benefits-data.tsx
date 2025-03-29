import { useTranslations } from "next-intl";

import { Benefit, Service } from "@/lib/types";
import { SERVICES_CATEGORY } from "@/lib/constants";

import benefit1 from "@/images/benefit/benefit1.jpg";
import benefit2 from "@/images/benefit/benefit2.jpg";
import benefit3 from "@/images/benefit/benefit3.jpg";
import benefit4 from "@/images/benefit/benefit4.jpg";
import benefit5 from "@/images/benefit/benefit5.jpg";
import benefit6 from "@/images/benefit/benefit6.jpg";

export default function useBenefitsData(type: Service) {
  const t = useTranslations("Benefits");


  const benefits: Record<Service, Benefit[]> = {
    [SERVICES_CATEGORY.website]: [
      {
        id: 1,
        title: t('onTimeDelivery'),
        desc: t('onTimeDeliveryDesc'),
        image: benefit1,
      },
      {
        id: 2,
        title: t('multifunctionalSolutions'),
        desc: t('multifunctionalSolutionsDesc'),
        image: benefit2,
      }
    ],
    [SERVICES_CATEGORY.mentorship]: [
      {
        id: 1,
        title: t('personalizedGuidance'),
        desc: t('personalizedGuidanceDesc'),
        image: benefit3,
      },
      {
        id: 2,
        title: t('availability'),
        desc: t('availabilityDesc'),
        image: benefit4,
      }
    ],
    [SERVICES_CATEGORY.collaboration]: [
      {
        id: 1,
        title: t('freelanceProjects'),
        desc: t('freelanceProjectsDesc'),
        image: benefit5,
      },
      {
        id: 2,
        title: t('openAnyIdea'),
        desc: t('openAnyIdeaDesc'),
        image: benefit6,
      }
    ]
  }

  return benefits[type];
};
