
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Mail,
  MessageCircle,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Products", href: "/products" },
  { name: "Blog", href: "/blog" },
];

interface NavbarProps {
  logo?: string;
  companyName?: string;
  phone?: string;
  email?: string;
}

export default function Navbar({
  // logo = "/images/logo.png",
  // companyName = "BEOPS NIGERIA LIMITED",
  phone = "+234 813 533 8595",
  email = "sales@beopsnigeria.com",
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">

      {/* Top information bar */}
      <div className="bg-[#0756a0] text-white">
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
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 h-24 flex items-center justify-between">

          {/* Company logo */}
          {/* <Link href="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt={companyName}
              className="w-[115px] h-[75px] object-contain"
            />
          </Link> */}

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[16px] font-medium transition-colors duration-300 ${
                  link.name === "Home"
                    ? "text-red-500"
                    : "text-[#0756a0] hover:text-red-500"
                }`}
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Contact button */}
          <Link
            href="/contact"
            className="hidden lg:flex bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 transition duration-300"
          >
            Contact Us
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#0756a0]"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#0756a0] hover:text-red-500 font-medium"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-red-600 text-white text-center py-3 font-semibold"
            >
              Contact Us
            </Link>

          </div>
        )}
      </nav>
    </header>
  );
}
