import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/Logo.png" alt="Perfect Data Entry" width="80" height="auto" />
          </Link>
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-[var(--primary-color)] transition">
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link href="#" className="hover:text-[var(--primary-color)] transition">
                Services
              </Link>
              <ul
                className="absolute left-0 hidden w-56 bg-white shadow-lg rounded-lg group-hover:block transition-all z-50 py-2">
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
      </div>
    </header>
  );
}