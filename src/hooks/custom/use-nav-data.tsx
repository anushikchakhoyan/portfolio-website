import { NavigationType } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function useNavigationData() {
    const t = useTranslations("Header");

    const navigations: NavigationType[] = [
        {
            title: t("general"),
            intro: {
                abbr: 'frontend/dev',
                content: t('pixelPerfectInterfaces')
            },
            items: [
                {
                    title: t("about"),
                    url: "/about",
                    description: t("discoverMyJourney")
                },
                {
                    title: t("faq"),
                    url: "/faq",
                    description: t("getInsightsMyWork")
                },
            ],
        },
        // {
        //     title: t("explore"),
        //     intro: {
        //         abbr: "overview/offer",
        //         content: t("understandMyProcess"),
        //     },
        //     items: [],
        // },
        {
            title: t("services"),
            intro: {
                abbr: "process/steps",
                content: t('makeLearningInteractive'),
            },
            items: [
                {
                    title: t("websiteCreation"),
                    url: "/website-creation",
                    description: t("buildProfWebsite"),
                },
                {
                    title: t("mentorship"),
                    url: "/mentorship",
                    description: t("expertGuidance"),
                },
                {
                    title: t("collaboration"),
                    url: "/collaboration",
                    description: t("workTogether"),
                },
            ],
        },
        {
            title: t("connect"),
            intro: {
                abbr: 'guide/offer',
                content: t("websiteAndMentorship"),
            },
            items: [
                {
                    title: t("contact"),
                    url: "/contact-us",
                    description: t("getInTouchForCollaborations")
                },
                {
                    title: t("packages"),
                    url: "/packages",
                    description: t("exploreMyPricing")
                },
                // {
                //     title: t("blog"),
                //     url: "/blog",
                //     description: t("readInsightsAndArticles")
                // },
            ],
        },
    ];

    return navigations;
}
