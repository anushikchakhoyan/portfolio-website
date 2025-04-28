import { Color } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function useColorsData() {
    const t = useTranslations("Colors");

    const colorSets: Color[] = [
        // 1. Burgundy & Cream
        {
            name: 'burgundy',
            // desc: t("burgundy"),
            primary: { hue: 345, saturation: 60, lightness: 35 },    // Dark burgundy
            secondary: { hue: 45, saturation: 20, lightness: 90 },   // Off-white cream
        },
        // 2. Dark Olive & Sage
        {
            name: 'dark-olive',
            // desc: t("darkOlive"),
            primary: { hue: 75, saturation: 40, lightness: 25 },    // Deep olive
            secondary: { hue: 85, saturation: 25, lightness: 75 },   // Soft sage
        },
        // 3. Navy Blue & Sky
        {
            name: 'navy',
            // desc: t("navy"),
            primary: { hue: 220, saturation: 60, lightness: 30 },    // Rich navy
            secondary: { hue: 200, saturation: 40, lightness: 80 },   // Pale sky
        },
    ];


    return colorSets;
};
