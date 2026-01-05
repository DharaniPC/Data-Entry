import Banner from "../components/banner";
import HighlightSection from "../components/highlightSection";
import IconGrid from "../components/iconGrid";
import ContactForm from "../components/contacForm";

export const metadata = {
    title: "Data Processing & Integration Services | Streamline & Unify Your Data",
    description: "Outsource data processing & integration. We clean, transform & unify your data from all sources into a single, actionable system. $5/hour. 24-hr start. ",
};

const transforLeftSectionContent = [
    "End-to-End Solution: From processing to integration, we handle the entire pipeline.",
    "Guaranteed Accuracy & Security: Rigorous QA and GDPR/CCPA-compliant data security protocols.",
    "24-Hour Project Kick-Off: Rapid deployment to accelerate your time-to-insight.",
    "Advanced Technology Stack: Expertise in ETL tools, cloud platforms, and API frameworks.",
    "Cost-Effective Outsourcing: Premium services at just $5/hour.",
    "Dedicated Consulting & Support: Strategic guidance and 24/7 support from expert data integration consultants."
];

const supportServiceContent = [
    {
        title: "Data Cleansing & Validation ",
        description: "Remove errors, duplicates, and inconsistencies to ensure data integrity and reliability for confident decision-making."
    },
    {
        title: "ETL & Data Transformation",
        description: "Extract, Transform, and Load (ETL) data from various sources into a unified format, ready for warehousing, analytics, or migration."
    },
    {
        title: "Cloud & API Integration",
        description: "Achieve seamless cloud data integration (AWS, Azure) and API integration services to connect your SaaS platforms and enable real-time data flow."
    },
    {
        title: "Database Management & Warehousing",
        description: "Design, manage, and maintain robust databases. Consolidate data into a centralized data warehouse for powerful business intelligence."
    },
    {
        title: "Data Migration Services",
        description: "Securely transfer data between systems or to the cloud with zero loss, preserving integrity and ensuring business continuity."
    },
    {
        title: "Master Data Management (MDM)",
        description: "Establish a single, authoritative source for critical business data (customers, products) to eliminate redundancy and ensure uniformity across all platforms."
    }
];

export default function DataProcessingAndIntegerationServices() {

    return (
        <main>

            {/* Banner Section */}
            <section>
                <Banner title="Data Processing & Integration Services @ $5/Hour"
                    description="Start Your Free Trial Now! No Upfront Payment – Fast 24-Hour Turnaround!"
                    bannerImage="/services/data-processing-and-integration-services/Banner.png" />
            </section>

            <section>
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50 text-center">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Transform Data Chaos into a Cohesive Business Asset</h2>
                        <h3 className="text-2xl font-bold">End-to-End Data Processing & Integration for Real Business Clarity</h3>

                        <p className="text-gray-700 leading-relaxed">
                            In today's data-driven landscape, fragmented information across disparate systems creates inefficiencies and blindsides decision-making. Perfect Data Entry is your strategic partner to eliminate these bottlenecks. We provide end-to-end data processing and integration services designed to cleanse, standardize, and unify your data from all sources - databases, CRM, ERP, cloud apps, and spreadsheets into a single, reliable, and actionable system.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Our expert data processing ensures your information is accurate and analysis-ready, while our seamless data integration creates a "single source of truth," breaking down silos and empowering your team with real-time insights. From high-volume batch processing to complex cloud data integration, we deliver tailored solutions that align with global standards and your unique business goals.
                        </p>
                        <a href="/contact-us">
                            <button className="cursor-pointer px-8 py-3 bg-[var(--primary-color)] text-white border-2 border-[var(--primary-color)] rounded-lg font-semibold hover:bg-transparent hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition">
                                Request Your Custom Proposal!
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full flex gap-10 justify-center py-15">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Data Processing & Integration Solutions</h2>

                        <h3 className="text-2xl font-bold mb-8">We turn disparate data into your most valuable strategic tool.</h3>

                        <IconGrid sectionContent={supportServiceContent} />
                    </div>
                </div>
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl  font-bold text-center">Why Choose Our Data Processing & Integration Services?</h2>

                        <div className="w-full flex flex-row gap-10">
                            <div className="w-[50%]">

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
                            <div className="w-[50%]">
                                <img src="/Why-Choose-Us.png" alt="Why US" className="w-[500px] h-auto"></img>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section>
                <HighlightSection title="Struggling with Data Silos and Inconsistencies?"
                    description="Stop letting disconnected data hinder your growth. Outsource data processing and integration to our experts and unlock streamlined workflows, enhanced reporting, and data-driven agility."
                    buttonLabel="Start Your Risk-Free Trial Now"
                    buttonLink="#contact" />

            </section>

            <section>
                <div className="w-full flex gap-10 items-center justify-center py-15">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>

                        <h3 className="text-2xl font-bold mb-8">Simplify Your Data Ecosystem in 3 Easy Steps</h3>

                        <div className="flex flex-row gap-8">
                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">1. Start a Conversation</h4>
                                <p>Brief us on your data challenges. We analyze your systems and objectives to design a custom data processing and integration strategy.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">2. Kick-Off in 24 Hours</h4>
                                <p>Our team onboard and initiates your project within 24 hours, ensuring immediate progress without downtime.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">3. Start Your FREE Trial</h4>
                                <p>Experience our expertise firsthand with a no-obligation pilot. See the quality and impact of a unified data environment before you commit.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col gap-5">

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Left Column - Features List */}
                            <div className="flex flex-col gap-5">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to Unify Your Data and Drive Smarter Decisions?</h2>
                                <div className="text-1xl md:text-2xl text-gray-900">Book a free consultation with our data integration consultants. Get a free pilot project and see how we can streamline your operations and reveal powerful insights.</div>
                            </div>

                            {/* Right Column - Contact Form */}
                            <div>
                                <ContactForm title="Contact Us Now to Get Started!" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>

    );

}