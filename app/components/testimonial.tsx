import React from "react";

interface Testimonial {
  content: string;
  author: string;
  rating: number;
  votes: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-[6px] border-[var(--primary-color)]"
            >
              <p className="text-gray-700 mb-4">&quot;{t.content}&quot;</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">{t.author}</span>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${i < Math.round(t.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.945c.3.921-.755 1.688-1.538 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.945a1 1 0 00-.364-1.118L2.028 9.372c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.945z" />
                    </svg>
                  ))}
                  <span className="text-gray-500 text-sm">({t.votes} votes)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
