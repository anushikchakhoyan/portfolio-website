"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from '@/i18n/navigation';
import { IoMenuOutline } from 'react-icons/io5'

import { Button } from "@/components/ui/button";
import useIsMobile from "@/hooks/custom/use-mobile";

import LanguageSwitcher from "./settings/language-switcher";
import ColorPicker from "./settings/color-picker";
import ModeSwitcher from "./settings/mode-switcher";
import NavMenu from "./nav-menu";

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
        <header className="fixed z-20 top-0 left-0 right-0 shadow-sm bg-background">
            <div className="w-full max-w-8xl mx-auto px-4 py-3 flex justify-between lg:justify-center">
                <Link href="/" className="flex items-center font-bold text-xl xl:text-2xl font-italiana">
                    {t('im')}
                </Link>
                <NavMenu toggle={toggle} />
                <div className="flex items-center gap-1 md:gap-2">
                    <LanguageSwitcher />
                    <ColorPicker />
                    <ModeSwitcher />
                    {/* <Settings /> */}
                    {!isMobile && (
                        <Link href="/contact-us">
                            <Button variant="outline">
                                {t('getInTouch')}
                            </Button>
                        </Link>
                    )}
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={toggleMenu}
                        className="flex lg:hidden bg-white dark:bg-zinc-700 dark:text-white text-gray-800"
                    >
                        <IoMenuOutline />
                    </Button>
                </div>
            </div>
        </header>
    )
}
export default Header;
