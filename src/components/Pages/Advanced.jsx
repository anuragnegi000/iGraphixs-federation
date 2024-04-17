import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import Header from "../Header";
import Footer from "../Footer";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
};

function ServicePage() {
  const [portfolioExamples, setPortfolioExamples] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search?query=art', {
          headers: {
            Authorization:  import.meta.env.PEXELS_KEY
             }
        });
        const images = response.data.photos.map(photo => ({
          id: photo.id,
          imgSrc: photo.src.original,
          description: photo.alt
        }));
        setPortfolioExamples(images);
      } catch (error) {
        console.error('Error fetching images from Pexels:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className='mt-12 pt-9'>
      <Header />
      <main className="container mx-auto p-4 relative z-0">
        <motion.div initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
          <h1 className="text-2xl font-bold">Logo Design</h1>
          <p className="mb-4">Description of the logo design service, including the process and approach.</p>
          <section>
            <h2 className="text-xl font-semibold">Portfolio Examples</h2>
            <Slider {...settings}>
              {portfolioExamples.map(example => (
                <div key={example.id} className="p-2">
                  <img src={example.imgSrc} alt={example.description} style={{ width: '100%', height: 'auto', aspectRatio: '16/9', borderRadius: '8px' }} />
                  <p>{example.description}</p>
                </div>
              ))}
            </Slider>
          </section>
          {/* Additional sections */}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default ServicePage;