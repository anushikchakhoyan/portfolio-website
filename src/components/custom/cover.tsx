import { StaticImageData } from "next/image";

import Title from "@/components/custom/title";
import { cn } from "@/lib/utils";

type CoverSectionProps = {
    title: string,
    children?: React.ReactNode
    coverImage: StaticImageData,
    className?: string,
}

const CoverSection: React.FC<CoverSectionProps> = ({ title, coverImage, children, className }) => {
    return (
        <div
            className={cn("bg-cover bg-no-repeat bg-center bg-fixed h-screen flex flex-col items-center justify-center gap-10",
                className
            )}
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${coverImage.src})`,
            }}
        >
            <Title title={title} className="text-zinc-50 text-4xl md:text-5xl font-bold text-center font-italiana" />
            <div className="flex flex-col gap-8 max-w-5xl w-full mx-auto p-6 bg-zinc-800/40 backdrop-blur-xs rounded-lg shadow-lg">
                {children}
            </div>
        </div>
    );
};

export default CoverSection;