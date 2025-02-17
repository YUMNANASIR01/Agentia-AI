
interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
  }
  
  export default function CategoryFilter({
    categories,
    selectedCategory,
    onCategoryChange,
  }: CategoryFilterProps) {
    return (
      <div className="bg-gradient-to-r from-purple-800 to-gray-700 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-white mb-4">Filter by Category</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition duration-300 shadow-md text-sm font-medium tracking-wide border-2 border-transparent focus:outline-none 
                ${selectedCategory === category ? "bg-purple-500 text-white border-purple-300" : "bg-gray-300 text-gray-900 hover:bg-gray-400"}
              `}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  
  