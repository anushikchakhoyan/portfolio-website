'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTranslations } from 'next-intl';
import { TbSettingsSpark } from 'react-icons/tb';

import ModeSwitcher from './mode-switcher';
import ColorPicker from './color-picker';

const Settings = () => {
    const t = useTranslations("Colors");

    return (
        <Popover>
            <PopoverTrigger asChild className="flex items-center">
                <TbSettingsSpark size={24} className="cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent>
                {/* <p className="pt-2 pb-5">{t('chooseColorPallete')}</p> */}
                <ul>
                    {/* <li>
                        <ColorPicker />
                    </li>
                    <li className='my-5 h-[0.5px] w-full bg-gray-200 dark:bg-gray-600'></li> */}
                    <li>
                        <ModeSwitcher />
                    </li>
                </ul>
                <span className="pt-4 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                    *{t('currentThemeDescription')}
                </span>
            </PopoverContent>
        </Popover>
    )
}

export default Settings;
