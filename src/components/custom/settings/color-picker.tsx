import { useCallback } from 'react';

import useColorsData from '@/hooks/custom/use-colors-data';
import { useColor } from '@/contexts/ColorContext';
import { Color } from '@/lib/types';
import { cn } from '@/lib/utils';

const ColorPicker = () => {
    const { state, dispatch } = useColor();
    const colorsSet = useColorsData();

    const handleColorChange = useCallback((color: Color) => {
        dispatch({
            type: "SET_PRIMARY_COLOR",
            payload: { primary: color.primary, secondary: color.secondary }
        });
    }, [dispatch]);

    return (
        colorsSet.map((color) => {
            const currentTheme = color.primary.hue === state.primary.hue &&
                color.primary.saturation === state.primary.saturation &&
                color.primary.lightness === state.primary.lightness;
            return (
                <div
                    key={color.name}
                    className={cn(
                        `py-2 px-3 group rounded-md flex items-center justify-between gap-2 cursor-pointer 
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
                        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 truncate capitalize">
                            {color.name}
                        </p>
                    </div>
                    <div
                        className={cn(
                            `w-6 h-6 rounded-full transition-all shrink-0
                                        group-active:ring-2 group-active:ring-zinc-300 dark:group-active:ring-zinc-500`
                        )}
                        style={{
                            backgroundColor: `hsl(${color.primary.hue}, ${color.primary.saturation}%, ${color.primary.lightness}%)`,
                        }}
                    />
                    <div
                        className={cn(
                            `w-6 h-6 rounded-full transition-all shrink-0
                                        group-active:ring-2 group-active:ring-zinc-300 dark:group-active:ring-zinc-500`
                        )}
                        style={{
                            backgroundColor: `hsl(${color.secondary.hue}, ${color.secondary.saturation}%, ${color.secondary.lightness}%)`,
                        }}
                    />
                </div>
            );
        })
    );
};

export default ColorPicker;