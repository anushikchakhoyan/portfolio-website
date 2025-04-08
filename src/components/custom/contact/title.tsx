import Link from "next/link";
import { useTranslations } from "next-intl";

import UnderlineText from "../underline-text";

const ContactTitle = () => {
    const t = useTranslations("Contact");

    return (
        <>
            <h3 className="text-xl lg:text-3xl font-italiana max-w-xl lg:max-w-4xl text-center">
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
};

export default ContactTitle;
