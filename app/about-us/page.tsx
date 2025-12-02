import WhyTeamSection from "../components/whyteamsection";

export default function AboutPage() {

    const features = [
        "Operating since 1999 from New Delhi, India",
        "Serving over 3850+ clients in 21+ countries",
        "24/7 support through multiple communication channels",
        "Proven 100% on-time delivery",
        "Flexible & cost-effective pricing models",
        "Large, skilled competency pool",
        "Strong infrastructure and technologies",
        "Diverse service portfolio",
        "Relationships built on trust, integrity, and reliability"
    ];


    return (
        <>

            {/* Banner Section */}
            <section className="relative bg-[url('/contact-us/Banner.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl font-bold mb-3">India's Leading Data Support and BPO/BPM Company</h1>
                </div>
            </section>

            {/* Company Overview */}
            <section >
                <div className="w-full flex justify-center px-6 py-10 bg-gray-50">
                    <div className="max-w-7xl space-y-6">
                        <h2 className="text-3xl font-bold">About Us</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Data-Entry-India.com, a division of SunTec India (ISO 9001:2015 Certified for Quality
                            Management System and ISO 27001:2022 Certified for Information Security Management),
                            offers a comprehensive suite of data entry, management, and business process
                            outsourcing services to a worldwide clientele.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Since its inception in 1999, SunTec has served over thousands of clients including
                            several Fortune 500 companies. Based in New Delhi, the capital of India, we have access
                            to a rich talent pool of trained data entry professionals.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Data-Entry-India.com started humbly in 1999 with just 17 people. Today, we have grown
                            into a strong organization with 850+ employees, providing reliable and high-quality
                            services across industries for 25+ years.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            With state-of-the-art infrastructure and the latest technologies, we continue improving
                            efficiency, productivity, and profitability for clients around the world.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Our expertise in delivering superior data entry, data conversion, and related services
                            has made us a trusted partner for thousands of businesses globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Business Values */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                        Our Business Values
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1: Adding Value */}
                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 3v3.75M12 17.25V21M3 12h3.75M17.25 12H21" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Adding Value</h3>
                            <p className="text-gray-600">
                                Adding value to our client&apos;s businesses with consistent quality.
                            </p>
                        </div>

                        {/* Card 2: On-Time Delivery */}
                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 6v6l3 3M12 3a9 9 0 110 18 9 9 0 010-18z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">On-Time Delivery</h3>
                            <p className="text-gray-600">
                                Honoring deadlines and strictly following agreed schedules.
                            </p>
                        </div>

                        {/* Card 3: Exceed Expectations */}
                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M11.48 3.499a.563.563 0 011.04 0l2.01 5.136a.563.563 0 00.475.347l5.517.403c.55.04.774.738.356 1.108l-4.205 3.7a.563.563 0 00-.18.534l1.36 5.29c.133.52-.454.92-.92.65l-4.82-2.77a.563.563 0 00-.56 0l-4.82 2.77c-.466.27-1.053-.13-.92-.65l1.36-5.29a.563.563 0 00-.18-.534l-4.205-3.7c-.418-.37-.194-1.067.356-1.108l5.517-.403a.563.563 0 00.475-.347l2.01-5.136z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Exceed Expectations</h3>
                            <p className="text-gray-600">
                                Exceeding performance metrics and delivering superior quality.
                            </p>
                        </div>

                        {/* Card 4: Long-Term Trust */}
                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M8.5 7a4.5 4.5 0 118.997.164M18 19v-5m0 0l3 3m-3-3l-3 3M6 19v-5m0 0l-3 3m3-3l3 3M4.5 7a4.5 4.5 0 118.997.164" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Long-Term Trust</h3>
                            <p className="text-gray-600">
                                Building long-term relationships through trust & data privacy.
                            </p>
                        </div>

                    </div>
                </div>
            </section>



            {/* Offshore Dedicated Teams */}
            <section className="py-16 bg-[var(--primary-color)] text-white">
                <div className="w-full flex justify-center px-6">
                    <div className="max-w-7xl space-y-6">

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Offshore Dedicated Teams (ODT Model)
                        </h2>

                        <p className="leading-relaxed">
                            Data-Entry-India.com has successfully executed numerous projects using the
                            Offshore Dedicated Team (ODT) model, giving clients access to exclusive
                            professionals who work full-time on their projects as an extension of their office.
                        </p>

                        <p className="leading-relaxed">
                            This model helps clients save nearly one-third of operational costs,
                            eliminates micromanagement, and ensures continuity with backup resources
                            whenever needed.
                        </p>

                        <p className="leading-relaxed">
                            For more details, email us at:
                            <span className="font-semibold"> info@perfect-data-entry.com</span>
                        </p>

                    </div>
                </div>
            </section>


            {/* Business Models */}
            <section className="py-16">
                <div className="w-full flex justify-center px-6">
                    <div className="max-w-7xl w-full">

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                            Business Models
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Card 1 */}
                            <div className="border border-[var(--primary-color)]  rounded-xl p-8 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                    Time & Materials Basis
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Ideal for projects with unclear, evolving, or flexible requirements.
                                    The client pays based on actual time spent and resources used.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-[var(--primary-color)] rounded-xl p-8 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                    Fixed Cost / Offshore Dedicated Basis
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Best for long-term, full-time engagements.
                                    Clients pay a fixed monthly cost and gain full control, dedicated staffing,
                                    competitive pricing, and consistent delivery quality.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section>

                <WhyTeamSection />
            </section>

            {/* Why Choose Us */}
            <section id="contact" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Left Column - Features List */}
                        <div>
                            <ul className="space-y-4 text-gray-700 list-none">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        {/* Blue tick */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-blue-500 flex-shrink-0 mr-3 mt-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-gray-700">
                                Discover the difference Data-Entry-India.com can bring to your business.
                            </p>
                        </div>

                        {/* Right Column - Contact Form */}
                        <form className="bg-white p-8 rounded-xl shadow-md space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Take the First Step</h3>

                            <input type="text" placeholder="Your Name*" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" required />

                            <input type="email" placeholder="Your Best Email*" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" required />

                            <input type="text" placeholder="Best Contact Number*" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" required />

                            <textarea placeholder="How Can We Help You?*" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" rows={5} required />

                            <button type="submit" className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition">
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-16 text-center container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4">Set Up Your Own OFFSHORE DEDICATED TEAM</h2>
                <p className="text-gray-700 mb-6">Grow faster with an expert team that works exclusively for you.</p>

                <a
                    href="/contact-us"
                    className="px-8 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800"
                >
                    Contact Us
                </a>
            </section>

        </>
    );
}
