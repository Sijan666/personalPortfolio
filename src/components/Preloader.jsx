import React, { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [stage, setStage] = useState("loading");

    useEffect(() => {
        const interval = setInterval(() => {
        setProgress((prev) => {
            if (prev >= 100) {
            clearInterval(interval);
            return 100;
            }
            return prev + 1;
        });
        }, 20);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
        setTimeout(() => setStage("fadeText"), 400);
        setTimeout(() => setStage("hideAll"), 1000);
        setTimeout(() => onComplete(), 2200);
        }
    }, [progress, onComplete]);

    return (
        <div className={`fixed inset-0 z-9999 flex items-center justify-center bg-[#070707] transition-all duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            stage === "hideAll"
            ? "opacity-0 backdrop-blur-md pointer-events-none scale-105"
            : "opacity-100 scale-100"}`}>
            <div className={`flex flex-col items-center transition-opacity duration-700 ease-in-out ${
                stage !== "loading"
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"}`}>
                <h2 className="text-gray-300 text-[11px] md:text-xs font-light uppercase tracking-[0.5em] mb-5 ml-[0.5em]">
                    Majharul Islam
                </h2>
                <div className="w-40 md:w-56 h-px bg-gray-800/50 overflow-hidden">
                    <div className="h-full bg-linear-to-r from-orange-500/40 to-orange-500 transition-all duration-300 ease-linear" style={{ width: `${progress}%` }}/>
                </div>
            </div>
        </div>
    );
};

export default Preloader;