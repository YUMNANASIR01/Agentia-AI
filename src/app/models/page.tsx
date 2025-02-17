
"use client"
import SearchBar from "@/components/SearchBar"
import CategoryFilter from "@/components/CategoryFilter"
import ProductCard from "@/components/ProductCard"
import Pagination from "@/components/Pagination"

export default function Models() {
  const categories = ["All", "NLP", "Computer Vision", "Robotics", "Bioinformatics"]
  const models = [
    { id: "1", name: "GPT-4", description: "Advanced language model for natural language processing", category: "NLP" },
    {
      id: "2",
      name: "DALL-E 2",
      description: "AI model for generating images from text descriptions",
      category: "Computer Vision",
    },
    {
      id: "3",
      name: "AlphaFold",
      description: "AI system for predicting protein structures",
      category: "Bioinformatics",
    },
    { id: "4", name: "BERT", description: "Bidirectional Encoder Representations from Transformers", category: "NLP" },
    { id: "5", name: "YOLOv5", description: "Real-time object detection model", category: "Computer Vision" },
    { id: "6", name: "RoBERTa", description: "Robustly optimized BERT approach", category: "NLP" },
  ]

  return (
    <div className="container mx-auto px-6 py-8 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">AI Models</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-4 lg:space-y-0">
        <SearchBar />
        <CategoryFilter categories={categories} selectedCategory="All" onCategoryChange={() => {}} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {models.map((model) => (
          <ProductCard key={model.id} {...model} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </div>
  )
}
