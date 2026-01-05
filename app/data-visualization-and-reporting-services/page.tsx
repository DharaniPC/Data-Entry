import Banner from "../components/banner";
import HighlightSection from "../components/highlightSection";
import IconGrid from "../components/iconGrid";
import ContactForm from "../components/contacForm";

export const metadata = {
    title: "Data Visualization & Reporting Services | Interactive Dashboards & BI Reports",
    description: "Transform data into actionable insights with our data visualization & reporting services. Get custom dashboards, interactive reports & BI solutions. $5/hour. Free trial.",
};

const transforLeftSectionContent = [
    "Faster, Smarter Decisions: Convert data into instant, intuitive understanding for all team members.",
    "Interactive & Real-Time Insights: Enable self-service exploration with live, interactive dashboards that update automatically.",
    "Enterprise-Grade Tools & Security: Leverage top BI platforms with robust data security and access controls.",
    "Tailored to Your Business: We don't use generic templates. Every dashboard and report is designed for your unique goals and workflow.",
    "Cost-Effective Expertise: Access elite data visualization specialists and BI developers at just $5/hour.",
    "End-to-End Support: From initial data modeling to final dashboard deployment and training."
];

const supportServiceContent = [
    {
        title: "Custom Dashboard Development",
        description: "Interactive, real-time dashboards tailored to your KPIs for at-a-glance performance monitoring across departments."
    },
    {
        title: "Interactive Reporting & BI",
        description: "Move beyond static PDFs. Create dynamic, self-service business intelligence reports that users can filter, drill down into, and explore."
    },
    {
        title: "Data Storytelling & Infographics",
        description: "Translate complex analysis into compelling visual narratives and shareable infographics for presentations, marketing, and stakeholder communication."
    },
    {
        title: "Predictive & Geospatial Visualization",
        description: "Visualize future trends with predictive analytics dashboards and map your data with geospatial visualization for location-based insights."
    },
    {
        title: "Dashboard Integration & Maintenance",
        description: "Seamlessly embed dashboards into your existing platforms (CRM, ERP) and provide ongoing support, training, and maintenance."
    },
    {
        title: "Data Modeling & Consulting",
        description: "Our data visualization consulting ensures your underlying data is clean, structured, and optimized for powerful visual storytelling."
    }
];

export default function DataVisualizationAndReportingServices() {

    return (
        <main>

            {/* Banner Section */}
            <section>
                <Banner title="Data Visualization & Reporting Services @ $5/Hour"
                    description="Start Your Free Trial Now! No Upfront Payment – Fast 24-Hour Turnaround!"
                    bannerImage="/services/data-visualization-and-reporting-services/Banner.png" />
            </section>

            <section>
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50 text-center">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Transform Complex Data into Clear, Actionable Insights</h2>

                        <p className="text-gray-700 leading-relaxed">
                            In today's data-driven landscape, spreadsheets and static reports are no longer enough. They hide the story within your numbers. Perfect Data Entry specializes in data visualization and reporting services that turn overwhelming datasets into clear, compelling, and actionable business intelligence (BI). As a leading data visualization agency, we bridge the gap between raw data and strategic decision-making, empowering your team to spot trends, track KPIs, and drive growth at a glance.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            We are more than a visualization company; we are your strategic partner in data storytelling. Using advanced tools like Tableau, Power BI, and custom solutions, our data visualization service providers create interactive dashboards, dynamic reports, and engaging infographics that make complex information instantly understandable. Whether you need real-time performance tracking, predictive analytics visualization, or executive-level reporting, we deliver clarity from chaos.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Visualization & Reporting Solutions</h2>

                        <h3 className="text-2xl font-bold mb-8">We provide end-to-end services to make your data speak clearly and persuasively.</h3>

                        <IconGrid sectionContent={supportServiceContent} />
                    </div>
                </div>
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
                    <div className="max-w-5xl space-y-6">
                        <h2 className="text-3xl md:text-4xl  font-bold text-center">Why Choose Our Visualization & Reporting Services?</h2>

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
                <HighlightSection title="Tired of Static Reports That No One Reads?"
                    description="Stop letting valuable insights get lost in spreadsheets. Outsource data visualization and reporting to us and empower your organization with the clarity needed to act decisively."
                    buttonLabel="Start Your Risk-Free Trial Now"
                    buttonLink="#contact" />

            </section>

            <section>
                <div className="w-full flex gap-10 items-center justify-center py-15">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>

                        <h3 className="text-2xl font-bold mb-8">Visualize Your Success in 3 Simple Steps</h3>

                        <div className="flex flex-row gap-8">
                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">1. Start a Conversation</h4>
                                <p>Tell us your reporting challenges and goals. We'll outline a custom data visualization strategy to meet your needs.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">2. Kick-Off in 24 Hours</h4>
                                <p>Our team of BI specialists and designers begins work within 24 hours, ensuring a swift path to your first insight.</p>
                            </div>

                            <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                                <h4 className="text-1xl md:text-2xl mb-4">3. Start Your FREE Trial</h4>
                                <p>Experience the power of well-visualized data firsthand. Test our dashboard development and reporting services with a no-obligation pilot project.</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to See Your Data in a Whole New Light?</h2>
                                <div className="text-1xl md:text-2xl text-gray-900">Book a free consultation with our data visualization consultants. Get a free pilot and discover how intuitive dashboards can transform your decision-making.</div>
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