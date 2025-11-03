"use client";
import { useTheme } from "@/contexts/ThemeContext";
import React, { useEffect, useRef } from "react";

const ColorTrail: React.FC = () => {
    const { theme } = useTheme();

    const containerRef = useRef<HTMLDivElement | null>(null);
    const bigCircleRef = useRef<HTMLDivElement | null>(null);
    const numRef = useRef(0);
    const colorNumRef = useRef(0);
    const loadingRef = useRef(false);

    const lightColors = [
        "rgb(240,238,169)", // yellow
        "rgb(231,169,41)", // deep yellow
        "rgb(129, 164, 205)", // blue
        "rgb(213, 244, 168)", // green
        "rgb(255,255,255)", // white
    ];

    const darkColors = [
        "rgb(30, 74, 97)",
        "rgb(182, 180, 89)",
        "rgb(36, 36, 36)",
    ];

    useEffect(() => {
        const colors = theme === "light" ? lightColors : darkColors;
        const cont = containerRef.current;
        if (!cont) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (loadingRef.current) return;

            const circle = document.createElement("div");
            circle.classList.add("circle");
            circle.style.left = `${e.x - 150}px`;
            circle.style.top = `${e.y - 150}px`;
            circle.style.backgroundColor = colors[colorNumRef.current];

            const mini = document.createElement("div");
            mini.classList.add("circleMini");
            circle.appendChild(mini);
            cont.appendChild(circle);

            numRef.current++;

            if (numRef.current > 200) {
                loadingRef.current = true;

                const bigCircle = document.createElement("div");
                bigCircle.classList.add("bigCircle");
                bigCircle.style.left = `${e.x - 150}px`;
                bigCircle.style.top = `${e.y - 150}px`;
                bigCircle.style.backgroundColor = colors[colorNumRef.current];
                bigCircle.style.width = "300px";
                bigCircle.style.height = "300px";
                bigCircle.style.borderRadius = "50%";
                cont.appendChild(bigCircle);

                setTimeout(() => {
                    loadingRef.current = false;
                    cont.style.backgroundColor =
                        colorNumRef.current === 0
                            ? colors[colors.length - 1]
                            : colors[colorNumRef.current - 1];

                    bigCircle.remove();
                    document.querySelectorAll(".circle").forEach((el) => el.remove());
                }, 2000);

                numRef.current = 0;
                colorNumRef.current++;
                if (colorNumRef.current >= colors.length) colorNumRef.current = 0;
            }
        };

        const handleScroll = () => {
            const mec = bigCircleRef.current;
            if (mec) {
                const scrollPos = window.scrollY;
                mec.style.transform = `translateY(${scrollPos}px)`;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [theme]);

    return (
        <div
            id="staticbackgroundcont"
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden transition-colors duration-500"
        ></div>
    );
};

export default ColorTrail;

