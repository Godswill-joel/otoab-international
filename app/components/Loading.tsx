
"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setHidden(true);
        }, 400);

        return () => window.clearTimeout(timer);
    }, []);

    return (
        <div
            role="status"
            aria-label="OTOAB International is loading"
            aria-hidden={hidden}
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-[#101010] text-white transition-opacity duration-300 ease-out ${hidden
                ? "opacity-0 pointer-events-none invisible"
                : "opacity-100"
                }`}
        >
            {/* Logo */}
            <div className="text-5xl sm:text-6xl font-black tracking-[0.12em]">
                OTAOB<span className="text-red-600">.</span>
            </div>

            <div className="w-12 h-[3px] bg-red-600" />

            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase">
                OTAOB International
            </h2>

            {/* Progress */}
            <div className="w-56 sm:w-64 h-[3px] bg-white/10 overflow-hidden">
                <div className="otoab-loader-progress h-full bg-red-600" />
            </div>
        </div>
    );
}
