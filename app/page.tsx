import WhyTeamSection from "./components/whyteamsection";
import Banner from "./components/banner";
import HighlightSection from "./components/highlightSection";
import ContactForm from "./components/contacForm";
import IconGrid from "./components/iconGrid";

const serviceContent = [
  {
    title: "Data Entry & Capture Services ",
    description: "We convert raw data from any source (paper, PDF, images) into clean, structured digital assets using manual and OCR data entry services, ensuring high accuracy and completeness."
  },
  {
    title: "Data Processing & Integration Services",
    description: "We organize and structure your data, then integrate it seamlessly with your existing platforms (CRM/ERP) to create a unified, accessible system for comprehensive business insights."
  },
  {
    title: "Data Cleansing & Validation Services",
    description: "We ensure data integrity by removing errors, duplicates, and inconsistencies. Our cleansing and validation deliver audit-ready, reliable datasets for confident decision-making."
  },
  {
    title: "Data Conversion & Mining Services",
    description: "Convert data into usable formats (PDF to Excel, image to Word) and uncover actionable patterns. Our services transform raw information into strategic intelligence."
  },
  {
    title: "Data Enrichment & Analysis Services",
    description: "Enhance your data with critical missing details and insights. Our enrichment and analysis provide deeper context to empower strategic planning and targeted campaigns."
  },
  {
    title: "Data Visualization & Reporting Services",
    description: "Transform complex datasets into clear, interactive dashboards and reports. Our data visualization makes key trends instantly understandable for faster, smarter business decisions."
  }
];

const transforLeftSectionContent = [
  "<b>Guaranteed Accuracy:</b> Multi-tier QA ensures a 99.95% accuracy rate.",
  "<b>TAT Driven:</b> Meet deadlines with fast, scalable services and 24/7 availability.",
  "<b>Bank-Grade Security:</b> Round-the-clock service with bank-level data protection & NDAs.",
  "<b>Tech-Powered Efficiency:</b> Advanced software & automation on secure cloud platforms.",
  "<b>Cost-Effective:</b> Slash costs by up to 70% with flexible pricing models.",
  "<b>Dedicated Management:</b> A single point of contact for seamless workflow."
];

