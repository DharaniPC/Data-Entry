import Banner from "../components/banner";
import HighlightSection from "../components/highlightSection";
import IconGrid from "../components/iconGrid";
import ContactForm from "../components/contacForm";

export const metadata = {
    title: "Professional Data Entry & Capture Services | $5/Hr, 24hr TAT, Free Trial",
    description: "Outsource data entry & data capture to experts. Get manual & OCR services, form processing, PDF to Excel, and e-commerce data entry at $5/hour. 99.95% accuracy.",
};

const transforLeftSectionContent = [
    "Guaranteed 99.95% Accuracy: Multi-layer QA processes.",
    "24-Hour Turnaround Time (TAT): Fast, scalable project kick-off.",
    "Enterprise-Grade Security: ISO-certified protocols & strict NDAs.",
    "Technology-Driven: Leveraging advanced OCR, AI, and cloud-based platforms.",
    "Cost-Effective Outsourcing: Transparent pricing at just $5/hour.",
    "24/7 Expert Support: Dedicated account management."
];

const supportServiceContent = [
    {
        title: "Document & Form Processing ",
        description: "Expert PDF data entry, image to Excel conversion, and automated form & invoice processing to digitize your paperwork."
    },
    {
        title: "E-Commerce & Catalog Management",
        description: "Accurate product data entry and catalog management for platforms like Amazon, Shopify, Magento, and WooCommerce."
    },
    {
        title: "High-Volume & Bulk Data Entry",
        description: "Reliable manual data entry services for large-scale projects, surveys, and database building with guaranteed turnaround."
    },
    {
        title: "Automated Data Capture (OCR & More)",
        description: "Advanced OCR data capture, barcode/QR code scanning, and web data scraping to extract information automatically and efficiently."
    },
    {
        title: "Specialized Industry Data Handling",
        description: "Secure and compliant data management for medical data entry, legal documents, CRM/Salesforce entry, and mortgage processing."
    },
    {
        title: "Custom Capture & Integration",
        description: "Tailored data capture solutions that seamlessly integrate cleansed data into your existing systems (ERP, CRM, databases)."
    }
];

export default function DataEntryAndCaptureServices() {

    return (
        <main>

            {/* Banner Section */}
            <section>
                <Banner title="Data Entry & Capture Services @ $5/Hour"
                    description="Start Your Free Trial Now! No Upfront Payment – Fast 24-Hour Turnaround!"
                    bannerImage="/services/data-entry-and-capture-services/Banner.png" 
                    bannerMobImage="/services/data-entry-and-capture-services/MobileBanner.png"/>
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50 text-center">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Precision at Your Fingertips</h2>
                        <h3 className="text-base md:text-2xl font-bold">Your Partner for End-to-End Data Management</h3>

                        <p className="text-gray-700 leading-relaxed">
                            In today's fast-paced business world, managing vast amounts of information is a critical challenge. At Perfect Data Entry, we eliminate this burden with our comprehensive data entry and data capture outsourcing services. We combine manual data entry expertise with advanced OCR and automated data capture technology to transform any raw data source - paper, PDFs, images, web forms - into clean, structured, and actionable digital assets. Whether you need high-volume data processing, e-commerce product entry, or specialized document digitization, we deliver a blend of speed, accuracy, and affordability that sets us apart.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Finding secure and affordable data entry services that don’t compromise on quality is no longer a dilemma. As a leading offshore data entry company, we serve diverse sectors with specialized solutions for medical, legal, real estate, and insurance data entry. Your sensitive information is protected with bank-grade security, NDAs, and GDPR/CCPA compliance.
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
                <div className="w-full flex gap-10 justify-center py-15 px-6">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Integrated Data Entry & Capture Solutions</h2>

                        <h3 className="text-base md:text-2xl font-bold mb-4">We provide a full spectrum of services to turn data chaos into clarity</h3>

                        <IconGrid sectionContent={supportServiceContent} />
                    </div>
                </div>
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose Us as Your Data Entry & Capture Partner?</h2>

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

            <section>
                <HighlightSection title="Tired of Data Errors and Delays?"
                    description="Stop struggling with disorganized data. Outsource data entry and capture to our experts and transform your operations with precision and efficiency. Focus on growth while we handle your data."
                    buttonLabel="Start Your Risk-Free Trial Now!"
                    buttonLink="#contact" />

            </section>

            <section>
                <div className="w-full flex gap-10 items-center justify-center py-15 px-6">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>

                        <h3 className="text-base md:text-2xl font-bold mb-4">Simplify Your Data Management in 3 Steps</h3>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">1. Start a Conversation</h4>
                                <p>Tell us about your project. We’ll analyze your needs for data entry or data capture services and outline a custom solution.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">2. Kick-Off in 24 Hours</h4>
                                <p>Our dedicated team onboard and begins your project within 24 hours. No delays.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">3. Start Your FREE Trial</h4>
                                <p>Experience our quality, accuracy, and speed firsthand with a no-obligation pilot project. See the results before you commit.</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to Transform Your Data Workflow?</h2>
                                <div className="text-1xl md:text-2xl text-gray-900">Book a free consultation with India’s leading data entry services provider. Get a free pilot project and see how we can reduce your costs by up to 60%.</div>
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