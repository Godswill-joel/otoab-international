
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface HeroSlide {
    id: number;
    title: string;
    description: string;
    image: string;
    buttonText?: string;
    buttonLink?: string;
}

interface HeroCarouselProps {
    slides: HeroSlide[];
    autoPlay?: boolean;
    interval?: number;
    height?: string;
}

export default function HeroCarousel({
    slides,
    autoPlay = true,
    interval = 5000,
    height = "min-h-[620px]",
}: HeroCarouselProps) {
    const [current, setCurrent] = useState(0);

    // const nextSlide = () => {
    //     setCurrent((prev) => (prev + 1) % slides.length);
    // };

    // const prevSlide = () => {
    //     setCurrent((prev) =>
    //         prev === 0 ? slides.length - 1 : prev - 1
    //     );
    // };

    useEffect(() => {
        if (!autoPlay || slides.length <= 1) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, slides.length]);
    if (!slides.length) return null;

    const slide = slides[current];

    return (
        <section
            className={`relative w-full ${height} overflow-hidden bg-black`}
        >


            {/* Background image */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.15 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{
                        opacity: { duration: 1 },
                        scale: {
                            duration: 12,
                            ease: "linear",
                        },
                    }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("${slide.image}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </AnimatePresence>


            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-[1]" />

            {/* Hero content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 min-h-[780px] flex items-center">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-[780px] text-white pt-10"
                    >

                        <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 uppercase">
                            {slide.title}
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-[760px] mb-8">
                            {slide.description}
                        </p>

                        <Link
                            href={slide.buttonLink || "/contact"}
                            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:-translate-y-1"
                        >
                            {slide.buttonText || "Contact Us"}
                        </Link>

                    </motion.div>
                </AnimatePresence>

            </div>

            {/* Previous button */}
            {slides.length > 1 && (
                <>
                    {/* <button
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        className="absolute z-20 left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
                    >
                        <ChevronLeft size={26} />
                    </button> */}

                    {/* Next button */}
                    {/* <button
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="absolute z-20 right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
                    >
                        <ChevronRight size={26} />
                    </button> */}
                </>
            )}
        </section>
    );
}
