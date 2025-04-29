import AboutWebSite from "./about-web-site";
import WhatWeDo from "./what-we-do";

import Rates from "./rates";
import AboutMe from "./about-me";
import EssentialSkills from "../essential-skills";
import WhyChooseUs from "../why-choose-us";
import VisionMission from "../vision-mission";

const About: React.FC = () => {

  return (
    <>
      <WhatWeDo />
      <Rates limit={[0, 3]} />
      <AboutMe />
      <EssentialSkills />
      <WhyChooseUs />
      <AboutWebSite />
      <Rates limit={[3, 5]} />
      <VisionMission />
    </>
  )
}

export default About
