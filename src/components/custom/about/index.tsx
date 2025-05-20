import AboutWebSite from "./about-web-site";

import Rates from "./rates";
import AboutMe from "./about-me";
import EssentialSkills from "../essential-skills";
import WhyChooseUs from "../why-choose-us";
import VisionMission from "../vision-mission";
import OurFounders from "./founders";
import AboutHeader from "./about-header";

const About: React.FC = () => {

  return (
    <>
      <AboutHeader />
      <AboutMe />
      <Rates limit={[0, 3]} />
      <AboutWebSite />
      <EssentialSkills />
      <OurFounders />
      {/* <WhyChooseUs /> */}
      <Rates limit={[3, 5]} />
      <VisionMission />
    </>
  )
}

export default About
