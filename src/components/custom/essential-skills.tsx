import { cn } from "@/lib/utils"

import { useEssentialSkillsData, useSkillsData } from "@/hooks/custom/use-skills-data";
import PageLayout from "./page-layout";

const EssentialSkills: React.FC = () => {
    const essentials = useEssentialSkillsData();
    const techSkills = useSkillsData();

    return (
        <PageLayout id="essentialSkills" className="lg:py-0 px-0 max-w-full">
            <div className="w-screen overflow-hidden flex flex-col gap-5">
                {[0, 1].map((index) => {
                    const items = index % 2 === 0 ? [...essentials, ...essentials] : [...techSkills, ...techSkills];
                    return (
                        <div key={`scroll-container-${index}`} className={cn(
                            'flex gap-3 whitespace-nowrap',
                            index % 2 === 0
                                ? 'animate-scroll-linear-left'
                                : 'animate-scroll-linear-right'
                        )}>
                            {items.map((item, innerIndex) => (
                                <div
                                    key={`skill-${item}-${index}-${innerIndex}`}
                                    className="text-sm md:text-base px-7 py-3 rounded-xl transition-all duration-300 text-center
                                        bg-white hover:bg-primary hover:text-white dark:bg-zinc-800/30 dark:hover:bg-primary
                                         shadow-xs border border-primary/20 hover:scale-105"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </PageLayout>
    )
}

export default EssentialSkills;
