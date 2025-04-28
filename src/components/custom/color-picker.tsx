import { useCallback } from 'react';
import { useTranslations } from "next-intl";
import { FaPaintRoller } from 'react-icons/fa';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useColorsData from '@/hooks/custom/use-colors-data';
import { useColor } from '@/contexts/ColorContext';
import { Color } from '@/lib/types';
import { cn } from '@/lib/utils';

const ColorPicker = () => {
    const t = useTranslations("Colors");
    const { state, dispatch } = useColor();
    const colorsSet = useColorsData();

    const handleColorChange = useCallback((color: Color) => {
        dispatch({
            type: "SET_PRIMARY_COLOR",
            payload: { primary: color.primary, secondary: color.secondary }
        });
    }, [dispatch]);

    return (
        <Popover>
            <PopoverTrigger asChild className="flex items-center">
                <div
                    className="flex items-center justify-center h-8 w-8 p-0 group shadow-none rounded-full transition-all duration-300
                     bg-gray-100 hover:bg-white dark:bg-zinc-800 cursor-pointer touch-target
                       border border-gray-200 dark:border-gray-600 hover:border-primary/50 active:scale-95 hover:scale-105"
                    aria-label="Switch Color">
                    <FaPaintRoller className="text-zinc-700 text-sm dark:text-white group-hover:text-primary" />
                </div>
            </PopoverTrigger>
            <PopoverContent
                className="p-3 w-[calc(100vw-2rem)] max-w-sm "
                side="bottom"
                align="center"
                collisionPadding={16}
            >
                <h4 className='py-2 text-lg font-medium text-zinc-800 dark:text-zinc-50'>{t('chooseColorPallete')}</h4>
                <div className="grid grid-cols-1 gap-2 overflow-y-auto max-h-[60vh]">
                    {colorsSet.map((color) => {
                        const currentTheme = color.primary.hue === state.primary.hue &&
                            color.primary.saturation === state.primary.saturation &&
                            color.primary.lightness === state.primary.lightness;
                        return (
                            <div
                                key={color.name}
                                className={cn(
                                    `p-3 group rounded-md flex items-center justify-between gap-3 cursor-pointer 
                                    hover:bg-zinc-50 dark:hover:bg-zinc-700 active:scale-[0.98] transition-transform`,
                                    {
                                        "dark:bg-zinc-700 bg-zinc-100 border border-zinc-200 dark:border-zinc-600":
                                            currentTheme,
                                    }
                                )}
                                aria-label={`Select ${color.name} color`}
                                onClick={() => handleColorChange(color)}
                            >
                                <div className="flex-1 min-w-0">
                                    {currentTheme ? (
                                        <div className="flex flex-col">
                                            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 truncate">
                                                {t('currentTheme')}
                                            </p>
                                            <span className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                                                {t('currentThemeDescription')}
                                            </span>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 truncate capitalize">
                                                {color.name}
                                            </p>
                                            <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                                                {color.desc}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className={cn(
                                        `w-8 h-8 rounded-lg transition-all shrink-0
                                        group-active:ring-2 group-active:ring-zinc-300 dark:group-active:ring-zinc-500`,
                                        {
                                            "ring-2 ring-zinc-400 dark:ring-zinc-500": currentTheme,
                                        }
                                    )}
                                    style={{
                                        backgroundColor: `hsl(${color.primary.hue}, ${color.primary.saturation}%, ${color.primary.lightness}%)`,
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default ColorPicker;