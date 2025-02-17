

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-purple-700 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">&copy; 2025 Agentia AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="text-gray-300 hover:text-white transition duration-300">
              Privacy Policy
            </div>
            <div className="text-gray-300 hover:text-white transition duration-300">
              Terms of Service
            </div>
            <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <div className="hover:text-white transition duration-300">
              Facebook
            </div>
            <div className="hover:text-white transition duration-300">
              Twitter
            </div>
            <div className="hover:text-white transition duration-300">
              LinkedIn
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
