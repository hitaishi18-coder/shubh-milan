"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-rose-800 text-white px-6 py-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Shubh Milan
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/register">Register</Link>
          <Link href="/love-arrange">Love to Arrange</Link>
          <Link href="/success-stories">Success</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 text-sm">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/register" onClick={() => setIsOpen(false)}>Register</Link>
          <Link href="/love-arrange" onClick={() => setIsOpen(false)}>Love to Arrange</Link>
          <Link href="/success-stories" onClick={() => setIsOpen(false)}>Success</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
