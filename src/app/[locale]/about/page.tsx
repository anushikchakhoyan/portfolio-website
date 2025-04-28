import EssentialSkills from "@/components/custom/essential-skills";
import VisionMission from "@/components/custom/vision-mission/";
import WhyChooseUs from "@/components/custom/why-choose-us";
import Subscribe from "@/components/custom/subscribe";
import About from "@/components/custom/about";

const AboutPage: React.FC = () => {
  return (
    <>
      <About />
      <EssentialSkills />
      <WhyChooseUs />
      <VisionMission />
      <Subscribe />
    </>
  );
}

export default AboutPage
