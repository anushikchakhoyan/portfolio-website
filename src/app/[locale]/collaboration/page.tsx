import * as React from "react";
import { graphql } from "gatsby";
import loadable from "@loadable/component";
import { useTranslations } from "next-intl";

import { SERVICES_CATEGORY } from "@lib/constants";
import { GeneralTextBlock } from "@base/";

const ServicesSection = loadable(() => import("@features/services"));
const WhyChooseUs = loadable(() => import("@features/why-choose-us"));
const Subscribe = loadable(() => import("@features/subscribe"));
const MainLayout = loadable(() => import("@features/layout"));
const Workflow = loadable(() => import("@features/workflow"));
const Benefits = loadable(() => import("@features/benefits"));
const Seo = loadable(() => import("@features/seo"));

const CollaborationPage: React.FC = () => {
  const { t } = useTranslations();
  const type = SERVICES_CATEGORY.collaboration;

  return (
    <MainLayout>
      <GeneralTextBlock
        title={t("collaborationAndCommunication")}
        subtitle={t("workingTogether")}
        description={t("transparentAndEffectiveCollaboration")}
        descrptionClasses="px-4"
      />
      <ServicesSection type={type} />
      <Workflow type={type} />
      <WhyChooseUs />
      <Benefits type={type} />
      <Subscribe />
    </MainLayout>
  )
}

export default CollaborationPage
