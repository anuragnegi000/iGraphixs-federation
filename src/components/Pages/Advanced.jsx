import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import Header from "../Header";
import Footer from "../Footer";
import Slider from 'react-slick';
import Testimonials from './Testimonials';
import WhyChoose  from "./WhyChoose"

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
    <div className='mt-12 pt-9'>
      <Header />
      <main className="container mx-auto p-4 relative z-0">
        <motion.div initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-8">Welcome to iGraphixs</h1>
          <section>
            <h2 className="text-3xl font-semibold mb-6">Portfolio</h2>
            <Slider {...settings}>
              {portfolioExamples.map(example => (
                <div key={example.id} className="p-2">
                  <img src={example.imgSrc} alt={example.description} className="rounded-lg shadow-md" />
                </div>
              ))}
            </Slider>
          </section>
          <Testimonials testimonials={clientTestimonials} />
         
          <CustomizationOptions />
          <FAQs faqItems={faqItems} />
          <GetStarted />
          <OurTeam />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

// WhyChoose 

function WhyChoose() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>

    </section>
  );
}

// CustomizationOptions 

function CustomizationOptions() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Customization Options</h2>
  
    </section>
  );
}

// FAQs

function FAQs({ faqItems }) {
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

// GetStarted 

function GetStarted() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Get Started</h2>
    
    </section>
  );
}

// OUrTeam 

function OurTeam() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
      </section>
  );
}








export default ServicePage;