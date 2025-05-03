"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [iconError, setIconError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {!iconError ? (
            <img
              src="/icons/cloudtech.png"
              alt="CloudTech Icon"
              className="h-12 w-auto" // tinggi ikut navbar, lebar otomatis
              onError={() => setIconError(true)}
            />
          ) : (
            <span className="text-2xl font-bold text-blue-600 tracking-wide">
              SKYWISE
            </span>
          )}
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/health" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Health & Activities
          </Link>
          <Link href="/education" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Education
          </Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <Link
            href="/health"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Health & Activities
          </Link>
          <Link
            href="/education"
            className="block text-gray-700 hover:text-blue-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
