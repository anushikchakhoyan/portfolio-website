import { useTranslations } from "next-intl";

import businessImage from "@/images/types/business.png";
import landingPageImage from "@/images/types/landing-page.webp";
import corporateImage from "@/images/types/corporate.jpg";
import ecommerceImage from "@/images/types/ecommerce.jpg";
import newsImage from "@/images/types/news.webp";
import adminImage from "@/images/types/admin.webp";
import wordpressImage from "@/images/types/wordpress.webp";
import govImage from "@/images/types/gov.jpg";
import customImage from "@/images/types/custom.png";

type Website = {
    key: string;
    descKey: string;
    img?: any;
}

export default function useWebsiteTypeaData() {
    const t = useTranslations("WebsiteTypes");

    const websiteTypes: Website[] = [
        {
            key: "businessCard",
            descKey: "businessCardDesc",
            img: businessImage
        },
        {
            key: "landingPage", descKey: "landingPageDesc",
            img: landingPageImage
        },
        {
            key: "corporateWebsite",
            descKey: "corporateWebsiteDesc",
            img: corporateImage
        },
        {
            key: "wordPressWebsite",
            descKey: "wordPressWebsiteDesc",
            img: wordpressImage
        },
        {
            key: "ecommerce",
            descKey: "ecommerceDesc",
            img: ecommerceImage
        },
        {
            key: "newsPortal",
            descKey: "newsPortalDesc",
            img: newsImage
        },
        {
            key: "adminPanel",
            descKey: "adminPanelDesc",
            img: adminImage
        },
        {
            key: "govWebsite",
            descKey: "govWebsiteDesc",
            img: govImage
        },
        {
            key: "customWebsite",
            descKey: "customWebsiteDesc",
            img: customImage
        },
    ];


    return websiteTypes;
}