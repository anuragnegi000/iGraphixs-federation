function Testimonials() {
  return (
    <section className="bg-gray-800 py-8">  // Changed to a darker background
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-400">What Our Clients Say</h2>  // Text color changed to blue
        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id}
              className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm"  // Changed card background to lighter gray
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <blockquote className="mb-4 italic text-gray-300">"{testimonial.quote}"</blockquote>  // Text color changed to lighter gray
              <cite className="block font-semibold not-italic text-gray-300">{testimonial.author}, {testimonial.position}</cite>  // Text color changed
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;