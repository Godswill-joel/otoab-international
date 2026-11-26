'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { footerData } from '@/app/data/data';
import Image from 'next/image';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) return;

        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <footer className="relative bg-[#101010] text-white overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://res.cloudinary.com/dzhpdvoqd/image/upload/v1795600959/footer_q2fdjw.jpg"
                    alt="footer-background"
                    fill
                    className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#080d18]/60" />
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-3 py-16 md:py-20">


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10">

                    {/* About */}
                    <div>
                        {/* Company Logo */}
                        <div className="h-[76px] flex items-start">
                            <Link
                                href="/"
                                className="inline-block text-3xl font-extrabold tracking-wider"
                            >
                                OTAOB<span className="text-red-600">.</span>
                            </Link>
                        </div>

                        <h3 className="text-lg font-bold mb-5 relative inline-block">
                            {footerData.about.title}
                            <span className="absolute -bottom-3 left-0 w-12 h-0.5 bg-red-600" />
                        </h3>

                        <p className="text-gray-300 text-sm leading-8 mt-4">
                            {footerData.about.description}
                        </p>
                    </div>

                    {/* Office Information */}
                    <div className="lg:pt-[76px]">
                        <h3 className="text-lg font-bold mb-7 relative inline-block">
                            {footerData.office.title}
                            <span className="absolute -bottom-3 left-0 w-12 h-0.5 bg-red-600" />
                        </h3>

                        <div className="space-y-5 mt-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-1" />

                                <address className="text-gray-300 text-sm not-italic leading-7">
                                    {footerData.office.address.map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            {index !== footerData.office.address.length - 1 && <br />}
                                        </span>
                                    ))}
                                </address>
                            </div>

                            <Link
                                href={`mailto:${footerData.office.email}`}
                                className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors group"
                            >
                                <Mail className="w-4 h-4 text-red-500 group-hover:text-red-400" />
                                {footerData.office.email}
                            </Link>

                            <Link
                                href={`tel:${footerData.office.phone.replace(/\s/g, '')}`}
                                className="flex items-center gap-3 text-gray-300 hover:text-white text-sm transition-colors group"
                            >
                                <Phone className="w-4 h-4 text-red-500 group-hover:text-red-400" />
                                {footerData.office.phone}
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:pt-[76px]">
                        <h3 className="text-lg font-bold mb-7 relative inline-block">
                            {footerData.links.title}
                            <span className="absolute -bottom-3 left-0 w-12 h-0.5 bg-red-600" />
                        </h3>

                        <ul className="space-y-4 mt-4">
                            {footerData.links.items.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-red-500 hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:pt-[76px]">
                        <h3 className="text-lg font-bold mb-7 relative inline-block">
                            Stay Connected
                            <span className="absolute -bottom-3 left-0 w-12 h-0.5 bg-red-600" />
                        </h3>

                        <p className="text-gray-300 text-sm leading-7 mt-4 mb-6">
                            Subscribe to our newsletter for company updates, announcements
                            and the latest news from OTAOB International.
                        </p>

                        <form onSubmit={handleSubscribe} className="mb-8">
                            <div className="flex items-center bg-white/10 border border-white/20 focus-within:border-red-500 transition-colors">
                                <Mail className="w-4 h-4 text-gray-400 ml-3 shrink-0" />

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 min-w-0 bg-transparent px-3 py-3.5 text-sm text-white placeholder:text-gray-400 focus:outline-none"
                                    required
                                />

                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="px-4 py-3.5 bg-red-600 hover:bg-red-700 transition-colors"
                                >
                                    <Send className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <p className="text-center md:text-left text-gray-400 text-xs">
                            Copyright © {new Date().getFullYear()} OTOAB International.
                            All Rights Reserved.
                        </p>

                        <div className="flex items-center gap-6 text-xs text-gray-400">
                            <Link href="/privacy-policy" className="hover:text-red-500 transition-colors">
                                Privacy Policy
                            </Link>

                            <Link href="/terms" className="hover:text-red-500 transition-colors">
                                Terms & Conditions
                            </Link>
                        </div>

                    </div>

                </div>
            </div>

        </footer>
    );
}
