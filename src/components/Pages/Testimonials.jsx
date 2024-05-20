import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "This service is amazing. Highly recommend!",
    author: "Andrew Carlos",
    image:
      "https://i.pinimg.com/736x/1b/5c/83/1b5c8318b295f1019a74fc47f24c606e.jpg",
    position: "Hive.gg",
  },
  {
    id: 2,
    quote: "I am working with this team from past 2 years, and they are making providing top class graphics and animations with price worth",
    author: "Azaly",

    image:
      "https://i.pinimg.com/736x/1b/5c/83/1b5c8318b295f1019a74fc47f24c606e.jpg",
    position: "Strut Esports",
  },
  {
    id: 1,
    quote: "The services are better than what I expected, love your team and your team efforts. I will keep working with you guys",
    author: "Elizabeth",
    image:
      "https://i.pinimg.com/736x/1b/5c/83/1b5c8318b295f1019a74fc47f24c606e.jpg",
    position: "Hardcore Bases",
  },
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <section className="bg-transparent py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-4 text-center text-gray-200">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <blockquote className="mb-4 italic text-gray-300">
                <div className="flex  gap-3">
                  <img
                    className="rounded-lg  w-1/6 h-1/6 md-4"
                    src={testimonial.image}
                  />
                  "{testimonial.quote}"
                </div>
              </blockquote>
              <cite className="block font-semibold not-italic md-4 text-gray-300">
                {testimonial.author}, {testimonial.position}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
