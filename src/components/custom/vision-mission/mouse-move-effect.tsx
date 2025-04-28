'use client'
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PURPOSE } from "@/lib/constants";
import { IconType } from "react-icons/lib";

type MouseMoveEffectProps = {
    items: {
        title: string;
        desc: string;
        Icon?: IconType;
        type: string;
    }
}

type GradientOverlayProps = {
    isHovered: boolean;
    coords: {
        x: number;
        y: number;
    };
}

const MouseMoveEffect: React.FC<MouseMoveEffectProps> = ({ items }) => {
    const [coords, setCoords] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setCoords({ x, y });
    };

    return (
        <div
            className="px-4 lg:px-8 py-8 lg:py-12 flex flex-col gap-4 lg:gap-6 rounded-xl relative overflow-hidden
                     bg-white dark:bg-zinc-800/30 shadow-xs border border-primary/20 
                       group hover:bg-primary-200/10 transition-all duration-1000 ease-in-out 
                       hover:border-primary"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <GradientOverlay isHovered={isHovered} coords={coords} />
            <Content items={items} />
        </div>
    );
};

export default MouseMoveEffect;

const Content: React.FC<MouseMoveEffectProps> = (({ items }) => {
    const { title, desc, Icon, type } = items;
    return (
        <div className="relative z-10">
            <div className="flex flex-col items-start gap-1 text-primary dark:text-primary">
                <Icon className={cn("w-8 h-8",
                    type === PURPOSE.vision && "group-hover:translate-x-5 group-hover:-translate-y-4 transition-all duration-300",
                    type === PURPOSE.mission && "group-hover:scale-125 transition-all duration-300"
                )} />
                <h2 className="text-xl lg:text-2xl font-medium tracking-wider font-italiana">
                    {title}
                </h2>
            </div>
            <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-50">
                {desc}
            </p>
        </div>
    )
});
Content.displayName = "Content";

const GradientOverlay: React.FC<GradientOverlayProps> = (({ isHovered, coords }) => {
    return (
        <div className={cn("absolute inset-0 transition-opacity duration-300 pointer-events-none",
            isHovered ? 'opacity-100' : 'opacity-0')}
            style={{
                background: `radial-gradient(
                     300px circle at ${coords.x}% ${coords.y}%, hsl(var(--primary) / 30%) 0%, transparent 60%
                )`,
                transition: 'background 0.2s linear'
            }}
        />
    )
});
GradientOverlay.displayName = "GradientOverlay";