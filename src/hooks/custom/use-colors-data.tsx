import { Color } from "@/lib/types";

export default function useColorsData() {
    const colorSets: Color[] = [
        // 1. Burgundy & Cream
        // {
        //     name: 'deep-burgundy',
        //     primary: { hue: 350, saturation: 80, lightness: 45 },
        //     secondary: { hue: 340, saturation: 50, lightness: 60 }, 
        // },
        // {
        //     name: 'pink',
        //     primary: { hue: 240.96, saturation: 100, lightness: 68.99 },
        //     secondary: { hue: 340, saturation: 50, lightness: 60 },
        // },
        // {
        //     name: 'purple',
        //     primary: { hue: 272.1, saturation: 100, lightness: 65.16 },
        //     secondary: { hue: 267.72, saturation: 100, lightness: 92.16 },
        // },
        // // 2. Dark Olive & Sage
        // {
        //     name: 'dark-olive',
        //     primary: { hue: 100, saturation: 20, lightness: 70 },    // oklch(30% 0.1 75)
        //     secondary: { hue: 85, saturation: 25, lightness: 75 },   // oklch(80% 0.06 85)
        // },
        // // 3. Navy Blue & Sky
        // {
        //     name: 'navy',
        //     primary: { hue: 198.75, saturation: 36.36, lightness: 43.14 },    // oklch(35% 0.15 220)
        //     secondary: { hue: 200, saturation: 40, lightness: 80 },   // oklch(85% 0.08 200)
        // },
        // {
        //     name: 'apricot-glow',
        //     primary: { hue: 0, saturation: 0, lightness: 0 },
        //     secondary: { hue: 30, saturation: 36, lightness: 94 },
        // },
    ];

    return colorSets;
};