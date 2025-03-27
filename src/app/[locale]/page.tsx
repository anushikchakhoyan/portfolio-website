"use client"
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

export default function IndexPage() {
    const duration = 2;
    const startYear = STARTED_CAREER_AT;
    const endYear = new Date().getFullYear();
    const [yearsExperience, setYearsExperience] = useState(startYear);

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
        <div id="main" className="h-[calc(100svh-theme(spacing.12))] flex flex-col z-10 items-center justify-center">
            <div className="flex flex-col gap-4 mx-auto">
                <h1 className="flex items-center justify-center mb-2 text-foreground">
                    <span className="text-5xl md:text-9xl m-0">Port
                        <span className="font-dancing-script text-primary">f</span>olio.
                    </span>
                    <sup className="text-xl md:text-2xl font-bold inline-block text-primary">{yearsExperience}</sup>
                </h1>
                <div className="flex flex-row-wrap gap-4 m-0 px-3">
                    {externalLinks.map(({ url, text }) => (
                        <ExternalLink key={url} to={url} text={text} />
                    ))}
                </div>
            </div>
        </div>
    );
}