import { SERVICES_CATEGORY } from "@/lib/constants";
import { PackageType } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function usePackagesData() {
    const t = useTranslations("Packages");
    const tMentorship = useTranslations("Header");

    const packages: PackageType[] = [
        {
            title: tMentorship('mentorship'),
            desc: t('packagesDesc2'),
            service: SERVICES_CATEGORY.mentorship,
            plan: [
                {
                    title: t("classic"),
                    features: t.raw('classicItems') as string[],
                    popular: false,
                },
                {
                    title: t("pro"),
                    features: t.raw('proItems') as string[],
                    popular: true,
                },
                {
                    title: t("enterprise"),
                    features: t.raw('enterpriseItems') as string[],
                    popular: false,
                }
            ],
        },
    ];

    return packages;
};
