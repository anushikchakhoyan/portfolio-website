import { useTranslations } from "next-intl";

import SocialMedia from "../social-media";
import { EMAIL } from "@/lib/constants";

const ContactInfo = () => {
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
};

export default ContactInfo;
