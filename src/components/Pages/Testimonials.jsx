import { motion } from 'framer-motion';

const testimonials = [
    {
      id:1,
      quote:"This service is amazing. Highly recommend!",
      author:"Aditya singh",
      position:"Dev"
    },
     {
      id:2,
      quote:"This service is amazing. Highly recommend!",
      author:"Alex",
      position:"Dev"
    },
    {
      id:1,
      quote:"This service is amazing. Highly recommend!",
      author:"Anurag negi",
      position:"Dev"
    }
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <section className="bg-transparent py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-4 text-center text-gray-200">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <blockquote className="mb-4 italic text-gray-300">"{testimonial.quote}"</blockquote>
              <cite className="block font-semibold not-italic text-gray-300">{testimonial.author}, {testimonial.position}</cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
