import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselImages = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  // Add more image URLs here
];

const Cards = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
        <p className="mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={carouselImages[index]}
            alt=""
            className="h-[350px] w-full object-cover sm:h-[450px]"
            style={{ filter: 'brightness(50%)' }} // Apply dark transparent effect
          />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xs text-white">Basic Tee</h3>
            <p className="mt-2">
              <span className="sr-only">Regular Price</span>
              <span className="tracking-wider text-white">£24.00 GBP</span>
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Cards;