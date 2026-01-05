"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/Logo.png" alt="Perfect Data Entry" width="80" height="auto" />
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-[1000]
          ${menuOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="flex flex-col md:flex-row space-x-8 text-gray-700 font-medium px-6 py-6">
            <li>
              <Link href="/" className="hover:text-[var(--primary-color)] transition">
                Home
              </Link>
            </li>


            <li className="relative group md:block hidden">
              <Link href="#" className="hover:text-[var(--primary-color)] transition">
                Services
              </Link>
              <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-lg hidden group-hover:block transition-all z-50 py-2">
                <li>
                  <Link href="/data-entry-and-capture-services.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[var(--primary-color)] transition">
                    Data Entry & Capture Services
                  </Link>
                </li>
                <li>
                  <Link href="/data-processing-and-integration-services.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[var(--primary-color)] transition">
                    Data Processing & Integration Services
                  </Link>
                </li>
                <li>
                  <Link href="/data-cleansing-and-validation-services.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[var(--primary-color)] transition">
                    Data Cleansing & Validation Services
                  </Link>
                </li>
                <li>
                  <Link href="/data-conversion-and-mining-services.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[var(--primary-color)] transition">
                    Data Conversion & Mining Services
                  </Link>
                </li>
                <li>
                  <Link href="/data-enrichment-and-analysis-services.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[var(--primary-color)] transition">
                    Data Enrichment & Analysis Services
                  </Link>
                </li>
                <li>
                  <Link href="/data-visualization-and-reporting-services.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[var(--primary-color)] transition">
                    Data Visualization & Reporting Services
                  </Link>
                </li>
              </ul>
            </li>

            {/* Mobile button */}
            <li className="relative md:hidden">

              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left hover:text-[var(--primary-color)] md:hidden"
              >
                Services
              </button>

              {servicesOpen && (
                <ul className="md:hidden w-full">
                  {[
                    ["Data Entry & Capture", "/data-entry-and-capture-services.html"],
                    ["Data Processing & Integration", "/data-processing-and-integration-services.html"],
                    ["Data Cleansing & Validation", "/data-cleansing-and-validation-services.html"],
                    ["Data Conversion & Mining", "/data-conversion-and-mining-services.html"],
                    ["Data Enrichment & Analysis", "/data-enrichment-and-analysis-services.html"],
                    ["Data Visualization & Reporting", "/data-visualization-and-reporting-services.html"],
                  ].map(([label, link]) => (
                    <li key={label}>
                      <Link
                        href={link}
                        className="block px-2 py-1 text-sm hover:bg-gray-100 hover:text-[var(--primary-color)]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>


            <li>
              <Link href="about-us.html" className="hover:text-[var(--primary-color)] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="contact-us.html" className="hover:text-[var(--primary-color)] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div >
    </header >
  );
}