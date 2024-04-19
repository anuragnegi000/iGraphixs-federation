// AdditionalSections.js
import React, { useState } from 'react';
import { cardData,teamMembers ,testimonials,faqData} from '../../constants/PageData';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8); /* Adjust transparency as needed */
  backdrop-filter: blur(10px); /* Adjust blur intensity as needed */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;







// Why Choose u 

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
      scale: 1.1,
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
      className="bg-gradient-to-r from-purple-500 to-blue-500 py-8 text-white"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item, index) => (
            <motion.div
              key={index}
              className="p-4 shadow-lg rounded-lg bg-white bg-opacity-10 backdrop-blur-sm cursor-pointer"
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




export function OurTeam() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
      <div className="flex lg:flex-wrap justify-center">
        {teamMembers.map((member) => (
          <div key={member.id} className="  m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto mb-4">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-bold">{member.name}</h3>
              <p className="text-xs sm:text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


{/* 
//////////////////////////////////////////////*
*/}

export function CustomizationOptions() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Customization Options</h2>
    </section>
  );
}



export default function Example() {
  return (
    <div className="w-full px-4 pt-16 bg-gray-900 text-white"> {/* Dark theme applied */}
      <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-800 p-2">
        {faqData.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-700 px-4 py-2 text-left text-sm font-medium text-purple-200 hover:bg-purple-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>{item.question}</span>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-300`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-300">
                  {item.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}



export function ImageGallery() {
  const images = [
    { src: "/mountains-1.jpg", transform: "scale-110 -rotate-6" },
    { src: "/mountains-2.jpg", transform: "scale-75 rotate-6 translate-x-2 translate-y-15" },
    { src: "/mountains-3.jpg", transform: "scale-150 translate-y-11" },
    { src: "/mountains-4.jpg", transform: "translate-y-24" },
    { src: "/mountains-5.jpg", transform: "translate-x-20 translate-y-4" }
  ];

  return (
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
      {images.map((image, index) => (
        <div key={index} className={`transform ${image.transform}`}>
          <img src={image.src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
export function Title(){
  return (
    <>
    <div>
    <h1 className="text-4xl font-bold mb-8 text-center "> Logo Creation </h1>
    </div>
    </>
  )
}
export function GetStarted() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Get Started</h2>
    </section>
  );
}





export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  const settings = {
    dots: false, // Hides slider dots
    infinite: true,
    speed: 500, // Adjust speed here (milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed here (milliseconds)
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    afterChange: (currentSlide) => {
      if (currentSlide === testimonials.length - 1) {
        setIsPaused(true); // Pause autoplay after last slide
        setTimeout(() => {
          setIsPaused(false); // Resume autoplay after a short delay
        }, 1000); // Adjust delay time as needed
      }
    },
  };

  return (
    <>
      <style>
        {`
          .testimonial-card {
            background: black;
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-center">What Our Clients Say</h2>
          <Slider {...settings} autoplay={!isPaused}>
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card"
                transition={{ type: "spring", stiffness: 300 }}
                onMouseEnter={() => setIsPaused(false)} // Start autoplay on mouse enter
                onMouseLeave={() => setIsPaused(true)} // Pause autoplay on mouse leave
              >
                <blockquote className="mb-4 italic">"{testimonial.quote}"</blockquote>
                <cite className="block font-semibold not-italic">{testimonial.author}, {testimonial.position}</cite>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}


