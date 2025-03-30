import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'hy'],
    defaultLocale: 'en',
    pathnames: {
        '/': '/',
        '/pathnames': {
            hy: '/pfadnamen'
        },
        '/contact-us': '/contact-us',
        '/faq': '/faq',
    }
});