export default function Home() {

  const features = [
    "Whether you need single or ten resources to support large operations, our team of professionals is here to provide any service you may require.",
    "You don’t need to hire a specialist for every skill you require. Our team of over 300 professionals is highly experienced and well-equipped to cover any task you may need.",
    "Our team is available to assist you during your time zone, and all our members are fluent English speakers.",
    "We offer a dedicated project manager who will ensure that your team completes tasks on time and meets their targets. This will save you the headache of having to supervise the team constantly.",
    "We keep backup resources available in case of emergency or if you need to scale up your operations quickly.",
    "Our team is already highly trained and experienced in most assigned tasks, meaning there is no learning curve involved.",
    "We’re sure you won’t be disappointed, but it’s only fair to allow you to test our services before committing. So why not take advantage of our free trial? No obligations, no hassles, just the chance to see what our services can do for you."
  ];

  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex min-h-screen w-full flex-col">

        {/* Banner Section */}
        <section>
          <Banner title="Secure & Scalable Data Entry Solutions"
            description="We transform your unstructured documents, forms, and data into clean, actionable digital assets. Get secure, scalable, and cost-effective data entry outsourcing with a guaranteed 99.95% accuracy."
            buttonLabel="Get a Free Pilot Project!"
            buttonLink="#contact"
            bannerImage="/contact-us/Banner.jpg" />
        </section>

        <section>
          <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
            <div className="max-w-7xl space-y-6">
              <h2 className="text-3xl font-bold">Build Your Scalable Virtual Team with Expert Data Entry Services</h2>
              <h3 className="text-2xl font-bold">Stop letting complex data management slow down your business growth. At Perfect Data Entry, we cut through the complexity, offering a seamless data entry outsourcing solution that acts as your dedicated, offshore data entry team.</h3>

              <p className="text-gray-700 leading-relaxed">
                Backed by 8+ years of industry expertise, we’ve successfully delivered 1,132+ projects with a specialized team of 300+ data management professionals. Our proven systems deliver unparalleled accuracy and efficiency, consistently helping clients reduce operational costs by 30-60%.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Why settle for adequate when you can achieve excellence? Our unwavering commitment to client success is powered by 24/7 dedicated support and a partnership approach. When you choose us, you gain more than a service—you gain a strategic partner invested in your goals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Take control of your data and unlock a true competitive edge. Isn’t it time your data worked as hard as you do? Trust the experts at Perfect Data Entry to deliver precision, every single time.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full flex gap-10 justify-center py-15">
            <div className="max-w-7xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Data Entry Services</h2>

              <p className="text-2xl font-bold mb-4">Precision-Engineered Data Entry Services for Every Business Need</p>
              <p className="mb-8">We deliver more than just data typing; we provide secure data processing solutions that become a reliable extension of your team. As your long-term data entry partner, we combine the highest accuracy with competitive pricing to fuel your business growth.</p>

              <IconGrid sectionContent={serviceContent} />
            </div>
          </div>
        </section>
        <section>
          <HighlightSection title="Ready to Elevate Your Data Management?"
            description='Stop wrestling with spreadsheets and manual entry. Outsource data entry to experts and unlock efficiency.
<ul className="space-y-4 text-gray-700 text-left"> 
<li className="flex items-start gap-2"> 
<span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#447FB0] text-white text-sm mt-1">
      ✓
    </span>
<b>Get a Risk-Free Pilot:</b> Test our services with no commitment.</li>
<li className="flex items-start"> 
<span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#447FB0] text-white text-sm mt-1">
      ✓
    </span>
<b>Request a Custom Quote:</b> Tailored solutions for your budget and needs.</li></ul>'
            buttonLabel="Calculate Your Savings"
            buttonLink="/contact-us" />

        </section>

        <section >
          <div className="w-full flex justify-center px-6 py-15 bg-gray-50">
            <div className="max-w-7xl space-y-6">
              <h2 className="text-3xl font-bold text-center">Why We Are Your Trusted Data Entry Partner</h2>
              <p className="text-2xl font-bold text-center">We go beyond basic typing to become a seamless extension of your team, delivering unmatched value and reliability.</p>
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
          <WhyTeamSection />
        </section>

        <section>
          <HighlightSection title="We offer top-notch data entry virtual assistant services with a referral commission of up to 30%, and we also provide fully white-labelled solutions for resellers." />
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Stop Managing Data, Start Leveraging It.<br /> Partner with Our Data Entry Experts.</h2>
              <div className="text-1xl text-gray-900 text-center">Tired of the tedious and time-consuming task of data management? <br />Our dedicated data entry outsourcing services handle the heavy lifting, so you can focus on core business growth.</div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left Column - Features List */}
                <div className="flex flex-col gap-5">

                  <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                    <h3 className="text-2xl md:text-3xl mb-4">Consult & Strategize</h3>
                    <p>Begin with a free consultation to outline your exact needs, from high-volume data processing and e-commerce product entry to specialized data conversion projects. We listen to build a perfectly tailored solution.</p>
                  </div>

                  <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                    <h3 className="text-2xl md:text-3xl mb-4">Launch in 24 Hours</h3>
                    <p>Once aligned, our expert offshore data entry team in India mobilizes immediately. We onboard and launch your project within 24 hours, ensuring a seamless, efficient, and secure start with zero downtime.</p>
                  </div>

                  <div className="flex-1 border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                    <h3 className="text-2xl md:text-3xl mb-4">Validate with a Risk-Free Pilot</h3>
                    <p>Experience our accuracy and efficiency firsthand with a no-cost, no-obligation pilot project. Test our secure data entry processes and see the tangible results before making any commitment.</p>
                  </div>


                </div>

                {/* Right Column - Contact Form */}
                <div>
                  <ContactForm title="Contact Us Now!" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
