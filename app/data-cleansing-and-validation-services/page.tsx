import Banner from "../components/banner";
import HighlightSection from "../components/highlightSection";
import IconGrid from "../components/iconGrid";
import ContactForm from "../components/contacForm";

export const metadata = {
    title: "Data Cleansing & Validation Services | 99.95% Accuracy Guaranteed",
    description: "Outsource data cleansing & validation for flawless databases. We remove duplicates, correct errors & verify B2B, CRM, e-commerce data. $5/hour. Free pilot.",
};

const transforLeftSectionContent = [
    "Guaranteed 99.95% Accuracy: Our multi-tier review ensures near-perfect results.",
    "Real-Time Validation Tools: We use premium APIs and tools for instant verification.",
    "Industry-Specific Expertise: Tailored processes for healthcare, legal, e-commerce, and B2B data.",
    "Secure & Compliant: Your data is handled with strict security protocols and NDAs.",
    "Fast, Scalable Delivery: 24-hour kick-off and scalable teams for projects of any size.",
    "Transparent Pricing: High-quality services at a flat $5/hour rate."
];

const supportServiceContent = [
    {
        title: "Duplicate Removal & Data Deduplication",
        description: "Identify and merge or purge redundant records across your entire database to eliminate waste and confusion."
    },
    {
        title: "Error Correction & Format Standardization",
        description: "Fix inconsistencies, typos, and formatting errors (dates, addresses, phone numbers) for uniform, usable data."
    },
    {
        title: "Comprehensive Data Validation",
        description: "Verify the accuracy and authenticity of emails, phone numbers, addresses, and business details using real-time verification tools and business verification services."
    },
    {
        title: "CRM & Contact Data Cleansing",
        description: "Specialized CRM data cleansing services to update, correct, and enrich contact records, boosting sales and marketing ROI."
    },
    {
        title: "B2B & Lead Validation",
        description: "Cleanse and verify B2B company data and marketing leads to ensure your outreach hits real, relevant, and interested targets."
    },
    {
        title: "E-commerce & Product Data Cleansing",
        description: "Standardize and correct product titles, descriptions, SKUs, and attributes across platforms like Amazon and Shopify."
    }
];

export default function DataCleansingAndValidationServices() {

    return (
        <main>

            {/* Banner Section */}
            <section>
                <Banner title="Data Cleansing & Validation Services @ $5/Hour"
                    description="Start Your Free Trial Now! No Upfront Payment – Fast 24-Hour Turnaround!"
                    bannerImage="/contact-us/Banner.jpg" />
            </section>

            <section>
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
                    <div className="max-w-7xl space-y-6">
                        <h2 className="text-3xl font-bold">The Foundation of Trustworthy Data: Clean, Verified, and Audit-Ready</h2>
                        <h3 className="text-2xl font-bold">Don't let dirty data drain your resources. Partner with us to build a foundation of data you can trust.</h3>

                        <p className="text-gray-700 leading-relaxed">
                            Inaccurate, duplicate, and unverified data is more than a nuisance, it corrupts decision-making, wastes marketing spend, and erodes customer trust. Perfect Data Entry provides the definitive solution. Our data cleansing and validation services are a combined force that scrubs your databases to spotless perfection and then certifies each entry's accuracy against authoritative sources.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            We go beyond simple de-duplication. Our multi-stage process delivers data integrity and reliability you can bank on. Whether it’s CRM data cleansing to revive your sales pipeline, B2B data validation to ensure target accuracy, or e-commerce product data cleansing for flawless catalogs, we ensure your information is audit-ready and actionable.
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
                    <div className="max-w-7xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our End-to-End Data Quality Solutions</h2>

                        <p className="mb-8">We tackle every aspect of data corruption to deliver pristine databases.</p>

                        <IconGrid sectionContent={supportServiceContent} />
                    </div>
                </div>
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
                    <div className="max-w-7xl space-y-6">
                        <h2 className="text-3xl font-bold text-center">Why Perfect Data Entry is Your Data Quality Partner</h2>

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
                                <img src="/contact-us/Banner.jpg" alt="Why US" className="w-[500px] h-auto"></img>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section>
                <HighlightSection title="Is Poor Data Quality Costing You Sales and Credibility?"
                    description="Stop wasting time and money on bad data. Outsource data cleansing and validation to our experts. Ensure every decision is informed, every campaign is targeted, and every customer record is reliable."
                    buttonLabel="Start Your Risk-Free Trial Now!"
                    buttonLink="#contact" />

            </section>

            <section>
                <div className="w-full flex gap-10 items-center justify-center py-15">
                    <div className="max-w-7xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>

                        <p className="mb-8">Achieve Flawless Data in 3 Simple Steps</p>

                        <div className="flex flex-row gap-8">
                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h3 className="text-2xl md:text-3xl mb-4">Start a Conversation</h3>
                                <p>Share your data quality challenges. We analyze a sample to identify issues (duplicates, errors, invalid entries) and propose a targeted cleansing and validation strategy.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h3 className="text-2xl md:text-3xl mb-4">Kick-Off in 24 Hours</h3>
                                <p>We onboard and begin the cleansing process on your sample dataset within 24 hours. See immediate improvements.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h3 className="text-2xl md:text-3xl mb-4">Start Your FREE Trial</h3>
                                <p>Experience the transformation with a no-obligation pilot. Receive a cleansed and validated sample to review before committing to the full project.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col gap-5">

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Left Column - Features List */}
                            <div className="flex flex-col gap-5">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to Build a Database You Can Trust?</h2>
                                <div className="text-1xl md:text-2xl text-gray-900">Book a free consultation with our data quality specialists. Get a free pilot to see how clean, validated data can boost your efficiency and ROI.</div>
                            </div>

                            {/* Right Column - Contact Form */}
                            <div>
                                <ContactForm title="Contact Us Now for a Cleaner Database!" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>

    );

}