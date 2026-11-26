
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
    motion,
    useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/app/data/data";

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dzhpdvoqd/image/upload/v1795652226/Otaob-services_tgvujf.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            {/* DARK BACKGROUND OVERLAY */}
            <div className="absolute inset-0 -z-10 bg-black/15" />

            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/60 via-[#101827]/50 to-black/70" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

                {/* SECTION HEADING */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 35,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                        <span className="h-[2px] w-8 bg-red-600" />
                        What We Do
                        <span className="h-[2px] w-8 bg-red-600" />
                    </span>

                    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Our{" "}
                        <span className="text-red-600">
                            Services
                        </span>
                    </h2>

                    <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-red-600" />

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                        Delivering dependable engineering, construction
                        and facility solutions through expertise,
                        innovation and a commitment to quality.
                    </p>
                </motion.div>

                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.id}
                            initial={{
                                opacity: 0,
                                y: shouldReduceMotion ? 0 : 45,
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.65,
                                delay: shouldReduceMotion
                                    ? 0
                                    : index * 0.1,
                                ease: "easeOut",
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-black/50 hover:shadow-2xl"
                        >

                            <Link
                                href={service.href}
                                aria-label={`Learn more about ${service.title} ${service.subtitle}`}
                                className="relative block h-60 overflow-hidden sm:h-64"
                            >
                                <Image
                                    src={service.image}
                                    alt={`${service.title} ${service.subtitle}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 text-sm font-bold text-white backdrop-blur-md">
                                    0{service.id}
                                </span>

                                <span className="absolute bottom-0 left-0 h-1 w-16 bg-red-600 transition-all duration-500 group-hover:w-full" />
                            </Link>

                            <div className="relative p-7 sm:p-8">
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <h3 className="text-2xl font-extrabold tracking-tight text-white">
                                        {service.title}
                                        <span className="ml-1 text-red-600">
                                            {service.subtitle}
                                        </span>
                                    </h3>

                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-red-600 transition-all duration-300 group-hover:rotate-45 group-hover:bg-red-600 group-hover:text-white">
                                        <ArrowUpRight size={20} />
                                    </span>
                                </div>

                                <p className="min-h-[72px] text-sm leading-7 text-white/75">
                                    {service.description}
                                </p>

                                <Link
                                    href={service.href}
                                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600 transition-colors duration-300 hover:text-white"
                                >
                                    Explore Service
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
