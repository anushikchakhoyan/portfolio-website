"use client";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { GITHUB_URL, LINKEDIN_URL, MEDIUM_URL, STARTED_CAREER_AT } from "@/lib/constants";
import ExternalLink from '@/components/custom/external-link';

type ExternalLink = {
    url: string;
    text: string;
}

const externalLinks: ExternalLink[] = [
    { url: LINKEDIN_URL, text: "Linkedin" },
    { url: MEDIUM_URL, text: "Medium" },
    { url: GITHUB_URL, text: "GitHub" }
]

export default function HomePage() {
    const duration = 2;
    const startYear = STARTED_CAREER_AT;
    const endYear = new Date().getFullYear();
    const [yearsExperience, setYearsExperience] = useState(startYear);
    const t = useTranslations("Header");

    useEffect(() => {
        const yearRange = endYear - startYear
        const steps = yearRange + 1
        const stepDuration = (duration * 2500) / steps

        let currentYear = startYear

        const interval = setInterval(() => {
            if (currentYear <= endYear) {
                setYearsExperience(currentYear)
                currentYear++
            } else {
                clearInterval(interval)
            }
        }, stepDuration)

        return () => clearInterval(interval)
    }, [startYear, endYear, duration]);

    return (
        <div className="flex flex-col items-center justify-center overflow-hidden h-[calc(100vh-120px)]">
            <div className="hidden w-screen h-px md:block animate-fade-left bg-gradient-to-r from-zinc-700/0
             via-zinc-700/50 to-zinc-700/0" />

            <h1 className="z-10 text-transparent duration-1000 bg-zinc-700 dark:bg-white 
                           cursor-default text-edge-outline animate-title font-display text-6xl 
                           md:text-9xl whitespace-nowrap bg-clip-text font-italiana flex items-start max-w-2xl">
                {t('portfolio')}
                <sub className="text-xl md:text-2xl font-medium animate-title font-josefin-sans text-primary">
                    {yearsExperience}
                </sub>
            </h1>
            <div className="hidden w-screen h-px md:block animate-fade-right bg-gradient-to-r from-zinc-700/0
             via-zinc-700/50 to-zinc-700/0" />

            <div className="my-6 animate-fade-in duration-500 flex flex-row-wrap justify-center md:justify-start gap-4 max-w-md w-full">
                {externalLinks.map(({ url, text }) => (
                    <ExternalLink key={url} to={url} text={text} />
                ))}
            </div>
        </div>
    );
}