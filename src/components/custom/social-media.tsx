
import clsx from "clsx";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoMedium } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TELEGRAM_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, MEDIUM_URL } from "@/lib/constants";

type SocialMediaType = {
    iconSize?: string,
    className?: string,
}

const socialLinks = [
    { url: LINKEDIN_URL, Icon: FaLinkedin, name: "LinkedIn" },
    { url: GITHUB_URL, Icon: IoLogoGithub, name: "GitHub" },
    { url: MEDIUM_URL, Icon: BiLogoMedium, name: "Medium" },
    { url: INSTAGRAM_URL, Icon: FaInstagram, name: "Instagram" },
    { url: TELEGRAM_URL, Icon: FaTelegram, name: "Telegram" },
];

const SocialMedia: React.FC<SocialMediaType> = ({ iconSize, className }) => {
    const t = useTranslations();

    return (
        <TooltipProvider>
            <div className={clsx("flex align-baseline gap-5 py-1", className)}>
                {socialLinks.map(({ url, Icon, name }) => (
                    <Tooltip key={url}>
                        <TooltipTrigger asChild>
                            <Link href={url}>
                                <Icon
                                    className={clsx("text-xl text-zinc-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400", iconSize)} />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            {name}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default SocialMedia;
