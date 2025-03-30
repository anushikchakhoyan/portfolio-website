import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";

import landingPageImage from "@/images/types/landing-page.webp";
import wordpressImage from "@/images/types/wordpress.webp";
import corporateImage from "@/images/types/corporate.jpg";
import ecommerceImage from "@/images/types/ecommerce.jpg";
import businessImage from "@/images/types/business.png";
import customImage from "@/images/types/custom.png";
import adminImage from "@/images/types/admin.webp";
import newsImage from "@/images/types/news.webp";
import govImage from "@/images/types/gov.jpg";

type Website = {
    key: string;
    descKey: string;
    img?: StaticImageData | string;
}

export default function useWebsiteTypeaData() {
    const t = useTranslations("WebsiteTypes");

    const websiteTypes: Website[] = [
        {
            key: t("businessCard"),
            descKey: t("businessCardDesc"),
            img: businessImage
        },
        {
            key: t("landingPage"),
            descKey: t("landingPageDesc"),
            img: landingPageImage
        },
        {
            key: t("corporateWebsite"),
            descKey: t("corporateWebsiteDesc"),
            img: corporateImage
        },
        {
            key: t("wordPressWebsite"),
            descKey: t("wordPressWebsiteDesc"),
            img: wordpressImage
        },
        {
            key: t("ecommerce"),
            descKey: t("ecommerceDesc"),
            img: ecommerceImage
        },
        {
            key: t("newsPortal"),
            descKey: t("newsPortalDesc"),
            img: newsImage
        },
        {
            key: t("adminPanel"),
            descKey: t("adminPanelDesc"),
            img: adminImage
        },
        {
            key: t("govWebsite"),
            descKey: t("govWebsiteDesc"),
            img: govImage
        },
        {
            key: t("customWebsite"),
            descKey: t("customWebsiteDesc"),
            img: customImage
        },
    ];


    return websiteTypes;
}