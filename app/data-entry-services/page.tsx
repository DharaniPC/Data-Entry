import Banner from "../components/banner";
import HighlightSection from "../components/highlightSection";
import IconGrid from "../components/iconGrid";
import Testimonials from "../components/testimonial";
import ContactForm from "../components/contacForm";

const transforLeftSectionContent = [
    "<b>Lead Research and Identification:</b> Utilize advanced tools and techniques to find potential leads that match the client’s ideal customer profile, ensuring a higher likelihood of conversion.",
    "<b>Lead Scoring and Prioritization:</b> Develop criteria to score leads based on their likelihood to convert, helping businesses focus their efforts on the most promising prospects.",
    "<b>Content Creation for Lead Generation:</b> Create targeted content designed to attract and engage potential leads, including blog posts, whitepapers, infographics, and videos relevant to the client’s industry.",
    "<b>Email Campaign Management:</b> Design and execute email marketing campaigns that nurture leads through the sales funnel, from initial contact to conversion, including personalized follow-ups.",
    "<b>Social Media Lead Generation:</b> Leverage social media platforms to identify and engage with potential leads, using targeted ads, posts, and direct messaging strategies.",
    "<b>Landing Page and Conversion Rate Optimization:</b> Optimize web pages designed to capture lead information, ensuring they’re compelling, user-friendly, and optimized for conversion."
];

const transforRightSectionContent = [
    "<b>CRM Integration and Management:</b> Integrate lead generation activities with client’s Customer Relationship Management (CRM) systems, ensuring seamless tracking and management of lead data.",
    "<b>Analytics and Reporting:</b> Provide detailed analytics and reports on lead generation campaigns, offering insights into performance and areas for improvement.",
    "<b>Chatbot Deployment for Lead Capture:</b> Set up and manage intelligent chatbots on websites or social media platforms to engage visitors and capture lead information around the clock.",
    "<b>PPC Campaign Management:</b> Manage and optimize PPC campaigns on platforms like Google Ads and Bing Ads, targeting specific keywords related to the client’s products or services to generate high-quality leads.",
    "<b>Lead Nurturing Campaigns:</b> Develop and implement strategies to maintain interest and engagement with leads until they are ready to make a purchase decision.",
    "<b>SEO Strategies for Lead Generation:</b> Apply search engine optimization techniques to improve the visibility of the client’s website and content in search engine results, attracting organic leads."
];

const supportServiceContent = [
    {
        title: "Customized Strategies",
        description: "Perfect Virtual Team’s lead generation virtual assistant tailors strategies to your specific business needs, ensuring that every campaign delivers high-quality leads that are more likely to convert."
    },
    {
        title: "Advanced Analytics ",
        description: "With our advanced analytics services, Perfect Virtual Team provides actionable insights, allowing you to refine your lead generation campaigns for better performance and higher ROI."
    },
    {
        title: "Integrated Marketing & Leads",
        description: "Our seamless integration of digital marketing services with lead generation activities ensures that your business not only attracts quality leads but also nurtures them effectively through email marketing, social media marketing, and SEO efforts."
    }
];

const testimonialData = [
    {
        content: "I was drowning in emails and admin tasks before I found Perfect Virtual Team. Their virtual administrative assistant services freed up so much of my time, allowing me to focus on growing my business. Absolute lifesavers!",
        author: "David Wells",
        rating: 4.8,
        votes: 12,
    },
    {
        content: "Perfect Virtual Team’s expertise in Pay-Per-Click and digital marketing services has been invaluable. They’ve helped us achieve remarkable ROI on our campaigns. If you’re looking to enhance your online presence, look no further.",
        author: "Jessica Robles",
        rating: 4.8,
        votes: 5,
    },
    {
        content: "As a non-profit, every penny counts. The team at Perfect Virtual Team understood that from day one, providing us with cost-effective virtual assistant office support that really made a difference. Their flexibility and commitment to our cause were beyond what we expected.",
        author: "Frances Stephens",
        rating: 4.8,
        votes: 5,
    }
];


