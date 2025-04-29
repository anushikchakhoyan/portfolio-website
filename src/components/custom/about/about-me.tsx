import { useTranslations } from "next-intl";

import PageLayout from "../page-layout";
import Title from "../title";

const AboutMe: React.FC = () => {
    const t = useTranslations("About");

    return (
        <PageLayout>
            <div className="flex items-center flex-col gap-8">
                <Title
                    title={t("itsMe")}
                    className="font-bold text-start font-italiana text-primary"
                />

                <div className="relative text-sm md:text-base whitespace-break-spaces grid gap-8 w-full max-w-xl mx-auto">
                    <p className="text-justify">{t('aboutDescription1')}</p>
                    <p className="text-justify">{t('aboutDescription2')}</p>
                    <p className="text-justify">{t('myFocusDescription')}</p>
                    <p className="text-justify">
                        {t.rich('visionDescription', {
                            span: (chunks) => <span className="font-bold">{chunks}</span>
                        })}
                    </p>
                </div>
            </div>
        </PageLayout>
    )
}

export default AboutMe;
