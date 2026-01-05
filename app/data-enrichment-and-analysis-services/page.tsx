import Banner from "../components/banner";
import HighlightSection from "../components/highlightSection";
import IconGrid from "../components/iconGrid";
import ContactForm from "../components/contacForm";

export const metadata = {
    title: "Data Enrichment & Analysis Services | Actionable Insights from Raw Data",
    description: "Outsource data enrichment & analysis services to experts. We enhance, analyze & transform your raw data into actionable intelligence for business growth. $5/hour. Free trial.",
};

const transforLeftSectionContent = [
    "<b>Deeper Customer Insights:</b> Build rich 360-degree profiles for hyper-targeted marketing and sales.",
    "<b>Actionable Business Intelligence:</b> Move from descriptive reports to predictive and prescriptive insights that drive strategy.",
    "<b>Enhanced Data Quality & Value:</b> Clean, complete, and standardize your data, increasing its reliability and utility across all departments.",
    "<b>Cost-Effective Expertise:</b> Access skilled data analysts and enrichment specialists at a fraction of the cost of an in-house team.",
    "<b>Scalable & Secure Processes:</b> Our secure data handling and scalable solutions grow with your business needs.",
    "<b>Faster Time-to-Insight:</b> Our streamlined processes deliver enriched, analyzed data with a 24-hour project kick-off."
];

const supportServiceContent = [
    {
        title: "B2B & CRM Data Enrichment",
        description: "Enhance lead quality and sales intelligence with company firmographics, contact enrichment, and Salesforce/HubSpot CRM data cleansing."
    },
    {
        title: "Predictive & Diagnostic Analytics",
        description: "Go beyond hindsight. Use predictive modeling to forecast trends and diagnostic analysis to uncover the root causes of business outcomes."
    },
    {
        title: "Product & Customer Data Enhancement",
        description: "Boost e-commerce performance with product feed enrichment, detailed attribute tagging, and demographic/behavioral customer profiling."
    },
    {
        title: "Reporting",
        description: "Understand past performance. We provide clear descriptive analysis, KPI tracking, and automated dashboards for a solid performance baseline."
    },
    {
        title: "Analysis",
        description: "Process large, complex datasets (big data analytics) and gauge public or customer opinion (sentiment analysis) from reviews and social media."
    },
    {
        title: "Modeling",
        description: "Get tailored data science services, from statistical analysis and AI integration to prescriptive analytics that recommend specific actions."
    }
];

export default function DataEnrichmentAndAnalysisServices() {

    return (
        <main>

            {/* Banner Section */}
            <section>
                <Banner title="Data Enrichment & Analysis Services @ $5/Hour"
                    description="Start Your Free Trial Now! No Upfront Payment – Fast 24-Hour Turnaround!"
                    bannerImage="/services/data-enrichment-and-analysis-services/Banner.png" 
                    bannerMobImage="/services/data-enrichment-and-analysis-services/MobileBanner.png"/>
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50 text-center">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">From Raw Data to Strategic Intelligence: Power Your Decisions</h2>
                        <p className="text-gray-700 leading-relaxed">In the competitive digital marketplace, outdated and superficial data is a liability. Perfect Data Entry transforms it into your greatest asset. We combine advanced data enrichment services with in-depth data analysis to convert incomplete, raw information into a rich, actionable intelligence engine. Our expertise bridges the gap between having data and truly understanding it, empowering you to predict trends, personalize customer engagement, and drive measurable growth.</p>

                        <p className="text-gray-700 leading-relaxed">
                            Whether you need to enhance CRM leads with B2B data enrichment, gain market clarity through predictive analytics, or unlock the story within your datasets, we provide a seamless, end-to-end solution. Outsourcing data enrichment and analysis to our experts means gaining a strategic partner dedicated to refining your information and revealing the insights that fuel smarter business decisions.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Integrated Data Enrichment & Analysis Solutions</h2>

                        <h3 className="text-base md:text-2xl font-bold mb-8">We turn data gaps into opportunities and numbers into narratives.</h3>

                        <IconGrid sectionContent={supportServiceContent} />
                    </div>
                </div>
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose Our Enrichment & Analysis Services?</h2>

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
                <HighlightSection title="Are You Making Decisions Based on Incomplete or Surface-Level Data?"
                    description="Stop guessing and start knowing. Let us enhance your data's depth and extract the strategic intelligence hidden within it."
                    buttonLabel="Start Your Risk-Free Trial Now!"
                    buttonLink="#contact" />

            </section>

            <section>
                <div className="w-full flex gap-10 items-center justify-center py-15 px-6">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>

                        <h3 className="text-base md:text-2xl font-bold mb-8">Your Path to Data-Driven Clarity in 3 Steps</h3>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">1. Start a Conversation</h4>
                                <p>Discuss your goals and data challenges. We'll design a tailored plan for data enrichment and business analysis.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">2. Kick-Off in 24 Hours</h4>
                                <p>We launch your project within 24 hours, assembling the right specialists and tools to begin immediately.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">3. Start Your FREE Trial</h4>
                                <p>Experience the transformative power of enriched insights firsthand with a no-obligation pilot project. See the value before you commit.</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to Transform Data into Your Competitive Advantage?</h2>
                                <div className="text-1xl md:text-2xl text-gray-900">Book a free consultation with our data analytics consultants. Get a free pilot project and discover the strategic insights waiting in your data.</div>
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