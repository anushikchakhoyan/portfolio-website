import { useTranslations } from "next-intl";

import GeneralTextBlock from "./general-text-block";
import PageLayout from "./page-layout";

const WhyChooseUs: React.FC = () => {
    const t = useTranslations("WhyChoose");

    return (
        <PageLayout id="whyChooseUs">
            <GeneralTextBlock
                title={t("ourProcess")}
                subtitle={t("whyChooseUs")}
                description={t("whyChooseUsDesc")}
            />
        </PageLayout>
    )
}

export default WhyChooseUs;
