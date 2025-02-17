
  
interface AIModelDetailsProps {
    name: string;
    description: string;
    category: string;
    provider: string;
    pricing: string;
    features: string[];
  }
  
  export default function AIModelDetails({
    name,
    description,
    category,
    provider,
    pricing,
    features,
  }: AIModelDetailsProps) {
    return (
      <div className="bg-gradient-to-r from-gray-800 to-purple-700 text-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-purple-300">{name}</h2>
        <p className="text-gray-300 mb-6">{description}</p>
        
        <div className="grid grid-cols-2 gap-6 mb-6 bg-gray-900 p-4 rounded-lg">
          <div>
            <strong className="text-purple-400">Category:</strong> {category}
          </div>
          <div>
            <strong className="text-purple-400">Provider:</strong> {provider}
          </div>
          <div>
            <strong className="text-purple-400">Pricing:</strong> {pricing}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-purple-300">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {features.map((feature, index) => (
            <li key={index} className="hover:text-purple-400 transition duration-300">{feature}</li>
          ))}
        </ul>
  
        <button className="mt-6 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Learn More
        </button>
      </div>
    );
  }
  