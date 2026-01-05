import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 justify-between">
        {/* Logo */}
        <div className="mb-8 md:mb-0 w-[30%]">
          <Link href="/">
            <img src="/Logo-White.png" alt="Perfect Data Entry" width="80" height="auto" />
          </Link>
          <div className="mt-6 leading-relaxed">
            <p>123 Main Street, City, Country</p>
          <p>Email: <a href="mailto:contact@perfect-data-entry.com">contact@perfect-data-entry.com</a></p>
          <p>Phone: <a href="tel:+91 98765 43210">+91 98765 43210</a></p>
          </div>
        </div>


        {/* Address & Contact - Center */}
        <div className="text-sm flex flex-col items-start w-[35%]">
          <h4 className="text-xl font-semibold mb-2">Services</h4>
          <nav>
            <ul className="flex flex-col space-y-2 font-medium">
                <li>
                  <Link href="/data-entry-and-capture-services.html" className="block transition">
                    Data Entry & Capture Services 
                  </Link>
                </li>
                <li>
                  <Link href="/data-processing-and-integration-services.html" className="block transition">
                    Data Processing & Integration Services
                  </Link>
                </li>
                <li>
                  <Link href="/data-cleansing-and-validation-services.html" className="block transition">
                    Data Cleansing & Validation Services
                  </Link>
                </li>
                <li>
                  <Link href="/data-conversion-and-mining-services.html" className="block transition">
                    Data Conversion & Mining Services
                  </Link>
                </li>
                <li>
                  <Link href="/data-enrichment-and-analysis-services.html" className="block transition">
                    Data Enrichment & Analysis Services
                  </Link>
                </li>
                <li>
                  <Link href="/data-visualization-and-reporting-services.html" className="block transition">
                    Data Visualization & Reporting Services
                  </Link>
                </li>
              </ul>
          </nav>
        </div>


        {/* Menu - vertical */}
        <nav className="w-[35%]">
          <ul className="flex flex-col space-y-4 font-medium">
            <li>
              <Link href="/" className="hover:text-[var(--primary-color)] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--primary-color)] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--primary-color)] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 mt-8 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Perfect Data Entry. All rights reserved.
      </div>
    </footer>
  );
}
