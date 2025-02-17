
import Hero from "@/components/Hero"
import SearchBar from "@/components/SearchBar"
import ProductCard from "@/components/ProductCard"
import Testimonials from "@/components/testimonail"

export default function Home() {
  const featuredModels = [
    { id: "1", name: "GPT-4", description: "Advanced language model for natural language processing", category: "NLP" },
    {
      id: "2",
      name: "DALL-E 2",
      description: "AI model for generating images from text descriptions",
      category: "Image Generation",
    },
    {
      id: "3",
      name: "AlphaFold",
      description: "AI system for predicting protein structures",
      category: "Bioinformatics",
    },
  ]

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-6 py-8">
        <SearchBar />
        <h2 className="text-2xl font-bold mt-12 mb-6">Featured AI Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredModels.map((model) => (
            <ProductCard key={model.id} {...model} />
          ))}
        </div>
        < Testimonials/>
      </div>
    </div>
  )
}


