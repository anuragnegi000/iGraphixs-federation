import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userData } from '../constants/userData'; // Adjust the import path as necessary
import { persons } from '../constants/PageData';
export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 3,  // Default setting for larger screens
        slidesToScroll: 2, // Default setting for larger screens
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024, // Devices less than 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, // Devices less than 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // Devices less than 480px
                settings: {
                    slidesToShow: 1, // Only show one slide at a time
                    slidesToScroll: 1 // Scroll one slide at a time
                }
            }
        ]
    };

    return (
        <div className='gap-3 p-3 m-3 carousel-container'>
            <Slider {...settings}>
                {userData.map(user => (
                    <Card key={user.id} user={user} />
                ))}
            </Slider>
        </div>
    );
}

function Card({ user }) {
    return (
        <div className='object-scale-down p-4'>
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, y: 20, opacity: 1 }}
                exit={{ x: -300, y: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl card"
            >
                <img
                    alt={user.name}
                    src={user.image}
                    className="h-56 w-full object-cover"
                />
                <div className="bg-white p-4 sm:p-6">
                    <time dateTime={user.date} className="block text-xs text-gray-500">
                        {new Date(user.date).toLocaleDateString()}
                    </time>
                    <h3 className="mt-0.5 text-lg text-gray-900">
                        {user.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                        {user.description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}




export function FancyCarousel() {
    const [activeItem, setActiveItem] = useState(0); // Ensure there is at least 6 items in `persons`
    const wrapperRef = useRef(null);
    const timeoutRef = useRef(null);
    useEffect(() => {
        console.log("Active item index:", activeItem);
        const currentWrapper = wrapperRef.current;
        if (!currentWrapper) return;
      
        const transitionStyle = "600ms cubic-bezier(0.22, 0.61, 0.36, 1)";
        currentWrapper.style.transition = transitionStyle;
      
        const timeout = setTimeout(() => {
          currentWrapper.style.transition = "";
        }, 900);
        timeoutRef.current = timeout;
      
        return () => {
          console.log("Cleaning up...");
          clearTimeout(timeout);
        };
      },[activeItem]);
  
    return (
      <div style={{ display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '1200px', maxWidth: '100%' }}>
          <ul ref={wrapperRef} style={{ display: 'flex', flexDirection: 'column', gap: '3px', height: '640px', flexWrap: 'wrap', padding: '1.5%' }}>
            {persons.map((person, index) => (
              <li
                onClick={() => setActiveItem(index)}
                aria-current={activeItem === index ? 'true' : 'false'}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  width: activeItem === index ? '48%' : '8%',
                  transition: 'width 600ms cubic-bezier(0.22, 0.61, 0.36, 1)',
                  opacity: index === 0 || index === persons.length - 1 ? 0 : 1,
                  pointerEvents: index === 0 || index === persons.length - 1 ? 'none' : 'auto'
                }}
                key={index}
              >
                <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden', borderRadius: '16px', backgroundColor: '#c9c6c7' }}>
                  <img
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '50%',
                      height: 'auto',
                      width: '24px',
                      transform: 'translateY(-50%)',
                      objectFit: 'cover',
                      filter: 'grayscale(100%)'
                    }}
                    src={person.img}
                    alt={person.name}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: activeItem === index ? 0.25 : 0,
                      transition: 'opacity 300ms'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '32px',
                      top: '32px',
                      width: '590px',
                      padding: '16px',
                      transform: activeItem === index ? 'translateX(0)' : 'translateX(16px)',
                      opacity: activeItem === index ? 1 : 0,
                      transition: 'transform 300ms, opacity 300ms'
                    }}
                  >
                    <p style={{ fontSize: 'small', textTransform: 'uppercase', color: '#007bff' }}>{person.title}</p>
                    <p style={{ fontSize: 'large', fontWeight: 'bold' }}>{person.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}