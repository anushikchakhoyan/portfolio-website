import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { Dancing_Script, Josefin_Sans, Italiana, Noto_Serif_Armenian } from "next/font/google";

import { ColorProvider } from '@/contexts/ColorContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

import Header from '@/components/custom/header';
import Footer from '@/components/custom/footer';

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
                            <Header />
                            <main className='pt-20'>{children}</main>
                            <Footer />
                        </ColorProvider>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}