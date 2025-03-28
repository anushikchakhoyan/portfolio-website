import * as React from "react";
import { useTranslations } from "next-intl";

import AboutWebSite from "./about-web-site";
import WhatWeDo from "./what-we-do";
import Heading from "./heading";

import aboutCover from "../../../../public/images/about/cover-1.jpg";
import CoverSection from "../cover";
import Rates from "./rates";

const About: React.FC = () => {
  const t = useTranslations("About");
  const tHeader = useTranslations("Header");

  return (
    <>
      <Heading />
      <WhatWeDo />
      <CoverSection
        title={tHeader("about")}
        coverImage={aboutCover}
      >
        <p className="text-sm md:text-base text-zinc-50 whitespace-break-spaces">{t('aboutDescription1')}</p>
        <p className="text-sm md:text-base text-zinc-50 whitespace-break-spaces">{t('aboutDescription2')}</p>
        <p
          className="text-sm md:text-base text-zinc-50 whitespace-break-spaces">
          {t('myFocusDescription')}
        </p>
        <p
          className="text-sm md:text-base text-zinc-50 whitespace-break-spaces">
          {t.markup('visionDescription', {
            span: (chunks) => `<span className="font-medium">${chunks}</b>`
          })}
        </p>
      </CoverSection>
      <Rates limit={[0, 3]} />
      <AboutWebSite />
      <Rates limit={[3, 5]} />
    </>
  )
}

export default About
