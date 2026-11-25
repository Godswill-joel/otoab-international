
"use client";
import {navLinks} from '@/app/data/data'
import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";


interface NavbarProps {
  logo?: string;
  companyName?: string;
  phone?: string;
  email?: string;
}

export default function Navbar({ }: NavbarProps) {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  // Detect page scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close menu when route changes

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ── TOP INFORMATION BAR ── */}

      {/* <div className="bg-[#0756a0] text-white">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 min-h-[64px] flex flex-col md:flex-row items-center justify-between py-3 gap-3">

          <p className="text-sm italic tracking-wide">
            ... truly Nigerian Indigenous company.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-5 text-sm">

            <a
              href={`https://wa.me/${phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 hover:text-red-200 transition"
            >
              <MessageCircle size={16} />
              {phone}
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-red-200 transition"
            >
              <Mail size={16} />
              {email}
            </a>

          </div>
        </div>
      </div> */}

      {/* ── MAIN NAVBAR ── */}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-black/95 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20 flex items-center justify-between">

          {/* ── COMPANY LOGO ── */}

          {/* <Link href="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt={companyName}
              className="w-[115px] h-[75px] object-contain"
            />
          </Link> */}

          {/* Temporary brand text until logo is enabled */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white shrink-0"
          >
            OTOAB
            <span className="text-red-600">.</span>
          </Link>

          {/* ── DESKTOP NAVIGATION ── */}

          <ul className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10">

            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative text-[12px] lg:text-[14px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 group ${isActive
                      ? "text-red-500"
                      : "text-gray-200 hover:text-white"
                      }`}
                  >
                    {link.name}

                    {/* Animated underline */}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] bg-red-600 transition-all duration-300 ${isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                </li>
              );
            })}

          </ul>

          {/* ── DESKTOP CONTACT BUTTON ── */}

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center text-[11px] lg:text-[12px] font-bold uppercase tracking-widest bg-red-600 hover:bg-white hover:text-red-600 text-white px-5 lg:px-7 py-3 border border-red-600 transition-all duration-300"
          >
            Contact Us
          </Link>

          {/* ── MOBILE HAMBURGER ── */}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 cursor-pointer"
          >
            <span
              className={`block w-7 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen
                ? "rotate-45 translate-y-[8px]"
                : ""
                }`}
            />

            <span
              className={`block w-7 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                }`}
            />

            <span
              className={`block w-7 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen
                ? "-rotate-45 -translate-y-[8px]"
                : ""
                }`}
            />
          </button>

        </div>
      </nav>

      {/* ── MOBILE BACKDROP ── */}


      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}


      <aside
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed top-0 left-0 right-0 z-[70] bg-[#101010] border-b border-white/10 shadow-2xl flex flex-col transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-widest text-white"
          >
            OTOAB<span className="text-red-600">.</span>
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="text-white p-2"
          >
            <X size={26} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col px-6 py-5 gap-2 max-h-[65vh] overflow-y-auto">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 70}ms`
                    : "0ms",
                }}
                className={`py-4 border-b border-white/10 text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
                  } ${isActive
                    ? "text-red-500"
                    : "text-white hover:text-red-500"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile CTA */}
        <div className="px-6 py-5 border-t border-white/10">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white py-4 text-sm font-bold tracking-widest uppercase transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </aside>

    </>
  );
}


