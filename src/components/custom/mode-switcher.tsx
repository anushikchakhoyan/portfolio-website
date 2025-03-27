
'use client'

import { FaStar, FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

import { useTheme } from "@/contexts/ThemeContext";
import { THEME_MODE } from "@/lib/constants";

const ModeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative flex h-8 w-16 items-center rounded-full transition-all cursor-pointer
                border-1 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-zinc-800"
        >
            <div
                className={`flex h-5 w-5 items-center justify-center rounded-full bg-white
                         shadow-md transition-all ${theme === THEME_MODE.dark ? "translate-x-10" : "translate-x-0 ml-1"
                    }`}
            />
            {theme === THEME_MODE.dark ? (
                <div className="flex items-center space-x-1 text-yellow-300">
                    <FaMoon className="h-4 w-4 absolute left-2" />
                    <FaStar className="h-1.5 w-1.5 absolute left-6 top-4" />
                    <FaStar className="h-1 w-1 absolute left-7 top-1" />
                    <FaStar className="h-1 w-1 absolute left-5 top-2" />
                </div>
            ) : (
                <div className="absolute right-3 flex items-center space-x-1">
                    <MdSunny className={`h-4 w-4 text-yellow-500`} />
                </div>
            )}
        </button>
    );
}

export default ModeSwitcher;
