import WhyTeamSection from "./components/whyteamsection";
import Banner from "./components/banner";
import HighlightSection from "./components/highlightSection";
import ContactForm from "./components/contacForm";


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
          <Banner title="Build High-Performance Teams"
            description="Automated Intelligent Management Solutions."
            buttonLabel="Get Started"
            buttonLink="#contact"
            bannerImage="/contact-us/Banner.jpg" />
        </section>

        <section>
          <div className="w-full flex gap-10 items-center justify-center py-15">
            <div className="max-w-7xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Drive Growth with Advanced Analytics, Intelligent Automation, Targeted Digital Marketing, and Specialized Staffing Solutions</h2>

              <p className="mb-8">Achieve your goals with targeted solutions designed for impact. Our services are customized to enhance productivity, optimize resources, and help your business thrive in a competitive landscape.</p>

              <div className="flex flex-row gap-8">
                <div className="border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                  <h3 className="text-2xl md:text-3xl mb-4">Data Analytics</h3>
                  <p>Gain a competitive edge with insights tailored to your business. Our customized dashboards and predictive analytics reveal hidden opportunities and trends, empowering you to make informed decisions with confidence.</p>
                </div>

                <div className="border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                  <h3 className="text-2xl md:text-3xl mb-4">Business Automation</h3>
                  <p>Reduce manual tasks and focus on what matters most. With our AI-driven automation, streamline operations, cut costs, and improve accuracy, allowing your team to work smarter and achieve more.</p>
                </div>

                <div className="border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                  <h3 className="text-2xl md:text-3xl mb-4">Digital Marketing</h3>
                  <p>Engage your ideal customers and maximize your impact. Our targeted digital marketing strategies reach the right audience at the right time, helping you build stronger connections and grow your brand.</p>
                </div>

                <div className="border-t-[6px] border-[var(--primary-color)] shadow-[0px_10px_51px_3px_rgba(0,0,0,0.15)] p-[30px] rounded-[10px] h-auto">
                  <h3 className="text-2xl md:text-3xl mb-4">Staffing Solutions</h3>
                  <p>Expand your team with top talent when you need it. Our flexible staffing solutions provide you with skilled professionals who align with your goals, allowing you to scale effortlessly and drive results.</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section>
          <HighlightSection title="Discover What Your Business Can Achieve"
            description="Find new ways to improve operations, reduce costs, and grow. Our insights will help you spot untapped opportunities and make impactful changes."
            buttonLabel="See What’s Possible"
            buttonLink="/contact-us" />

        </section>

        <section>
          <div className="w-full flex gap-10 justify-center py-15">
            <div className="max-w-7xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industries We Serve: Pioneering Solutions for Every Field</h2>

              <p className="mb-8">Explore the Sectors We Serve: From healthcare to automotive, discover how our tailored solutions are designed to meet the unique challenges and opportunities of each industry.</p>

              <div className="grid md:grid-cols-3 gap-8  text-left">
                <div className="p-8 rounded-xl border border-transparent hover:border-[var(--primary-color)] shadow-md hover:shadow-lg transition-all duration-300 bg-white">

                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c4.418 0 8-3.582 8-8V5l-8-3-8 3v9c0 4.418 3.582 8 8 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Insurance</h3>
                  <p className="text-gray-600 leading-relaxed">Enhance claim accuracy and customer satisfaction with our AI-driven automation and compliance tools.</p>
                </div>

                <div className="p-8 rounded-xl border border-transparent hover:border-[var(--primary-color)] shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h3l3 7 4-14 3 7h4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare</h3>
                  <p className="text-gray-600 leading-relaxed">Deliver secure and compliant data management, improving efficiency across healthcare operations.</p>
                </div>

                <div className="p-8 rounded-xl border border-transparent hover:border-[var(--primary-color)] shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Finance</h3>
                  <p className="text-gray-600 leading-relaxed">Empower strategic financial decisions with real-time business intelligence dashboards and analytics.</p>
                </div>

                <div className="p-8 rounded-xl border border-transparent hover:border-[var(--primary-color)] shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M4 21V8l7-5v13M21 21V10l-7-5v13" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing</h3>
                  <p className="text-gray-600 leading-relaxed">Boost production efficiency with predictive analytics and optimized resource allocation strategies.</p>
                </div>

                <div className="p-8 rounded-xl border border-transparent hover:border-[var(--primary-color)] shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 2l1.5 4h9L18 2H6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18v16H3V6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Retail & E-commerce</h3>
                  <p className="text-gray-600 leading-relaxed">Increase customer engagement and sales with targeted digital marketing and precise data insights.</p>
                </div>

                <div className="p-8 rounded-xl border border-transparent hover:border-[var(--primary-color)] shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--primary-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13l1-3h16l1 3M5 16h2v2H5v-2zm12 0h2v2h-2v-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 13V9h16v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Automotive</h3>
                  <p className="text-gray-600 leading-relaxed">Advance your operations with our data analytics and automation, improving inventory and service quality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <WhyTeamSection />
        </section>


        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* Left Column - Features List */}
              <ul className="space-y-4 text-gray-700 list-none">
                {features.map((feature, index) => (
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Right Column - Contact Form */}
              <ContactForm />

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
