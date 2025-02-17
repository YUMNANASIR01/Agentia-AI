

import Link from "next/link";

export default function Categories() {
  const categories = [
    { name: "Natural Language Processing", description: "AI models for understanding and generating human language" },
    { name: "Computer Vision", description: "AI models for processing and analyzing visual information" },
    { name: "Robotics", description: "AI models for controlling and optimizing robotic systems" },
    { name: "Bioinformatics", description: "AI models for analyzing biological data and solving biological problems" },
    { name: "Reinforcement Learning", description: "AI models that learn through interaction with an environment" },
    { name: "Generative AI", description: "AI models that can create new content, such as images, text, or music" },
  ];

  return (
    <div className="container mx-auto px-6 py-8 bg-gradient-to-r from-purple-900 via-purple-700 to-gray-500 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center animate__animated animate__fadeIn">AI Model Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 text-gray-100 shadow-md rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:bg-slate-200 hover:shadow-xl hover:text-black animate__animated animate__fadeIn animate__delay-1s hover:cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-400 mb-4">{category.description}</p>
            <Link
              href={`/models?category=${encodeURIComponent(category.name)}`}
              className="text-purple-300 hover:text-purple-500 transition duration-300"
            >
              View models
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
