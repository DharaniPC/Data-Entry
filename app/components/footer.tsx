import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 justify-between">
        {/* Logo */}
        <div className="mb-8 md:mb-0 w-[30%]">
          <Link href="/">
            <span className="text-2xl font-bold text-[var(--primary-color)] cursor-pointer">
              Perfect Data Entry
            </span>
          </Link>
          <div className="mt-6 leading-relaxed">
            <p>Perfect Data Entry team is amongst the industry’s top 10 virtual assistant companies. We build high-performance teams that deliver results! Our goodwill and body of work across the globe speak for themselves.</p>
          </div>
        </div>


        {/* Address & Contact - Center */}
        <div className="text-sm flex flex-col items-start w-[35%]">
          <p>123 Main Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
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
