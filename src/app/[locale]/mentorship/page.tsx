import * as React from "react";
import { graphql } from "gatsby";
import loadable from "@loadable/component";
import { useTranslations } from "next-intl";

import { SERVICES_CATEGORY } from "@lib/constants";
import { GeneralTextBlock } from "@base/";

const ServicesSection = loadable(() => import("@features/services"));
const InfoBlock = loadable(() => import("@features/benefits/info"));
const Subscribe = loadable(() => import("@features/subscribe"));
const MainLayout = loadable(() => import("@features/layout"));
const Workflow = loadable(() => import("@features/workflow"));
const Benefits = loadable(() => import("@features/benefits"));
const Seo = loadable(() => import("@features/seo"));

const MentorshipPage: React.FC = () => {
  const { t } = useTranslations();
  const type = SERVICES_CATEGORY.mentorship;

  return (
    <MainLayout>
      <GeneralTextBlock
        title={t("mentorshipWorkflow")}
        subtitle={t("guidedGrowth")}
        description={t("personalizedMentorshipJourney")}
        descrptionClasses="px-4"
      />
      <ServicesSection type={type} />
      <Workflow type={type} />
      <InfoBlock type={type} />
      <Benefits type={type} />
      <Subscribe text={t('callToAction')} />
    </MainLayout>
  )
}

export default MentorshipPage
