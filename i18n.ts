import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'hy']

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale)) notFound()

    return {
        messages: (await import(`../public/locales/${locale}.json`)).default
    }
})