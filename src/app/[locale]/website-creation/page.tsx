import Link from "next/link";
import { useTranslations } from "next-intl";
import { SERVICES_CATEGORY } from "@/lib/constants";

import GeneralTextBlock from "@/components/custom/general-text-block";
import ServicesSection from "@/components/custom/services-section";
import WebsiteTypes from "@/components/custom/website-types";
import Subscribe from "@/components/custom/subscribe";
import Benefits from "@/components/custom/benefits";
import Workflow from "@/components/custom/workflow";
import { Button } from "@/components/ui/button";

const WebsiteCreationPage = () => {
  const t = useTranslations("Workflows");
  const tWebsiteTypes = useTranslations("WebsiteTypes");
  const tHeader = useTranslations("Header");
  const type = SERVICES_CATEGORY.website;

  return (
    <>
      <GeneralTextBlock
        title={t("websiteWorkflow")}
        subtitle={t("buildYourDreamWebsite")}
        description={t("fromConceptToLaunch")}
        descrptionClasses="px-4"
      />
      <ServicesSection type={type} />
      <Workflow type={type} />
      <WebsiteTypes />
      <GeneralTextBlock
        title={tWebsiteTypes("priceProposal")}
        subtitle={tWebsiteTypes("websitePrice")}
        description={tWebsiteTypes("websitePriceDescription")}
      >
        <Link href="/contact-us">
          <Button size="lg">
            {tHeader("contact")}
          </Button>
        </Link>
      </GeneralTextBlock>
      <Benefits type={type} />
      <Subscribe />
    </>
  )
}

export default WebsiteCreationPage