export default function DataEntryServices() {

    return (
        <main>

            {/* Banner Section */}
            <section>
                <Banner title="Effortless Data Entry Services 
                           Start Your Free Trial Now!"
                    description="No Upfront Payment – Fast 24 hours Turnaround!"
                    bannerImage="/contact-us/Banner.jpg" />
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
                    <div className="max-w-7xl space-y-6">
                        <h2 className="text-3xl font-bold">Elevate Your Sales with Our Expert Lead Generation Virtual Assistant</h2>

                        <p className="text-gray-700 leading-relaxed">
                            In today’s competitive market, businesses of all sizes face the challenge of providing exceptional customer support. Perfect Virtual Team offers global call center solutions, including both inbound call center services and outbound call center solutions, tailored to meet your unique needs. Whether you’re looking for call center outsourcing to manage high call volumes or specialized IT call center support, our call center in India stands ready to deliver quality and efficiency.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Small businesses can benefit from our affordable call center services, designed specifically as call center solutions for small businesses. If you’re seeking versatility, our inbound outbound call center offers seamless communication with your customers. For those looking to outsource call center services, our call center outsourcing companies provide reliability and expertise.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            From a sales call center to telemarketing call center solutions, Perfect Virtual Team is your go-to call center company in the USA and globally. With 24/7 call center availability, we ensure your customers always have someone to turn to. Experience the Perfect Virtual Team difference with our call center services provider network, and explore how our QA in call center practices, combined with our outsourced call center services, can elevate your customer experience.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <HighlightSection title="Skyrocket Your Sales With Custom Lead Generation Strategies <br> Start Your Free Trial Now!"
                    description="Leverage Perfect Virtual Team's expertise in crafting tailored lead generation strategies that fill your funnel with high-quality, convertible leads. Our specialized focus on digital marketing and SEO optimization directly addresses your sales challenges."
                    buttonLabel="Request Free Trial Today!"
                    buttonLink="#contact" />
            </section>

            <section >
                <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
                    <div className="max-w-7xl space-y-6">
                        <h2 className="text-3xl font-bold">Transform Your Back Office with Virtual Assistant for Lead Generation</h2>

                        <p className="text-gray-700 leading-relaxed">
                            Empower your business by leveraging our virtual assistant for lead generation, a service designed to enhance your back-office efficiency. By targeting and nurturing high-quality leads, our specialized virtual assistants boost your sales pipeline, allowing you to focus on growing your business with confidence.
                        </p>
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
                                <ul className="space-y-4 text-gray-700 list-none">
                                    {transforRightSectionContent.map((content, index) => (
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

                        </div>

                    </div>
                </div>
            </section>

            <section>
                <HighlightSection title="Boost Your Conversion Rates: <br>Experience Our Lead Generation Virtual Assistant Services Today!"
                    description="Unlock higher conversion rates with Perfect Virtual Team's lead generation services, where our custom strategies and digital marketing expertise meet your business's core challenges head-on. Transform how you attract & secure ideal customers in today's competitive landscape."
                    buttonLabel="Get Your Free Quote Now!"
                    buttonLink="#contact" />

            </section>

            <section>
                <div className="w-full flex gap-10 justify-center py-15">
                    <div className="max-w-7xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Maximize Your Market Impact with Tailored Lead Generation Strategies</h2>

                        <p className="mb-8">Perfect Virtual Team’s lead generation virtual assistants craft strategies specifically designed to meet your business’s unique needs, ensuring your marketing efforts reach the right audience effectively. By focusing on high-quality lead generation and SEO optimization, we solve the challenge of attracting and converting your ideal customers, boosting your sales and market presence.</p>

                        <IconGrid sectionContent={supportServiceContent} />
                    </div>
                </div>
            </section>

            <section>
                <HighlightSection title="Need More Qualified Leads? Let Our Virtual Assistants Craft Your Winning Strategy – Call Now!"
                    description="Elevate your business with Perfect Virtual Team, where our lead generation virtual assistants leverage digital marketing strategies to secure qualified leads. Experience targeted engagement that bridges the gap to your ideal audience, amplifying impact."
                    buttonLabel="Start Your Free Trial Now!"
                    buttonLink="/contact-us" />

            </section>

            <section id="contact" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Redefine Your Sales Strategy with Precision Lead Generation Virtual Assistance</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Left Column - Features List */}
                            <div className="flex flex-col gap-5">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Start a Conversation</h3>
                                <p>This initial step invites potential clients to directly dialogue with us, allowing us to understand your specific needs for virtual assistant office support. It’s an opportunity to discuss your back office challenges and how our services can be tailored to address them.</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Kick-Off in 24 Hours</h3>
                                <p>Once we’ve identified your requirements, our virtual administrative assistant services are quick to mobilize, ensuring a seamless setup process that gets your services up and running within 24 hours. This fast turnaround is pivotal for businesses looking to rapidly enhance their operational efficiency.</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Start FREE Trial</h3>
                                <p>We’re confident in the value our virtual assistant for back office services provides, which is why we offer a free trial. This no-commitment trial allows you to experience our services firsthand, demonstrating our capability to transform your back office operations before making any financial commitment.</p>
                            </div>

                            {/* Right Column - Contact Form */}
                            <div>
                                <ContactForm />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <Testimonials testimonials={testimonialData} />
            </section>
        </main>

    );

}