import React from "react";
import { Star } from "lucide-react";
import Templates from "./SectionTemplates";

const reviews = [
  {
    title: "Professional Resume Template",
    review:
      "Loved the clean layout and typography! It helped me land interviews quickly. The customization was smooth and intuitive.",
    rating: 5,
    author: "Aman Verma",
  },
  {
    title: "Modern Portfolio Template",
    review:
      "Beautiful dark design and responsive on all devices. Great for showcasing projects in style.",
    rating: 4,
    author: "Priya Sharma",
  },
  {
    title: "Creative Blog Template",
    review:
      "Perfect for content creators. I enjoyed the animations and layout flexibility. Great work!",
    rating: 5,
    author: "Rahul Mehta",
  },
];

const ReviewsSection = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-gray-800 text-white py-16 px-6" id="template">
      {/* Section Header */}
   
    <Templates/>
      {/* Reviews Grid */}
         <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-purple-950 via-purple-500 to-purple-950 bg-clip-text text-transparent">
          Template Reviews
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Explore what our users say about our modern, responsive, and elegant templates.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900/70 border border-gray-800 rounded-2xl shadow-xl hover:shadow-purple-700/20 transition-transform transform hover:-translate-y-2 p-6 backdrop-blur-md"
          >
            <h2 className="text-2xl font-semibold mb-2 text-white/80">
              {item.title}
            </h2>
            <p className="text-gray-400 mb-4">{item.review}</p>

            {/* Rating */}
            <div className="flex items-center mb-3">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              {Array(5 - item.rating)
                .fill()
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gray-600" />
                ))}
            </div>

            <p className="text-sm text-gray-400">— {item.author}</p>
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default ReviewsSection;
