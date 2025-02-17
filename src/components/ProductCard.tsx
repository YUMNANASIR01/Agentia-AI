
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
}

export default function ProductCard({ id, name, description, category }: ProductCardProps) {
  return (
    <div className="bg-slate-100 shadow-lg rounded-lg p-6 border border-purple-300 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-purple-800 mb-3">{name}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">{category}</span>
      <div className="mt-6 flex justify-between items-center">
        <Link
          href={`/models/${id}`}
          className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition-colors font-semibold"
        >
          Learn More
        </Link>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}