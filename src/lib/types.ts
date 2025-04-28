import { StaticImageData } from "next/image";
import { LANGUAGE, SERVICES_CATEGORY, THEME_MODE } from "./constants";

export type Theme = keyof typeof THEME_MODE; // "light" | "dark"
export type Service = (typeof SERVICES_CATEGORY)[keyof typeof SERVICES_CATEGORY];
export type Language = keyof typeof LANGUAGE;

export type Step = {
    id: number,
    title: string,
    description: string,
}

export type IntroType = {
    content: string;
    abbr: string;
};

export type NavigationType = {
    title: string,
    intro?: IntroType,
    items: {
        title: string;
        url: string;
        description: string;
    }[]
}

export type ServiceType = {
    id: number;
    title: string;
    hint: string;
    description: string;
    contactMe: string;
    image?: StaticImageData | string;
}

export type Benefit = {
    id: number;
    title: string;
    desc: string;
    image?: StaticImageData | string;
}

export type ColorShades = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};

export type Hsl = {
    hue: number;
    saturation: number;
    lightness: number;
}

export const DEFAULT_COLOR: Hsl = {
    hue: 345,
    saturation: 60,
    lightness: 35,
};

export const DEFAULT_SECONDARY_COLOR: Hsl = {
    hue: 45,
    saturation: 20,
    lightness: 90,
};

export type Color = {
    name: string;
    desc?: string;
    primary: Hsl;
    secondary: Hsl;
}

export type Info = {
    title?: string;
    description?: string;
    items?: string[];
}

export type PlanType = {
    title: string;
    features?: string[] | undefined;
    popular?: boolean;
}

export type SelectedPlanType = {
    title: string,
    service: Service
}

export type PackageType = {
    title: string;
    desc: string;
    plan: PlanType[]
    service: Service;
}
