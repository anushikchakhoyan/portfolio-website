import { routing } from '@/i18n/routing';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { Dancing_Script, Italiana, Josefin_Sans, Noto_Serif_Armenian } from "next/font/google";
import { notFound } from 'next/navigation';

import { ColorProvider } from '@/contexts/ColorContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

import Footer from '@/components/custom/footer';
import Header from '@/components/custom/header';

import './global.css';

const JosefinSans = Josefin_Sans({
    variable: "--font-josefin-sans",
    subsets: ["latin"],
});

const DancingScript = Dancing_Script({
    variable: "--font-dancing-script",
    subsets: ["latin"],
});

const ItalianaFont = Italiana({
    variable: "--font-italiana",
    subsets: ["latin"],
    weight: "400",
});

const Armenian = Noto_Serif_Armenian({
    variable: "--font-armenian",
    subsets: ["latin"],
    weight: "400",
});

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body className={`${JosefinSans.variable} ${DancingScript.variable} ${ItalianaFont.variable} ${Armenian.variable}`}>
                <NextIntlClientProvider>
                    <ThemeProvider>
                        <ColorProvider>
                            <main className='absolute z-10 top-0 left-0 w-full h-full'>
                                <Header />
                                <section className='pt-16'>{children}</section>
                                <Footer />
                            </main>
                        </ColorProvider>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}