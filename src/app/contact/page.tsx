
export default function Contact() {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center px-6 py-12">
        <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg max-w-lg w-full">
          <h1 className="text-4xl font-bold text-purple-500 mb-6 text-center">Contact Us</h1>
          <p className="text-gray-400 mb-6 text-center">
            Have any questions or feedback? We’d love to hear from you!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/50"
              >
                Send Message
              </button>
            </div>
          </form>
          <p className="text-center text-gray-400 text-sm mt-4">
            Or reach us at{" "}
            <a href="mailto:support@agentiaai.com" className="text-purple-400 hover:underline">
              support@agentiaai.com
            </a>
          </p>
        </div>
      </div>
    );
  }
  