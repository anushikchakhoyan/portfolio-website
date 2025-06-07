import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

import GeneralTextBlock from "@/components/custom/general-text-block";
import PageLayout from "@/components/custom/page-layout";
import { EMAIL, WEBSITE } from '@/lib/constants';
import ExternalLink from '@/components/custom/external-link';

type TextProps = {
    children: React.ReactNode;
    className?: string;
    size?: 'title' | 'subTitle' | 'base'
}

const PrivacyPolicy: React.FC = () => {
    const t = useTranslations("PrivacyPolicy");

    return (
        <PageLayout id="PrivacyPolicy">
            <GeneralTextBlock
                subtitle={t("title")}
                description={t("lastUpdated")}
            />
            <div className='max-w-5xl mx-auto gap-4 py-8 whitespace-break-spaces'>
                <ul className='grid gap-2 mb-0 py-6'>
                    <li>{t("description1")}</li>
                    <li>{t("description2")}</li>
                </ul>
                <Text size='title'>{t("title2")}</Text>
                <Text size='subTitle'>{t("title3")}</Text>
                <Text>
                    {t('description3')}
                    <span className='text-primary px-2'>{(t.raw('description3Items') as string[])?.join(', ')}</span>
                </Text>
                <Text>{t('description4')}</Text>

                <Text size="title">{t('securityOfPersonalData')}</Text>
                <Text>{t('securityOfPersonalDataDesc')}</Text>

                <Text size="title">{t('linksOtherWebsites')}</Text>
                <Text>{t('linksOtherWebsitesDesc')}</Text>

                <Text size="title">{t('changestoPrivacyPolicy')}</Text>
                <Text>{t('changestoPrivacyPolicyDesc')}</Text>

                <Text size="title">{t('contactUs')}</Text>
                <Text>{t("anyQuestion")}</Text>
                <Text className="flex flex-col sm:flex-row gap-3">
                    <ExternalLink to={`mailto: ${EMAIL}`} text={t('byEmail')} />
                    <ExternalLink to={WEBSITE} text={t('byVisiting')} />
                </Text>
            </div>
        </PageLayout >
    )
}

const Text: React.FC<TextProps> = (({ size = 'base', className, children }) => {
    return (
        <p className={cn(
            "font-josefin-sans text-zinc-800 dark:text-zinc-100 py-4",
            size === 'title' && 'text-2xl font-medium',
            size === 'subTitle' && 'text-lg font-medium',
            size === 'base' && 'text-base',
            className
        )}>
            {children}
        </p>
    )
});
Text.displayName = "Text";

export default PrivacyPolicy;

