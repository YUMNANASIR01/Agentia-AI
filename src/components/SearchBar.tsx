
export default function SearchBar() {
    return (
      <div className="max-w-xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search AI models..."
          className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-800 placeholder-gray-500"
        />
        <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors font-semibold">
          Search
        </button>
      </div>
    )
  }