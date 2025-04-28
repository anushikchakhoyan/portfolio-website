import { Color } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function useColorsData() {
    const t = useTranslations("Colors");

    const colorSets: Color[] = [
        {
            name: 'pink',
            desc: t("pink"),
            primary: { hue: 357.5, saturation: 10.71, lightness: 56.08 },
            secondary: { hue: 0, saturation: 2.13, lightness: 90.78 },
        },
        // {
        //     name: 'midnight',
        //     desc: t("midnight"),
        //     primary: { hue: 220, saturation: 40, lightness: 30 },
        //     secondary: { hue: 220, saturation: 25, lightness: 60 },
        // },

        // {
        //     name: 'forest',
        //     desc: t("forest"),
        //     primary: { hue: 150, saturation: 40, lightness: 35 },
        //     secondary: { hue: 150, saturation: 30, lightness: 65 },
        // },
        {
            name: 'Olive Drab',
            desc: t("oliveDrab"),
            primary: { hue: 50.77, saturation: 8.18, lightness: 31.18 },
            secondary: { hue: 40, saturation: 10.71, lightness: 67.06 },
        },
        // {
        //     name: 'red',
        //     desc: t("red"),
        //     primary: { hue: 0, saturation: 60, lightness: 50 },
        //     secondary: { hue: 0, saturation: 40, lightness: 75 },
        // },
        {
            name: 'ocean',
            desc: t("ocean"),
            primary: { hue: 200, saturation: 50, lightness: 40 },
            secondary: { hue: 200, saturation: 30, lightness: 70 },
        },
        // {
        //     name: 'golden',
        //     desc: t("golden"),
        //     primary: { hue: 45, saturation: 70, lightness: 55 },
        //     secondary: { hue: 45, saturation: 50, lightness: 80 },
        // },
        {
            name: 'slate',
            desc: t("slate"),
            primary: { hue: 337.13, saturation: 100, lightness: 31.37 },
            secondary: { hue: 210, saturation: 15, lightness: 65 },
        },
        {
            name: 'birch',
            desc: t("birch"),
            primary: { hue: 24, saturation: 14.71, lightness: 40 },
            secondary: { hue: 34.62, saturation: 11.5, lightness: 44.31 },
        }
        // {
        //     name: 'gray',
        //     desc: t("gray"),
        //     primary: { hue: 0, saturation: 0.56, lightness: 22.11 },
        //     secondary: { hue: 210, saturation: 15, lightness: 65 },
        // }
    ];

    return colorSets;
};
