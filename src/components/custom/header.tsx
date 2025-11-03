"use client";

import { Link } from '@/i18n/navigation';
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CgMenuRight } from 'react-icons/cg';

import useIsMobile from "@/hooks/custom/use-mobile";

import NavMenu from "./nav-menu";
import Settings from "./settings";
import LanguageSwitcher from "./settings/language-switcher";

const Header: React.FC = () => {
    const t = useTranslations("Header");
    const [toggle, setToggle] = useState(false);

    const isMobile = useIsMobile();

    const toggleMenu = () => {
        setToggle((prev: boolean) => !prev);
    }

    useEffect(() => {
        if (!isMobile) {
            setToggle(false);
        }
    }, [isMobile]);

    return (
        <header className="fixed z-[11] top-0 left-0 right-0 shadow-sm bg-background lg:bg-background/50 backdrop-blur-sm">
            <div className="w-full max-w-8xl mx-auto px-4 py-3 flex justify-between lg:justify-center">
                <Link href="/" className="flex items-center font-bold text-xl xl:text-2xl font-italiana">
                    {t('im')}
                </Link>
                <NavMenu toggle={toggle} />
                <div className="flex items-center gap-1 md:gap-2">
                    <Settings />
                    <LanguageSwitcher />
                    <CgMenuRight size={24} className="flex lg:hidden cursor-pointer" onClick={toggleMenu} />
                </div>
            </div>
        </header>
    )
}
export default Header;
