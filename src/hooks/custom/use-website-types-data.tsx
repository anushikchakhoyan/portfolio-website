import { useTranslations } from "next-intl";

type Website = {
    key: string;
    descKey: string;
    img?: any;
}

export default function useWebsiteTypeaData() {
    const t = useTranslations("WebsiteTypes");

    // const data = useStaticQuery(graphql`
    //     query {
    //         business: file(relativePath: { eq: "types/business.png" }) {
    //             childImageSharp {
    //                 gatsbyImageData(layout: FULL_WIDTH)
    //             }
    //         }
    //         landingPage: file(relativePath: { eq: "types/landing-page.webp" }) {
    //             childImageSharp {
    //                 gatsbyImageData(layout: FULL_WIDTH)
    //             }
    //         }
    //         corporate: file(relativePath: { eq: "types/corporate.jpg" }) {
    //             childImageSharp {
    //                 gatsbyImageData(layout: FULL_WIDTH)
    //             }
    //         }
    //         ecommerce: file(relativePath: { eq: "types/ecommerce.jpg" }) {
    //             childImageSharp {
    //                 gatsbyImageData(layout: FULL_WIDTH)
    //             }
    //         }
    //         news: file(relativePath: { eq: "types/news.webp" }) {
    //             childImageSharp {
    //                 gatsbyImageData(layout: FULL_WIDTH)
    //             }
    //         }
    //         admin: file(relativePath: { eq: "types/admin.webp" }) {
    //             childImageSharp {
    //                 gatsbyImageData(layout: FULL_WIDTH)
    //             }
    //         }
    //         wordpress: file(relativePath: { eq: "types/wordpress.webp" }) {
    //             childImageSharp {
    //                 gatsbyImageData(layout: FULL_WIDTH)
    //             }
    //         }
    //         gov: file(relativePath: { eq: "types/gov.jpg" }) {
    //             childImageSharp {
    //                 gatsbyImageData(layout: FULL_WIDTH)
    //             }
    //         }
    //         custom: file(relativePath: { eq: "types/custom.png" }) {
    //             childImageSharp {
    //                 gatsbyImageData(layout: FULL_WIDTH)
    //             }
    //         }
    //     }
    // `);

    const websiteTypes: Website[] = [
        {
            key: "businessCard",
            descKey: "businessCardDesc",
            // img: getImage(data.business)
        },
        {
            key: "landingPage", descKey: "landingPageDesc",
            // img: getImage(data.landingPage)
        },
        {
            key: "corporateWebsite",
            descKey: "corporateWebsiteDesc",
            // img: getImage(data.corporate)
        },
        {
            key: "wordPressWebsite",
            descKey: "wordPressWebsiteDesc",
            // img: getImage(data.wordpress)
        },
        {
            key: "ecommerce",
            descKey: "ecommerceDesc",
            // img: getImage(data.ecommerce)
        },
        {
            key: "newsPortal",
            descKey: "newsPortalDesc",
            // img: getImage(data.news)
        },
        {
            key: "adminPanel",
            descKey: "adminPanelDesc",
            // img: getImage(data.admin)
        },
        {
            key: "govWebsite",
            descKey: "govWebsiteDesc",
            // img: getImage(data.gov)
        },
        {
            key: "customWebsite",
            descKey: "customWebsiteDesc",
            // img: getImage(data.custom)
        },
    ];


    return websiteTypes;
}