"use client"; 

import { useEffect, useState } from "react";

export default function WhyTeamSection() {
  const stats = [
    { number: 1132, suffix: "+", label: "SUCCESSFUL PROJECTS" },
    { number: 24, suffix: "/7", label: "CUSTOMER SERVICE" },
    { number: 300, suffix: "+", label: "SKILLED EXPERTS" },
    { number: 12, suffix: "+", label: "YEARS OF EXPERIENCE" },
    { number: 40, suffix: "%", label: "COST REDUCTION" },
    { number: 24, suffix: "Hrs", label: "FASTER TURNAROUND" },
  ];

  // States for counting
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = Math.ceil(stat.number / 100); // Speed of counting
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.number) {
            newCounts[index] += increment;
            if (newCounts[index] > stat.number) newCounts[index] = stat.number;
          }
          return newCounts;
        });
      }, 20); // Interval in ms
    });

    // Cleanup intervals on unmount
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Perfect Virtual Team?
        </h2>

        {/* Stats Grid - 6 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-2">
                {counts[index]}
                {stat.suffix}
              </p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
