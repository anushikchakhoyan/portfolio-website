import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { ColorShades, Hsl } from "./types";
import { useTranslations } from "next-intl";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFormattedIndex(index: number): string {
  return index.toString().padStart(2, '0');
}

export const generateSteps = (stepKeys: string[]) => {
  const t = useTranslations();
  return stepKeys.map((key, index) => ({
    id: index + 1,
    // title: t(key),
    // description: t(`${key}Desc`),
  }));
};


export const generateHSLShades = ({ hue, saturation, lightness }: Hsl): ColorShades => {
  return {
    50: `${hue} ${saturation}% ${lightness + 40}%`, // Lightest
    100: `${hue} ${saturation}% ${lightness + 30}%`,
    200: `${hue} ${saturation}% ${lightness + 20}%`,
    300: `${hue} ${saturation}% ${lightness + 10}%`,
    400: `${hue} ${saturation}% ${lightness}%`, // Base color
    500: `${hue} ${saturation}% ${lightness - 10}%`,
    600: `${hue} ${saturation}% ${lightness - 20}%`,
    700: `${hue} ${saturation}% ${lightness - 30}%`,
    800: `${hue} ${saturation}% ${lightness - 40}%`,
    900: `${hue} ${saturation}% ${lightness - 50}%`, // Darkest
  };
};