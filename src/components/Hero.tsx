
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-purple-700 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to Agentia AI Marketplace</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover and integrate cutting-edge AI models for your projects with ease and efficiency.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/models"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Explore AI Models
          </Link>
          <Link
            href="/about"
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Learn More
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">AI Model Integration</h3>
            <p className="text-gray-300">Easily integrate AI models into your applications.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Advanced Features</h3>
            <p className="text-gray-300">Unlock the potential of AI with powerful features.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-300">Join a vibrant community of AI enthusiasts and developers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
