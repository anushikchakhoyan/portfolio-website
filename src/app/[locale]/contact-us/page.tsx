import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import UnderlineText from "@/components/custom/underline-text";
import SocialMedia from "@/components/custom/social-media";
import ContactForm from "@/components/custom/contact-form";
import PageLayout from "@/components/custom/page-layout";
import coverImage from "@/images/contact-cover.jpg";
import Title from "@/components/custom/title";
import { EMAIL } from "@/lib/constants";

const ContactUs: React.FC = () => (
  <>
    <ContactHeader />
    <PageLayout id="contact" className="!py-0">
      <div className="py-10 w-full flex flex-col items-center justify-center gap-10 max-w-6xl mx-auto">
        <ContactTitle />
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </PageLayout>
  </>
);

export default ContactUs;

const ContactInfo: React.FC<{}> = (() => {
  const t = useTranslations("Contact");

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-6 lg:px-4">
      <p className="text-base font-medium">
        {t("getBackToYouSoon")}
      </p>
      <div>
        <p className="text-base uppercase text-gray-900 dark:text-white font-medium">{t("email")}</p>
        <p className="text-base font-medium text-gray-600 dark:text-gray-300">
          {EMAIL}
        </p>
      </div>
      {/* <div>
        <p className="text-base uppercase text-gray-900 dark:text-white font-medium">{t("phone")}</p>
        <p className="text-base font-medium text-gray-600 dark:text-gray-300">{PHONE}</p>
      </div> */}
      <div>
        <p className="text-base uppercase text-gray-900 dark:text-white font-medium">
          {t("social")}
        </p>
        <SocialMedia iconSize="text-lg" className="gap-4" />
      </div>
    </div>
  )
});
ContactInfo.displayName = "ContactInfo";

const ContactTitle: React.FC<{}> = (() => {
  const t = useTranslations("Contact");

  return (
    <>
      <h3 className="text-xl lg:text-3xl font-italiana max-w-4xl text-center">
        {t("contactDescription")}
      </h3>
      <h5 className="max-w-sm text-sm font-medium text-center space-x-1">
        <span>{t("haveQuestions")}</span>
        <Link href="/faq">
          <UnderlineText
            text={`${t("here")}!`}
            className="inline-block text-sm text-primary"
          />
        </Link>
      </h5>
    </>
  )
});
ContactTitle.displayName = "ContactTitle";


const ContactHeader: React.FC = () => {
  const t = useTranslations("Header");

  return (
    <div className="gap-4 flex flex-col-reverse md:flex-row relative min-h-96">
      <div className="w-full lg:w-1/2 px-0 md:px-5 flex items-center justify-center">
        <Title title={t("getInTouch")} className="md:text-5xl text-primary uppercase" />
      </div>
      <div className="bg-primary/80 w-3/4 lg:w-1/2 h-96 rounded-t-full absolute -z-10 -top-[150px] -right-[20px] transform rotate-180" />
      <div className="w-full lg:w-1/2 px-0 md:px-5 hidden lg:block">
        <div className="w-full lg:w-3/4 xl:w-2/3 h-full rounded-t-full overflow-hidden">
          <Image
            src={coverImage}
            alt={t("getInTouch")}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
};
ContactHeader.displayName = "ContactHeader";