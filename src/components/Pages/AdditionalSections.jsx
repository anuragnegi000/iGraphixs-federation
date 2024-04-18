// AdditionalSections.js
import React from 'react';

import { motion } from 'framer-motion';


export function CustomizationOptions() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Customization Options</h2>
    </section>
  );
}

export function FAQs({ faqItems }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">FAQs</h2>
      {faqItems.map(faq => (
        <div key={faq.id} className="mb-4">
          <h3 className="text-xl font-semibold">{faq.question}</h3>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </section>
  );
}

export function GetStarted() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Get Started</h2>
    </section>
  );
}

export function OurTeam() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
    </section>
  );
}
export function Testimonials() {
    return (
    <section>
           <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
    </section>
    )
}
export function WhyChoose() {
    // Animation settings for Framer Motion
    const containerVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.3,
          duration: 0.6
        }
      }
    };
  
    const cardVariants = {
      rest: { scale: 1 },
      hover: {
        scale: 1.05,
        rotateY: 10,
        transition: {
          type: 'spring',
          stiffness: 300
        }
      }
    };
  
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-black py-8"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Innovation', 'Reliability', 'Customer Focus'].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 shadow-lg rounded-lg bg-gray-800 bg-opacity-80 text-white cursor-pointer"
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p>{`We lead in ${item.toLowerCase()}, pushing the boundaries of what's possible.`}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }