import { useTranslations } from "next-intl";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import GeneralTextBlock from "@/components/custom/general-text-block";
import PageLayout from "@/components/custom/page-layout";

interface FAQItem {
  title: string,
  description: React.ReactNode;
}

type FaqKeys = `faqDesc${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`;

const FaqList: React.FC = () => {
  const t = useTranslations("Faq");

  const items = Array.from({ length: 10 }, (_, index) => index + 1).map((item) => {
    return {
      title: t(`faqTitle${item}` as `faqTitle${1}`),
      description: t.rich(`faqDesc${item}` as FaqKeys, {
        strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>
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
