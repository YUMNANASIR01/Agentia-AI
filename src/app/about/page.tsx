export default function About() {
  return (
    <div className="mb-10 container mx-auto px-6 py-12 bg-gray-300 rounded-lg shadow-lg text-gray-800 animate__animated animate__fadeIn">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">
        About Agentia AI Marketplace
      </h1>
      <div className="prose max-w-none text-gray-700">
        <p className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
          Agentia AI Marketplace is a premier platform for discovering, comparing, and integrating cutting-edge AI
          models into your projects. Our mission is to accelerate AI adoption by providing easy access to a wide range
          of high-quality AI models across various domains.
        </p>
        <h2 className="text-2xl font-semibold text-purple-600 mt-6 animate__animated animate__fadeIn animate__delay-3s">
          Our Vision
        </h2>
        <p className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-4s">
          We envision a world where AI technology is accessible to everyone, empowering individuals and businesses to
          solve complex problems and drive innovation. By curating the best AI models and providing a user-friendly
          marketplace, we aim to bridge the gap between AI researchers, developers, and end-users.
        </p>
        <h2 className="text-2xl font-semibold text-purple-600 mt-6 animate__animated animate__fadeIn animate__delay-5s">
          What We Offer
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg animate__animated animate__fadeIn animate__delay-6s">
          <li>A diverse collection of AI models from leading providers and researchers</li>
          <li>Detailed information and comparisons to help you choose the right model for your needs</li>
          <li>Easy integration options and documentation for seamless implementation</li>
          <li>A community-driven platform for sharing experiences and best practices</li>
          <li>Exclusive insights and AI trends through blogs and expert interviews</li>
        </ul>
        <p className="text-lg leading-relaxed mt-6 animate__animated animate__fadeIn animate__delay-7s">
          Whether you're a seasoned AI practitioner or just starting your journey in artificial intelligence, Agentia AI
          Marketplace is here to support you every step of the way.
        </p>
      </div>
    </div>
  );
}
