import { useTranslations } from "next-intl";

import { SERVICES_CATEGORY } from "@/lib/constants";

import GeneralTextBlock from "@/components/custom/general-text-block";
import ServicesSection from "@/components/custom/services-section";
import InfoBlock from "@/components/custom/benefits/info";
import Subscribe from "@/components/custom/subscribe";
import Benefits from "@/components/custom/benefits";
import Workflow from "@/components/custom/workflow";

const MentorshipPage: React.FC = () => {
  const t = useTranslations("Workflows");
  const tMentorshipPlan = useTranslations("MentorshipPlan");
  const type = SERVICES_CATEGORY.mentorship;

  return (
    <>
      <ServicesSection type={type} />
      <GeneralTextBlock
        title={t("mentorshipWorkflow")}
        subtitle={t("guidedGrowth")}
        description={t("personalizedMentorshipJourney")}
        descrptionClassName="px-4"
        wrapperClassName="py-10"
      />
      <Workflow type={type} />
      <InfoBlock type={type} />
      <Benefits type={type} />
      <Subscribe
        text={tMentorshipPlan('callToAction')}
      />
    </>
  )
}

export default MentorshipPage
