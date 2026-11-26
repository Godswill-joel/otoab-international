
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
    const shouldReduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const },
        },
    };

    return (
        <section className="relative overflow-hidden bg-[#f5f4f1] py-24 sm:py-28 lg:py-36">
            {/* Decorative background elements */}
            <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-black/[0.06]" />
            <div className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full border border-black/[0.06]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -55 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative z-10 h-[380px] overflow-hidden rounded-2xl sm:h-[480px] lg:h-[530px]">
                            <Image
                                src="https://res.cloudinary.com/dzhpdvoqd/image/upload/v1795602869/Otaob2_akhwxn.jpg"
                                alt="OTOAB International operations and team"
                                fill
                                priority={false}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="mb-2 text-2xs font-semibold uppercase tracking-[0.3em] text-red-600">
                                    OTAOB International
                                </p>
                                <h3 className="max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
                                    Building possibilities. Delivering excellence.
                                </h3>
                            </div>
                        </div>

                        <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-2xl bg-red-600 sm:-bottom-7 sm:-left-7" />

                        <motion.div
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="absolute -right-3 top-5 z-20 hidden rounded-xl border border-white/20 bg-[#171717] px-6 py-5 text-white shadow-2xl sm:block lg:-right-8"
                        >
                            <span className="block text-xs uppercase tracking-[0.25em] text-white/50">
                                Our commitment
                            </span>
                            <span className="mt-2 block text-lg font-semibold">
                                Quality. Trust. Excellence.
                            </span>
                            <div className="mt-3 h-1 w-12 rounded-full bg-red-600" />
                        </motion.div>
                    </motion.div>

                    {/* CONTENT SIDE */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.16 },
                            },
                        }}
                        className="relative z-10"
                    >
                        <motion.div variants={fadeUp} className="mb-7 flex items-center gap-3">
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                                Get to know us
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl"
                        >
                            More than a name.
                            <span className="mt-2 block text-red-600">
                                A commitment to excellence.
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-8 max-w-xl text-base leading-8 text-[#626262] sm:text-lg"
                        >
                            At OTAOB International, we are driven by a commitment to
                            delivering dependable solutions and creating lasting value
                            through professionalism, innovation, and quality service.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 max-w-xl text-base leading-8 text-[#626262] sm:text-lg"
                        >
                            We believe in building strong relationships, understanding
                            every client&apos;s needs, and approaching every project
                            with dedication and attention to detail.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-9 grid grid-cols-2 gap-5 border-y border-black/10 py-6"
                        >
                            <div>
                                <span className="mb-2 block h-1 w-8 bg-red-600" />
                                <h3 className="font-bold text-[#171717]">
                                    Client Focused
                                </h3>
                                <p className="mt-1 text-sm leading-6 text-[#777]">
                                    Understanding what matters to our clients.
                                </p>
                            </div>

                            <div>
                                <span className="mb-2 block h-1 w-8 bg-red-600" />
                                <h3 className="font-bold text-[#171717]">
                                    Quality Driven
                                </h3>
                                <p className="mt-1 text-sm leading-6 text-[#777]">
                                    A consistent commitment to doing things well.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-9">
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-5 rounded-full bg-[#171717] py-4 pl-7 pr-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600"
                            >
                                Discover Our Story

                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 transition-all duration-300 group-hover:bg-white group-hover:text-red-600">
                                    <ArrowUpRight
                                        size={19}
                                        className="transition-transform duration-300 group-hover:rotate-45"
                                    />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
