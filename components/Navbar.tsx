"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Material 3 Dynamic Elevation - Morphs into a floating pill on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Love to Arrange", path: "/love-arrange" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "pt-4 px-4 md:px-6" : "pt-0 px-0"}`}
    >
      {/* Navbar Container */}
      <nav
        className={`mx-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? "max-w-5xl bg-[var(--bg-surface)]/90 backdrop-blur-xl shadow-lg rounded-full border border-[var(--bg-surface-hover)] py-3 px-4 md:px-6"
            : "max-w-7xl bg-[var(--bg-base)] py-6 px-6 md:px-8"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-[var(--bg-base)] font-bold text-lg group-hover:scale-105 transition-transform shadow-sm">
              SM
            </div>
            <span className="text-2xl font-bold text-main tracking-tight hidden sm:block">
              Shubh Milan
            </span>
          </Link>

          {/* Desktop Menu - Material 3 Tonal Active States */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-surface-hover text-primary font-bold shadow-inner"
                      : "text-muted hover:bg-surface-hover hover:text-main"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/register"
              className="ml-4 bg-primary text-[var(--bg-base)] px-7 py-2.5 rounded-full hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all font-semibold"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-main p-2 rounded-full hover:bg-surface-hover transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown - Material 3 Floating Card */}
      <div
        className={`md:hidden absolute left-4 right-4 top-full mt-2 transition-all duration-300 origin-top overflow-hidden ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
      >
        <div className="bg-[var(--bg-surface)]/95 backdrop-blur-xl border border-[var(--bg-surface-hover)] shadow-xl rounded-[2rem] p-4 flex flex-col space-y-2 text-base font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-5 py-3.5 rounded-2xl transition-all ${
                  isActive
                    ? "bg-surface-hover text-primary font-bold"
                    : "text-main hover:bg-surface-hover"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-4 mt-2 border-t border-[var(--bg-surface-hover)]">
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-[var(--bg-base)] flex justify-center w-full px-4 py-4 rounded-full font-bold shadow-md"
            >
              Create Your Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
