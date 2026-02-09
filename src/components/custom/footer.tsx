"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import useNavigationData from "@/hooks/custom/use-nav-data";
import { NavigationType } from "@/lib/types";
import { usePathname } from "next/navigation";

import SocialMedia from "./social-media";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");
  const pathname = usePathname();

  const navigations = useNavigationData().filter(
    n => n.placement === "footer" || n.placement === "both"
  );
  const hideFooterRoutes = ["/en", "/hy"];

  if (hideFooterRoutes.includes(pathname)) {
    return null;
  }

  return (
    <footer className="pt-0 md:pt-12 w-full max-w-8xl mx-auto px-4">
      <div className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-2">
        <div className="py-6 md:py-0 w-full lg:w-1/2">
          <Link href="/" className="flex items-center font-semibold tracking-wide text-2xl font-italiana">
            {tHeader('im')}
          </Link>
          <p className="text-sm text-zinc-500 dark:text-zinc-300 whitespace-break-spaces">
            {t('footerQuote')}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {navigations.map(({ title, items }: NavigationType) => (
            <div key={title}>
              <h4 className="text-base md:text-lg font-medium mb-2 text-zinc-700 dark:text-zinc-200">{title}</h4>
              <ul>
                {items?.map(({ title, url }) => (
                  <li key={title}>
                    <a href={url}
                      className="text-sm text-zinc-700 dark:text-zinc-50 hover:text-zinc-700 dark:hover:text-gray-300">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-3 py-8">
        <h4 className="text-base md:text-lg font-normal text-zinc-700 dark:text-zinc-200">{t('followUs')}</h4>
        <SocialMedia />
      </div>
      <div className="py-8 text-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {tHeader('im')}. {t('allRightsReserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
