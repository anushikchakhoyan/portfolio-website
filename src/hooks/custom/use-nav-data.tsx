import { NavigationType } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function useNavigationData() {
    const t = useTranslations("Header");

    const navigations: NavigationType[] = [
        {
            placement: "both",
            title: t("general"),
            intro: {
                abbr: 'frontend/dev',
                content: t('pixelPerfectInterfaces')
            },
            items: [
                {
                    title: t("about"),
                    url: "/about",
                    description: t("discoverMyJourney"),
                },
                {
                    title: t("blog"),
                    url: "/blog",
                    description: t("readInsightsAndArticles"),
                },
            ],
        },
        {
            placement: "both",
            title: t("services"),
            intro: {
                abbr: "process/steps",
                content: t('makeLearningInteractive'),
            },
            items: [
                {
                    title: t("websiteCreation"),
                    url: "/services/website-creation",
                    description: t("buildProfWebsite"),
                },
                {
                    title: t("mentorship"),
                    url: "/services/mentorship",
                    description: t("expertGuidance"),
                },
                {
                    title: t("collaboration"),
                    url: "/services/collaboration",
                    description: t("workTogether"),
                },
            ],
        },
        {
            placement: "footer",
            title: t("legal"),
            items: [
                {
                    title: t('privacyPolicy'),
                    url: "/privacy-policy",
                },
                {
                    title: t("faq"),
                    url: "/faq",
                    description: t("getInsightsMyWork"),
                },
                // {
                //     title: t('termsOfUse'),
                //     url: "/terms",
                // },
            ],
        },
        {
            placement: "footer",
            title: t("connect"),
            intro: {
                abbr: 'guide/offer',
                content: t("websiteAndMentorship"),
            },
            items: [
                {
                    title: t("contact"),
                    url: "/contact-us",
                    description: t("getInTouchForCollaborations"),
                },
                {
                    title: t("packages"),
                    url: "/packages",
                    description: t("exploreMyPricing"),
                },
            ],
        },
        {
            placement: "header",
            title: t("contact"),
            url: "/contact-us",
        },
        {
            placement: "header",
            title: t("packages"),
            url: "/packages",
        }
    ];

    return navigations;
}
