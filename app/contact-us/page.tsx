import Banner from "../components/banner";

export default function ContactPage() {
    return (
        <div className="w-full">

            {/* Banner Section */}
            <section>
                <Banner title="Request Free Price Quote!"
                    description=" No upfront payment. Just let us know your needs and we will provide your FREE price
                        quote. Contact us now for clean, reliable, on-time delivery data – every time!!!"
                    bannerImage="/contact-us/Banner.jpg" />
            </section>

            {/* Contact Information + Form Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT SIDE – Address / Info */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                        <div className="space-y-6">

                            <div>
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p className="text-gray-600">123 Perfect Data Entry Street, Chennai, India</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p className="text-gray-600">+91 98765 43210</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p className="text-gray-600">contact@perfect-data-entry.com</p>
                            </div>

                            {/* Social Icons */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>

                                <div className="flex space-x-4">
                                    {/* Facebook */}
                                    <a href="#" className="text-gray-600 hover:text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a href="#" className="text-gray-600 hover:text-pink-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2A2.8 2.8 0 1112 15a2.8 2.8 0 010-5.6zM17.5 6a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a href="#" className="text-gray-600 hover:text-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.2 0 5 2.8 5 6.5V24h-4v-8.2c0-2 0-4.6-3-4.6s-3.4 2.2-3.4 4.4V24h-4V8z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE – Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

                        <form className="space-y-5">

                            <div>
                                <label className="block font-medium mb-1">Your Name*</label>
                                <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="Your Name" />
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Your Email*</label>
                                <input type="email" className="w-full border rounded-lg px-4 py-2" placeholder="Your Email" />
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Phone Number*</label>
                                <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="Phone Number" />
                            </div>

                            <div>
                                <label className="block font-medium mb-1">How Can We Help You?*</label>
                                <textarea className="w-full border rounded-lg px-4 py-2" rows={4} placeholder="Describe your needs"></textarea>
                            </div>

                            <button className="cursor-pointer px-8 py-3 bg-[var(--primary-color)] text-white border-2 border-[var(--primary-color)] rounded-lg font-semibold hover:bg-transparent hover:text-[var(--primary-color)] transition">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[400px]">
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=..."
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </section>

        </div>
    );
}
