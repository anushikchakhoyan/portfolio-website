import { Color } from "@/lib/types";

export default function useColorsData() {
    const colorSets: Color[] = [
        // 1. Burgundy & Cream
        {
            name: 'deep-burgundy',
            primary: { hue: 350, saturation: 80, lightness: 45 },    // Deep Burgundy (#A61C3C), contrast 5.8:1 on white
            secondary: { hue: 340, saturation: 50, lightness: 60 },   // Soft Coral (#F28B82), contrast 4.6:1 on white
            // accent: { hue: 340, saturation: 50, lightness: 60 },     // Muted Rose (#D46A8C), contrast 3.4:1 on white (for large text/UI)
            // neutralLight: { hue: 0, saturation: 0, lightness: 100 }, // White (#FFFFFF), for light mode background
            // neutralDark: { hue: 0, saturation: 0, lightness: 15 }    // Deep Gray (#262626), for dark mode background
        },
        // 2. Dark Olive & Sage
        {
            name: 'dark-olive',
            primary: { hue: 100, saturation: 20, lightness: 70 },    // oklch(30% 0.1 75)
            secondary: { hue: 85, saturation: 25, lightness: 75 },   // oklch(80% 0.06 85)
        },
        // 3. Navy Blue & Sky
        {
            name: 'navy',
            primary: { hue: 198.75, saturation: 36.36, lightness: 43.14 },    // oklch(35% 0.15 220)
            secondary: { hue: 200, saturation: 40, lightness: 80 },   // oklch(85% 0.08 200)
        },
        {
            name: 'apricot-glow',
            primary: { hue: 25, saturation: 70, lightness: 75 },
            secondary: { hue: 30, saturation: 36, lightness: 94 },
        },
    ];

    return colorSets;
};