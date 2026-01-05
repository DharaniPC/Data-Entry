import WhyTeamSection from "../components/whyteamsection";
import Banner from "../components/banner";
import ContactForm from "../components/contacForm";

export const metadata = {
    title: "Perfect Data Entry - Your Trusted Global Data Partner Since 2015",
    description: "An Artiset Group Company | 8+ year journey, 300+ experts, and commitment to 99.95% accurate data entry, processing & analytics services. ",
};

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

const transforLeftSectionContent = [
    "8+ Years of Niche Expertise: Deep domain knowledge across e-commerce, healthcare, legal, real estate, and more.",
    "300+ Data Specialists: A scalable team of trained professionals in data entry, processing, analysis, and visualization.",
    "Proven Scale & Reliability: Successfully managed 1,132+ projects, from one-time conversions to ongoing enterprise partnerships.",
    "Technology-Driven Efficiency: We leverage the right mix of advanced software, automation, and secure cloud platforms to optimize outcomes.",
    "24/7 Dedicated Support: Around-the-clock project management and support to meet your timelines, no matter your timezone.",
    "Cost-Effective Excellence: Our offshore model delivers premium quality at up to 70% cost savings, with transparent, flexible pricing."
];

export default function AboutPage() {

    return (
        <>

            {/* Banner Section */}
            <section>
                <Banner title="India's Leading Data Support and BPO/BPM Company"
                    bannerImage="/about-us/Banner.png" 
                    
                    bannerMobImage="/about-us/Banner.png"/>
            </section>

            {/* Company Overview */}
            <section >
                <div className="w-full flex justify-center px-6 py-10 bg-gray-50">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Story: Precision, Partnership, and Progress</h2>

                        <p className="text-gray-700 leading-relaxed">
                            An Artiset Group company, founded in 2015, Perfect Data Entry began with a simple mission: to help businesses unlock the true potential of their data by removing the burden of manual, error-prone processing. What started as a dedicated team of data specialists has grown into a premier global data services partner, successfully delivering over 1,132 projects for clients worldwide.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            We understand that data isn't just numbers on a spreadsheet, it's the lifeblood of modern business. It informs strategy, drives customer engagement, and fuels growth. Yet, for many organizations, managing this critical asset is a costly and distracting challenge. That’s where we step in.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            At Perfect Data Entry, we are more than a service provider; we are an extension of your team. Over 8+ years, we have built a reputation for unwavering accuracy, relentless reliability, and a client-first partnership that transforms data from an operational headache into a definitive competitive advantage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Business Values */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                        Our Core Values: The Foundation of Every Project
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-10 h-10 text-[var(--primary-color)]">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 3v3.75M12 17.25V21M3 12h3.75M17.25 12H21" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Precision in Every Pixel</h3>
                            <p className="text-gray-600 text-sm">
                                We are obsessed with accuracy. Our rigorous multi-tier quality assurance process guarantees a 99.95% data accuracy rate on every project, because we believe even a 0.05% error is worth fixing.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-10 h-10 text-[var(--primary-color)]">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 6v6l3 3M12 3a9 9 0 110 18 9 9 0 010-18z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Partnership, Not Just Provision</h3>
                            <p className="text-gray-600 text-sm">
                                Your success is our success. We take the time to understand your unique business goals, challenges, and workflows. This client-centric approach ensures our solutions aren't just efficient, they're strategically aligned to drive your growth.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-10 h-10 text-[var(--primary-color)]">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M11.48 3.499a.563.563 0 011.04 0l2.01 5.136a.563.563 0 00.475.347l5.517.403c.55.04.774.738.356 1.108l-4.205 3.7a.563.563 0 00-.18.534l1.36 5.29c.133.52-.454.92-.92.65l-4.82-2.77a.563.563 0 00-.56 0l-4.82 2.77c-.466.27-1.053-.13-.92-.65l1.36-5.29a.563.563 0 00-.18-.534l-4.205-3.7c-.418-.37-.194-1.067.356-1.108l5.517-.403a.563.563 0 00.475-.347l2.01-5.136z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Security as a Standard</h3>
                            <p className="text-gray-600 text-sm">
                                Your data's confidentiality is non-negotiable. We operate with enterprise-grade security protocols, strict NDAs, and GDPR/CCPA compliant practices, providing you with peace of mind.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-10 h-10 text-[var(--primary-color)]">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M8.5 7a4.5 4.5 0 118.997.164M18 19v-5m0 0l3 3m-3-3l-3 3M6 19v-5m0 0l-3 3m3-3l3 3M4.5 7a4.5 4.5 0 118.997.164" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Innovation as an Imperative</h3>
                            <p className="text-gray-600 text-sm">
                                The data landscape never stands still, and neither do we. We combine seasoned expertise with advanced technology—from AI-powered OCR and automation to leading BI tools to deliver cutting-edge, scalable solutions.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="text-blue-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-10 h-10 text-[var(--primary-color)]">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M8.5 7a4.5 4.5 0 118.997.164M18 19v-5m0 0l3 3m-3-3l-3 3M6 19v-5m0 0l-3 3m3-3l3 3M4.5 7a4.5 4.5 0 118.997.164" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Integrity in Action</h3>
                            <p className="text-gray-600 text-sm">
                                We build relationships on trust, transparency, and ethical practice. We communicate clearly, meet every deadline, and stand firmly behind our work.

                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl  font-bold text-center">Why Choose Perfect Data Entry?</h2>

                        <div className="w-full flex flex-col md:flex-row gap-10">
                            <div className="w-full md:w-[50%]">

                                <ul className="space-y-4 text-gray-700 list-none">
                                    {transforLeftSectionContent.map((content, index) => (
                                        <li key={index} className="flex items-start">
                                            {/* Blue tick */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-[var(--primary-color)] flex-shrink-0 mr-3 mt-1"
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
                                            <span dangerouslySetInnerHTML={{ __html: content }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-[50%]">
                                <img src="/Why-Choose-Us.png" alt="Why US" className="w-[500px] h-auto"></img>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Business Models */}
            <section className="py-16 bg-[var(--primary-color)] text-white">
                <div className="w-full flex justify-center px-6">
                    <div className="max-w-5xl w-full">

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Commitment to You
                        </h2>
                        <p className="mb-10">We commit to being more than a vendor. We commit to:</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* Card 1 */}
                            <div className="border border-[var(--primary-color)]  rounded-xl p-8 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                    Understanding your specific business context.
                                </h3>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-[var(--primary-color)] rounded-xl p-8 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                    Delivering flawless accuracy, on time, every time.
                                </h3>
                            </div>

                            <div className="border border-[var(--primary-color)] rounded-xl p-8 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                    Protecting your data with the highest security standards.
                                </h3>
                            </div>

                            <div className="border border-[var(--primary-color)] rounded-xl p-8 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                    Enabling your team to focus on core, revenue-generating activities.
                                </h3>
                            </div>

                            <div className="border border-[var(--primary-color)] rounded-xl p-8 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                    Evolving our solutions to support your long-term growth.
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <WhyTeamSection />
            </section>

            <section id="contact" className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col gap-5">

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Left Column - Features List */}
                            <div className="flex flex-col gap-5">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900"> Ready to perfect your data? </h2>
                                <div className="text-1xl md:text-2xl text-gray-900">Your data journey is unique. Let's navigate it together. Whether you're looking to streamline operations, gain deeper insights, or build a fully outsourced data function, we have the expertise, passion, and precision to get it right.</div>
                            </div>

                            {/* Right Column - Contact Form */}
                            <div>
                                <ContactForm title="Contact Us Now to Get Started!" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}
