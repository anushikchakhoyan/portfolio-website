"use client";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import ExternalLink from '@/components/custom/external-link';
import { LINKEDIN_URL, MEDIUM_URL, STARTED_CAREER_AT, GITHUB_URL } from "@/lib/constants";

type ExternalLink = {
    url: string;
    text: string;
}

const externalLinks: ExternalLink[] = [
    { url: LINKEDIN_URL, text: "Linkedin" },
    { url: GITHUB_URL, text: "Github" },
    { url: MEDIUM_URL, text: "Medium" },
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
            <div className="hidden w-screen h-px md:block animate-fade-left bg-linear-to-r from-zinc-700/0
             via-zinc-700/50 to-zinc-700/0" />

            <h1 className="z-10 text-transparent duration-1000 bg-zinc-700 dark:bg-white 
                           cursor-default text-edge-outline animate-title font-display text-6xl 
                           md:text-9xl whitespace-nowrap bg-clip-text font-italiana relative">
                {t('name')}
                <sub className="text-lg sm:text-xl md:text-2xl font-medium animate-title 
                                font-josefin-sans text-primary absolute top-0 -right-10 md:-right-14">
                    {yearsExperience}
                </sub>
            </h1>

            <div className="hidden w-screen h-px md:block animate-fade-right bg-linear-to-r from-zinc-700/0
             via-zinc-700/50 to-zinc-700/0" />

            <div className="my-6 animate-fade-in duration-500 flex flex-col w-full md:flex-row items-center justify-center gap-4">
                {externalLinks.map(({ url, text }) => (
                    <ExternalLink key={url} to={url} text={text} className='max-w-52 md:max-w-36 w-full' />
                ))}
            </div>
        </div>
    );
}