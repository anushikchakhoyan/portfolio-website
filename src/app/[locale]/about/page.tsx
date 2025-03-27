import { useTranslations } from "next-intl";

const About: React.FC = () => {
  const t = useTranslations('About');

  return (
    <div>
      about
    </div>
  );

  // <MainLayout>
  //   <About />
  //   <EssentialSkills />
  //   <WhyChooseUs />
  //   <VisionMission />
  //   {/* <Skills /> */}
  //   {/* <Experiences /> */}
  //   {/* <h1>{t('efficientAndTransparentProcesses')}</h1> */}
  //   <Subscribe />
  // </MainLayout>
}

export default About
