// 
"use client";
import React, { useEffect, useRef } from "react";

import { useTheme } from "@/contexts/ThemeContext";
import useIsMobile from "@/hooks/custom/use-mobile";

const ColorTrail: React.FC = () => {
    const { theme } = useTheme();
    const isMobile = useIsMobile();

    const containerRef = useRef<HTMLDivElement | null>(null);
    const numRef = useRef(0);
    const colorNumRef = useRef(0);
    const loadingRef = useRef(false);

    const lightColors = ["rgb(251,250,218)", "rgb(255,255,255)"];
    const darkColors = ["rgb(30, 74, 97)", "rgb(36, 36, 36)"];

    const getColors = () => (theme === "light" ? lightColors : darkColors);
    const defaultBg = theme === "light" ? "rgb(255,255,255)" : "rgb(36, 36, 36)";

    useEffect(() => {
        const cont = containerRef.current;
        if (!cont) return;

        cont.style.backgroundColor = defaultBg;
        const colors = getColors();

        const createCircle = (e: MouseEvent) => {
            const circle = document.createElement("div");
            circle.className = "circle";
            circle.style.left = `${e.x - 150}px`;
            circle.style.top = `${e.y - 150}px`;
            circle.style.backgroundColor = colors[colorNumRef.current];

            const mini = document.createElement("div");
            mini.className = "circleMini";
            circle.appendChild(mini);

            return circle;
        };

        const createBigCircle = (e: MouseEvent) => {
            const big = document.createElement("div");
            big.className = "bigCircle";
            big.style.left = `${e.x - 150}px`;
            big.style.top = `${e.y - 150}px`;
            big.style.backgroundColor = colors[colorNumRef.current];
            big.style.width = "300px";
            big.style.height = "300px";
            big.style.borderRadius = "50%";
            return big;
        };

        const cycleColor = () => {
            colorNumRef.current++;
            if (colorNumRef.current >= colors.length) colorNumRef.current = 0;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (loadingRef.current) return;

            cont.appendChild(createCircle(e));
            numRef.current++;

            if (numRef.current <= 200) return;

            // Trigger Big Explosion
            loadingRef.current = true;
            const big = createBigCircle(e);
            cont.appendChild(big);

            setTimeout(() => {
                loadingRef.current = false;

                const prevColor =
                    colorNumRef.current === 0
                        ? colors[colors.length - 1]
                        : colors[colorNumRef.current - 1];

                cont.style.backgroundColor = prevColor;

                big.remove();
                document.querySelectorAll(".circle").forEach((el) => el.remove());
            }, 2000);

            numRef.current = 0;
            cycleColor();
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const big = document.querySelector(".bigCircle") as HTMLDivElement;
            if (big) big.style.transform = `translateY(${scrollY}px)`;
        };

        document.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [theme, defaultBg, getColors]);

    if (isMobile) return null;

    return (
        <div
            id="staticbackgroundcont"
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden transition-colors duration-500"
        />
    );
};

export default ColorTrail;
