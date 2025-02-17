import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-purple-700 shadow-md animate__animated animate__fadeIn">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white transform transition duration-500 hover:scale-110"
        >
          Agentia AI
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/models"
              className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110"
            >
              AI Models
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link href={"/signin"}>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 transform hover:scale-110">
            Sign In
          </button>
        </Link>
      </nav>
    </header>
  );
}
