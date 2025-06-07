import { cn } from "@/lib/utils"

import { useEssentialSkillsData, useSkillsData } from "@/hooks/custom/use-skills-data";
import PageLayout from "./page-layout";

const EssentialSkills: React.FC = () => {
    const essentials = useEssentialSkillsData();
    const techSkills = useSkillsData();

    return (
        <PageLayout id="essentialSkills" className="px-0 max-w-full relative">
            <div
                className="w-screen overflow-hidden flex flex-col gap-5 relative 
      before:content-[''] before:absolute before:top-0 before:left-0 before:z-10 before:w-32 before:h-full 
      before:bg-gradient-to-r before:from-white before:to-transparent dark:before:from-zinc-900 
      after:content-[''] after:absolute after:top-0 after:right-0 after:z-10 after:w-32 after:h-full 
      after:bg-gradient-to-l after:from-white after:to-transparent dark:after:from-zinc-900"
            >
                {[0, 1].map((index) => {
                    const items =
                        index % 2 === 0
                            ? [...essentials, ...essentials]
                            : [...techSkills, ...techSkills];
                    return (
                        <div
                            key={`scroll-container-${index}`}
                            className={cn(
                                'flex gap-3 whitespace-nowrap',
                                index % 2 === 0
                                    ? 'animate-scroll-linear-left'
                                    : 'animate-scroll-linear-right'
                            )}
                        >
                            {items.map((item, innerIndex) => (
                                <div
                                    key={`skill-${item}-${index}-${innerIndex}`}
                                    className="text-sm md:text-base px-7 py-3 rounded-xl text-center
              bg-white hover:bg-primary hover:text-white dark:bg-zinc-800/30 dark:hover:bg-primary
              active:bg-primary active:text-white
              shadow-xs border border-primary/20 hover:scale-105 transition-all duration-1000 ease-in-out"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </PageLayout>
    )
}

export default EssentialSkills;
