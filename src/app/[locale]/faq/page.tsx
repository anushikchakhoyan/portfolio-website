import React from "react";
import { useTranslations } from "next-intl";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import GeneralTextBlock from "@/components/custom/general-text-block";
import PageLayout from "@/components/custom/page-layout";

interface FAQItem {
  title: string | any,
  description: string | React.ReactNode,
}

const FaqList: React.FC = () => {
  const t = useTranslations("Faq");

  const items: FAQItem[] = Array.from({ length: 10 }, (_, index) => index + 1).map((data) => {
    return {
      title: t(`faqTitle${data}` as any),
      description: t.rich(`faqDesc${data}`, {
        strong: (chunks) => <b>{chunks}</b>
      })
    };
  });

  return (
    <PageLayout id="faq">
      <GeneralTextBlock
        title={t("frequentlyAskedQuestions")}
        subtitle={t("faqSubtitle")}
        description={t("faqDesc")}
      />
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto px-4 py-8 md:px-5 ">
        {items.map(({ title, description }: FAQItem) => (
          <Accordion key={title} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p dangerouslySetInnerHTML={{ __html: title }} />
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line">
                {description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </PageLayout>
  )
}

export default FaqList;
