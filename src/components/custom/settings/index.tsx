import { useCallback } from 'react';
import { useTranslations } from "next-intl";
import { FaPaintRoller, FaStreetView } from 'react-icons/fa';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import ModeSwitcher from './mode-switcher';

const Settings = () => {
    const t = useTranslations();

    return (
        <Popover>
            <PopoverTrigger asChild className="flex items-center">
                <div
                    className="flex items-center justify-center h-8 w-8 p-0 group shadow-none rounded-full transition-all duration-300
                     bg-gray-100 hover:bg-white dark:bg-zinc-800 cursor-pointer touch-target
                       border border-gray-200 dark:border-gray-600 hover:border-primary/50 active:scale-95 hover:scale-105"
                    aria-label="Switch Color">
                    <FaStreetView className="text-zinc-700 text-sm dark:text-white group-hover:text-primary" />
                </div>
            </PopoverTrigger>
            <PopoverContent
                className="p-3 w-[calc(100vw-2rem)] max-w-sm "
                side="bottom"
                align="center"
                collisionPadding={16}
            >
                {/* <h4 className='py-2 text-lg font-medium text-zinc-800 dark:text-zinc-50'>{t('chooseColorPallete')}</h4> */}
                <div className="grid grid-cols-1 gap-2 overflow-y-auto max-h-[60vh]">
                    <div
                        className={cn(
                            `p-3 group rounded-md flex items-center justify-between gap-3 cursor-pointer 
                                    hover:bg-zinc-50 dark:hover:bg-zinc-700 active:scale-[0.98] transition-transform`
                        )}
                    // onClick={() => handleColorChange(color)}
                    >
                        <div className="flex-1">
                            <ModeSwitcher />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default Settings;