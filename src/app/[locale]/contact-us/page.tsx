import { useTranslations } from "next-intl";
import Link from "next/link";

import UnderlineText from "@/components/custom/underline-text";
import PageLayout from "@/components/custom/page-layout";
import { EMAIL } from "@/lib/constants";

import SocialMedia from "../../../components/custom/social-media";
import ContactForm from "./form";

const ContactUs: React.FC = () => {
  const t = useTranslations("Header");

  // const data = useStaticQuery(graphql`
  //   query {
  //     coverImage: file(relativePath: { eq: "contact-cover.jpg" }) {
  //       childImageSharp {
  //         gatsbyImageData(
  //           layout: FULL_WIDTH
  //           placeholder: BLURRED
  //           formats: [AUTO, WEBP, AVIF, JPG]
  //           aspectRatio: 1.77
  //           width: 1200
  //         )
  //       }
  //     }
  //   }
  // `);

  // const coverImage = getImage(data.coverImage) as IGatsbyImageData;

  return (
    <PageLayout id="contact">
      <div className="relative h-96 w-full flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/45 z-10 flex items-end justify-center">
          <h2 className="text-4xl text-white font-bold py-20 uppercase font-italiana">
            {t("getInTouch")}
          </h2>
        </div>
        {/* <GatsbyImage
          image={coverImage}
          alt={t("itsMe")}
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="py-10 w-full flex flex-col items-center justify-center gap-10 max-w-6xl mx-auto">
        <ContactTitle />
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </PageLayout>
  );
};

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

