'use client';

import clsx from 'clsx';
import { Locale } from 'next-intl';
import { useTransition } from 'react';
import { routing } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { LANGUAGE } from '@/lib/constants';

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

const LanguageSwitcher = () => {
    const t = useTranslations();
    const [_, startTransition] = useTransition();

    const locale = useLocale();
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();

    function onSelectChange(language: Locale) {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: language }
            );
        });
    }

    return (
        <Popover>
            <PopoverTrigger asChild className="flex items-center">
                <div
                    className={`h-6 w-6 p-0 rounded-full border-1 border-gray-200 dark:border-gray-600 bg-cover bg-center transition-all 
                                duration-300 hover:border-gray-500 hover:scale-110  cursor-pointer
                   ${locale === LANGUAGE.en
                            ? "bg-[url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg')]"
                            : "bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg')]"
                        }
                    `}
                />
            </PopoverTrigger>
            <PopoverContent className="max-w-xs !w-full p-0">
                {routing.locales.map((cur) => (
                    <div
                        key={cur}
                        onClick={() => onSelectChange(cur)}
                        className="flex items-center gap-2 hover:bg-zinc-100 p-2 cursor-pointer appearance-none">
                        <div
                            className={clsx("h-5 w-5 p-0 rounded-full bg-cover bg-center",
                                cur === 'en' && "bg-[url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg')]",
                                cur === 'hy' && "bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg')]"
                            )}
                        />
                        <span>
                            {t('languageSelector', { language: cur })}
                        </span>
                    </div>
                ))}
            </PopoverContent>
        </Popover>
    )
}

export default LanguageSwitcher;
