"use client";
import { useTheme } from "@/contexts/ThemeContext";
import React, { useEffect, useRef } from "react";

const ColorTrail: React.FC = () => {
    const { theme } = useTheme();

    const containerRef = useRef<HTMLDivElement | null>(null);
    const numRef = useRef(0);
    const loadingRef = useRef(false);
    const colorIndexRef = useRef(0);

    const lightColors = [
        "rgb(240,238,169)", // yellow
        "rgb(231,169,41)", // deep yellow
        "rgb(176, 137, 104)", //brown
        "rgb(255,255,255)", // white
        "rgb(185,137,224)", // pink
        "rgb(109, 89, 122)", // foletvi
        "rgb(129, 164, 205)", // blue
        "rgb(141,179,159)", // greenot
    ];

    const darkColors = [
        "rgb(182, 180, 89)", // yellow lightot
        "rgb(25,55,70)",   // marine blue
        "rgb(123, 11, 30)",  // red
        "rgb(50,50,50)", // gray
        // "rgb(15,15,15)", // black
        "rgb(95,65,145)",  // deep violet
    ];

    useEffect(() => {
        const colors = theme === "light" ? lightColors : darkColors;
        const container = containerRef.current;

        if (!container) return;

        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            if (loadingRef.current) return;

            // Create small trail circle
            const circle = document.createElement("div");
            circle.className = "circle";
            circle.style.left = `${e.x - 150}px`;
            circle.style.top = `${e.y - 150}px`;
            circle.style.backgroundColor = colors[colorIndexRef.current];

            // Add inner mini-circle for glow
            const mini = document.createElement("div");
            mini.className = "circleMini";
            circle.appendChild(mini);
            container.appendChild(circle);

            numRef.current++;

            // Every 200 small circles, create a big pulse
            if (numRef.current > 200) {
                loadingRef.current = true;

                const bigCircle = document.createElement("div");
                bigCircle.className = "bigCircle";
                bigCircle.style.left = `${e.x - 150}px`;
                bigCircle.style.top = `${e.y - 150}px`;
                bigCircle.style.backgroundColor = colors[colorIndexRef.current];
                bigCircle.style.width = "300px";
                bigCircle.style.height = "300px";
                bigCircle.style.borderRadius = "50%";
                container.appendChild(bigCircle);

                // Clean up and cycle colors
                setTimeout(() => {
                    loadingRef.current = false;
                    container.style.backgroundColor =
                        colorIndexRef.current === 0
                            ? colors[colors.length - 1]
                            : colors[colorIndexRef.current - 1];

                    bigCircle.remove();
                    container.querySelectorAll(".circle").forEach((el) => el.remove());
                }, 2000);

                numRef.current = 0;
                colorIndexRef.current =
                    (colorIndexRef.current + 1) % colors.length;
            }
        };

        // Use rAF for smoother scroll animation if needed later
        const handleScroll = () => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                container.style.transform = `translateY(${scrollY}px)`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme, darkColors, lightColors]);

    return (
        <div
            id="staticbackgroundcont"
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden transition-colors duration-500"
        ></div>
    );
};

export default ColorTrail;

