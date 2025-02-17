import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  description: string
  category: string
}

export default function ProductCard({ id, name, description, category }: ProductCardProps) {
  return (
    <div className="bg-slate-100 shadow-lg rounded-lg p-4 sm:p-6 border border-purple-300 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-2 sm:mb-3">{name}</h3>
      <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{description}</p>
      <span className="bg-purple-200 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
        {category}
      </span>
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <div
          
          className="w-full sm:w-auto bg-purple-600 text-white px-4 sm:px-5 py-2 rounded-md hover:bg-purple-700 transition-colors font-semibold text-center"
        >
          Learn More
        </div>
        <button className="w-full sm:w-auto bg-gray-300 text-gray-800 px-3 sm:px-4 py-2 rounded-md hover:bg-gray-400 transition-colors text-sm sm:text-base">
          Add to Wishlist
        </button>
      </div>
    </div>
  )
}

