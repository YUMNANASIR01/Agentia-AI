import Image from 'next/image';

interface TestimonialProps {
  name: string;
  title: string;
  testimonial: string;
  image: string;
  rating: number;
}

const Testimonial = ({ name, title, testimonial, image, rating }: TestimonialProps) => {
  return (
    <div className="max-w-sm mx-auto bg-slate-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-2xl text-white font-semibold">{name}</h3>
          <p className="text-purple-400 text-sm">{title}</p>
        </div>
      </div>

      <p className="text-gray-300 italic mb-4">{testimonial}</p>

      {/* Star Rating */}
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 15.27l6.18 3.73-1.64-7.03 5.45-4.73-7.19-.61L10 0l-2.8 6.63-7.19.61 5.45 4.73-1.64 7.03L10 15.27z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>

      <div className="mt-4">
        <svg
          className="w-6 h-6 text-purple-400 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.25 9l6 6 6-6"
          />
        </svg>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, Company X',
      testimonial:
        'This is an amazing product! It helped our company grow exponentially and we couldn\'t be more satisfied.',
      image: 'https://randomuser.me/api/portraits/men/10.jpg', // Random Image
      rating: 5,
    },
    {
      name: 'Jane Smith',
      title: 'CTO, TechCorp',
      testimonial:
        'Incredible service! The user interface is intuitive and the customer support is top-notch.',
      image: 'https://randomuser.me/api/portraits/women/20.jpg', // Random Image
      rating: 4,
    },
    {
      name: 'Alex Johnson',
      title: 'Founder, Innovators Inc.',
      testimonial:
        'The product helped us streamline our operations and we saw immediate results.',
      image: 'https://randomuser.me/api/portraits/men/12.jpg', // Random Image
      rating: 5,
    },
    
  ];

  return (
    <div className="bg-gray-900 py-12 mt-20 mb-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-white font-semibold mb-8">What Our Clients Say</h2>
        <div className="flex justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

