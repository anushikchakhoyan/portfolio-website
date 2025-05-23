import { Color } from "@/lib/types";

export default function useColorsData() {
    const colorSets: Color[] = [
        // 1. Burgundy & Cream
        {
            name: 'burgundy',
            // 355.14deg 83.57% 40.59 %
            primary: { hue: 355.14, saturation: 83.57, lightness: 40.59 },    // oklch(40% 0.15 345)
            secondary: { hue: 346.88, saturation: 32.99, lightness: 61.96 },   // oklch(93% 0.02 45)
        },
        // 2. Dark Olive & Sage
        {
            name: 'dark-olive',
            primary: { hue: 75, saturation: 40, lightness: 25 },    // oklch(30% 0.1 75)
            secondary: { hue: 85, saturation: 25, lightness: 75 },   // oklch(80% 0.06 85)
        },
        // 3. Navy Blue & Sky
        {
            name: 'navy',
            primary: { hue: 198.75, saturation: 36.36, lightness: 43.14 },    // oklch(35% 0.15 220)
            secondary: { hue: 200, saturation: 40, lightness: 80 },   // oklch(85% 0.08 200)
        },
    ];

    return colorSets;
};