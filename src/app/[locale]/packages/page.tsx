'use client'
import { cn } from "@/lib/utils"
import { useState } from "react";
import { FormikValues } from "formik";
import { GoDotFill } from "react-icons/go";
import { useLocale, useTranslations } from "next-intl";

import GeneralTextBlock from "@/components/custom/general-text-block";
import usePackagesData from "@/hooks/custom/use-packages-data";
import { PlanType, SelectedPlanType } from "@/lib/types";
import PageLayout from "@/components/custom/page-layout";
import Title from "@/components/custom/title";
import { LANGUAGE } from "@/lib/constants";
import SelectedPlan from "./selected-plan";

const PackagesPage: React.FC = () => {
  const packages = usePackagesData();
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlanType | null>(null);

  const handleChoosePlan = async ({ title, service }: SelectedPlanType) => {
    setSelectedPlan({ title, service });
  };

  const handleSubmit = async (values: FormikValues) => {
    window.location.href =
      `/contact-us?plan=${encodeURIComponent(selectedPlan!.title)}&email=${encodeURIComponent(values.email)}&service=${selectedPlan!.service}`;
  };

  return (
    <PageLayout id="packages" className="!pt-0">
      <PackagesHeader />
      <div className="max-w-7xl mx-auto px-4 py-20">
        {packages.map(({ plan, title, desc, service }) => (
          <div key={title}>
            <Title title={title} className="text-3xl text-start" />
            <p className="whitespace-break-spaces">{desc}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10 justify-items-center">
              {plan.map(({ title, features, popular }: PlanType) => (
                <div
                  key={title}
                  className={cn(
                    `min-h-96 max-w-96 lg:max-w-full w-full relative overflow-hidden cursor-pointer
                     rounded-lg shadow-xs py-8 px-4 xl:px-6 border-2 border-primary/30 
                     flex flex-col justify-between items-center bg-white dark:bg-zinc-800
                     hover:scale-105 hover:shadow-lg hover:border-primary/60 hover:animate-shimmer
                    `,
                    popular && 'scale-105 border-primary/60 shadow-lg',
                  )}
                >
                  {popular && (
                    <PackagePopularLabel />
                  )}
                  <PackageContent title={title} features={features} />
                  <SelectedPlan
                    title={title}
                    service={service}
                    popular={popular}
                    onSubmit={handleSubmit}
                    onChoosePlan={handleChoosePlan}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default PackagesPage;


const PackagesHeader: React.FC = () => {
  const t = useTranslations("Packages");

  return (
    <div className="gap-4 flex flex-col-reverse md:flex-row relative min-h-96">
      <GeneralTextBlock
        title={t("ourPackages")}
        subtitle={t("chooseTheRightPlanForYou")}
        description={t("packagesDesc")}
      />
      <div className="bg-primary/80 w-3/4 lg:w-1/2 h-96 rounded-t-full absolute -z-10 -top-[150px] -right-[20px] transform rotate-180" />
      <div className="w-full lg:w-1/2 px-0 md:px-5 hidden lg:block">
        <div className="w-full lg:w-3/4 xl:w-2/3 h-full rounded-t-full overflow-hidden">
          {/* <Image
            src={coverImage}
            alt={t("getInTouch")}
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>
    </div>
  )
};
PackagesHeader.displayName = "PackagesHeader";

const PackagePopularLabel: React.FC = () => {
  const t = useTranslations("Packages");
  return (
    <div className="absolute top-[35px] -right-[80px] transform rotate-45 bg-yellow-500 px-20 py-2 z-10">
      <span className="text-white text-xs xl:text-sm font-medium whitespace-nowrap">{t("mostPopular")}</span>
    </div>
  )
}
PackagePopularLabel.displayName = "PackagePopularLabel";

const PackageContent = ({ title, features }: PlanType) => {
  const language = useLocale();

  return (
    <div className="py-5">
      <Title title={title} className="text-xl md:text-3xl leading-relaxed tracking-wider" />

      <ul className="py-5">
        {features?.map((feature) => (
          <li key={feature} className="flex items-center py-1">
            <GoDotFill className="w-2 h-2 text-zinc-800 mr-2" />
            <span className={cn(`text-gray-600 dark:text-gray-300`,
              language === LANGUAGE.en ? "text-base" : "text-sm"
            )}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
PackageContent.displayName = "PackageContent";
