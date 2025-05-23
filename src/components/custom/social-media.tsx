
import { cn } from "@/lib/utils"
import Link from "next/link";
import { BiLogoMedium } from "react-icons/bi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { INSTAGRAM_URL, LINKEDIN_URL, MEDIUM_URL } from "@/lib/constants";

type SocialMediaType = {
    iconSize?: string,
    className?: string,
}

const socialLinks = [
    { url: LINKEDIN_URL, Icon: FaLinkedin, name: "LinkedIn" },
    { url: MEDIUM_URL, Icon: BiLogoMedium, name: "Medium" },
    { url: INSTAGRAM_URL, Icon: FaInstagram, name: "Instagram" },
];

const SocialMedia: React.FC<SocialMediaType> = ({ iconSize, className }) => {
    return (
        <TooltipProvider>
            <div className={cn("flex align-baseline gap-5 py-1", className)}>
                {socialLinks.map(({ url, Icon, name }) => (
                    <Tooltip key={url}>
                        <TooltipTrigger asChild>
                            <Link href={url} target="_blank">
                                <Icon
                                    className={cn("text-xl text-zinc-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400", iconSize)} />
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
