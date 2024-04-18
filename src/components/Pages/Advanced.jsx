import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import Header from "../Header";
import Footer from "../Footer";
import Slider from 'react-slick';

import  { ImageGallery, Testimonials,Title,WhyChoose, OurTeam}  from "./AdditionalSections"

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
  const [clientTestimonials, setClientTestimonials] = useState([]);
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search?query=art', {
          headers: { Authorization: import.meta.env.PEXELS_KEY }
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

    const fetchTestimonials = async () => {
      const testimonialsData = [
        { id: 1, quote: "iGraphixs exceeded our expectations! Their logo perfectly captures the essence of our brand.", author: "John Doe, CEO of ABC Company" },
        { id: 2, quote: "Working with iGraphixs was a breeze. They understood our vision and delivered exceptional results.", author: "Jane Smith, Marketing Director of XYZ Inc." }
      ];
      setClientTestimonials(testimonialsData);
    };

    const fetchFaqs = async () => {
      const faqData = [
        { id: 1, question: "How long does it take to design a logo?", answer: "The timeline for logo design can vary depending on the complexity of the project and client feedback. On average, it takes around 2-4 weeks from initial concept to final delivery." },
        { id: 2, question: "Do I own the rights to the logo once it's created?", answer: "Yes, upon completion and full payment, you will own the full rights to the logo design, including any associated files and assets." }
      ];
      setFaqItems(faqData);
    };

    fetchImages();
    fetchTestimonials();
    fetchFaqs();
  }, []);

  return (

     
      <> 
      <Header/>
        {/* Compoennt  will be passed  as  title */}
    <div className='pt-12'>
    <section
      className="pt-[12rem] -mt-[5.25rem]"> 

<Title/>   


  
   
    <ImageGallery/>
          <Testimonials testimonials={clientTestimonials} />
         <WhyChoose/>
          {/* <CustomizationOptions />
          <FAQs faqItems={faqItems} />
          <GetStarted />*/}
        <OurTeam/>
     

      <Footer />

      </section>
      </div>
      </>
        
  );
}

export default ServicePage;