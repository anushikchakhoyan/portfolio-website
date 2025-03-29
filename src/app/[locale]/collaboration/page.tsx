
import { useTranslations } from "next-intl";

import { SERVICES_CATEGORY } from "@/lib/constants";

import GeneralTextBlock from "@/components/custom/general-text-block";
import ServicesSection from "@/components/custom/services-section";
import WhyChooseUs from "@/components/custom/why-choose-us";
import Subscribe from "@/components/custom/subscribe";
import Benefits from "@/components/custom/benefits";
import Workflow from "@/components/custom/workflow";

const CollaborationPage: React.FC = () => {
  const t = useTranslations("Workflows");
  const type = SERVICES_CATEGORY.collaboration;

  return (
    <>
      <ServicesSection type={type} />
      <GeneralTextBlock
        title={t("collaborationAndCommunication")}
        subtitle={t("workingTogether")}
        description={t("transparentAndEffectiveCollaboration")}
        descrptionClassName="px-4"
      />
      <Workflow type={type} />
      <WhyChooseUs />
      <Benefits type={type} />
      <Subscribe />
    </>
  )
}

export default CollaborationPage
