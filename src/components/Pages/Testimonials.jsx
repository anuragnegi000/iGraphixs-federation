import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const testimonials = [
  { id: 1, quote: "iGraphixs exceeded our expectations! Their logo perfectly captures the essence of our brand.", author: "John Doe", position: "CEO of ABC Company" },
  { id: 2, quote: "Working with iGraphixs was a breeze. They understood our vision and delivered exceptional results.", author: "Jane Smith", position: "Marketing Director of XYZ Inc." },
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg max-w-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <blockquote className="mb-4 italic">"{testimonial.quote}"</blockquote>
              <cite className="block font-semibold not-italic">{testimonial.author}, {testimonial.position}</cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Why to use 

export function WhyChoose() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Why Choose iGraphixs?</h2>
        <ul className="list-disc ml-6">
          <li className="mb-2">Unique and innovative logo designs</li>
          <li className="mb-2">Personalized approach tailored to your brand</li>
          <li className="mb-2">Quick turnaround times and responsive support</li>
          <li className="mb-2">Transparent pricing and competitive rates</li>
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;