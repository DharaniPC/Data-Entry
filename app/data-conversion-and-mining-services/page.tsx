import Banner from "../components/banner";
import HighlightSection from "../components/highlightSection";
import IconGrid from "../components/iconGrid";
import ContactForm from "../components/contacForm";

export const metadata = {
    title: "Data Conversion & Mining Services | Unlock Hidden Insights",
    description: "Expert data conversion (PDF, XML, EHR) & predictive data mining services. Transform formats & uncover patterns for better decisions. $5/hour. Free trial.",
};

const transforLeftSectionContent = [
    "<b>Dual Expertise:</b> One-stop for both data format conversion and deep-dive data analysis.",
    "<b>Accuracy Guaranteed:</b> Meticulous processes ensure integrity from conversion through to insight discovery.",
    "<b>Advanced Technology:</b> Use of leading ETL tools, AI, and machine learning algorithms for mining.",
    "<b>Industry Specialization:</b> Proven experience in healthcare (EHR), finance, retail, and more.",
    "<b>Fast Turnaround:</b> 24-hour project kick-off and scalable resources for large volumes.",
    "<b>Secure & Confidential:</b> Enterprise-grade security with full compliance (HIPAA, GDPR)."
];

const dataConversionServiceContent = [
    {
        title: "Document & Format Conversion",
        description: "Specialized PDF conversion, XML conversion services, Word/Excel conversion, and eBook conversion."
    },
    {
        title: "Healthcare Data Migration",
        description: "Secure and accurate EHR conversion and EMR data conversion for seamless digital transitions."
    },
    {
        title: "Database & System Conversion",
        description: "Flawless database migration and legacy system data conversion to modern platforms."
    },
    {
        title: "Industry-Specific Conversion",
        description: "CAD file conversion, financial data conversion, and batch data conversion for large-scale projects."
    },
    {
        title: "Digital Archiving",
        description: "Comprehensive document digitization and scanning services to eliminate paper clutter."
    }
];

const dataMiningServiceContent = [
    {
        title: "Predictive Analytics & Modeling",
        description: "Forecast trends and behaviors to inform strategy and reduce risk."
    },
    {
        title: "Pattern Recognition & Clustering",
        description: "Identify hidden groupings and relationships within customer, sales, or operational data."
    },
    {
        title: "Sentiment & Text Analysis",
        description: "Analyze customer feedback, reviews, and social media with text mining and sentiment analysis."
    },
    {
        title: "Anomaly Detection",
        description: "Pinpoint fraud, errors, or unusual patterns in transactional or system data."
    },
    {
        title: "Web & Social Media Mining",
        description: "Extract competitive intelligence and market trends from websites and social media data mining."
    },
    {
        title: "Classification & Regression",
        description: "Categorize data and understand variable impacts for sharper segmentation and targeting."
    }
];

export default function DataConversionAndMiningServices() {

    return (
        <main>

            {/* Banner Section */}
            <section>
                <Banner title="Data Conversion & Mining Services @ $5/Hour"
                    description="Start Your Free Trial Now! No Upfront Payment – Fast 24-Hour Turnaround!"
                    bannerImage="/services/data-conversion-and-mining-services/Banner.png" />
            </section>

            <section>
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50 text-center">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Unlock the True Value Hidden in Your Data</h2>
                        <h3 className="text-2xl font-bold">Convert, Analyze, and Elevate Your Data for Competitive Advantage.</h3>

                        <p className="text-gray-700 leading-relaxed">
                            In today's digital landscape, data is your most valuable asset—but only if it's usable and insightful. Perfect Data Entry bridges the gap between raw information and strategic advantage. We combine precision data conversion services with advanced predictive data mining solutions to transform your unstructured, incompatible, or legacy data into a clear, actionable resource.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Whether you need to convert PDF to Excel, migrate complex EHR/EMR systems, or mine customer data for hidden patterns, our expertise turns data challenges into competitive opportunities. As a leading data mining and conversion company, we ensure your information is not just transferred but transformed and analyzed to fuel growth and innovation.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Integrated Data Transformation & Insight Solutions</h2>

                        <h3 className="text-2xl font-bold mb-8">Transformative Data Mining & Conversion for Business Growth</h3>

                        <div className="flex flex-col gap-10 text-left">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Expert Data Conversion Services</h3>

                                <p className="mb-4">Make your data universally accessible and functional.</p>

                                <IconGrid sectionContent={dataConversionServiceContent} />
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Strategic Data Mining Services</h3>

                                <p className="mb-4">Uncover patterns, trends, and predictions buried in your data.</p>

                                <IconGrid sectionContent={dataMiningServiceContent} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-center">Why Partner with Us for Data Conversion & Mining?</h2>

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
                <HighlightSection title="Ready to Transform Data into a Decision-Making Powerhouse?"
                    description="Stop letting valuable insights sit idle in incompatible formats or untapped datasets. Outsource data conversion and mining to uncover the intelligence that drives revenue and efficiency."
                    buttonLabel="Start Your Risk-Free Trial Now!"
                    buttonLink="#contact" />

            </section>

            <section>
                <div className="w-full flex gap-10 items-center justify-center py-15">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>

                        <h3 className="text-2xl font-bold mb-8">Your Path to Actionable Data in 3 Simple Steps</h3>

                        <div className="flex flex-row gap-8">
                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">1. Start a Conversation</h4>
                                <p>Discuss your goals, whether it's legacy data conversion or customer behavior mining. We'll map a solution.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">2. Kick-Off in 24 Hours</h4>
                                <p>Our team of conversion specialists and data scientists mobilizes within a day to begin your project.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">3. Start Your FREE Trial</h4>
                                <p>Test our capabilities with a no-obligation pilot. Experience the quality of our conversion and the depth of our mining insights firsthand.</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Unlock Patterns, Predict Trends, and Convert Challenges into Growth.</h2>
                                <div className="text-1xl md:text-2xl text-gray-900">Book a free consultation with our experts. Get a free trial project to see how our data conversion and mining services can revolutionize your strategy.</div>
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