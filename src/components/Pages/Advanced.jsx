import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import Header from "../Header";
import Footer from "../Footer";
import Slider from 'react-slick';

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
          headers: {
            Authorization:   import.meta.env.PEXELS_KEY 
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

    const fetchTestimonials = async () => {
      // Simulated client testimonials
      const testimonialsData = [
        { id: 1, quote: "iGraphixs exceeded our expectations! Their logo perfectly captures the essence of our brand.", author: "John Doe, CEO of ABC Company" },
        { id: 2, quote: "Working with iGraphixs was a breeze. They understood our vision and delivered exceptional results.", author: "Jane Smith, Marketing Director of XYZ Inc." }
      ];
      setClientTestimonials(testimonialsData);
    };

    const fetchFaqs = async () => {
      // Simulated FAQ items
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
          <h1 className="text-2xl font-bold">Welcome to iGraphixs</h1>
          <p className="mb-4">At iGraphixs, we specialize in creating unique and memorable logos tailored to your brand identity. From concept to execution, we'll work closely with you to bring your vision to life.</p>
          <section>
            <h2 className="text-xl font-semibold">Portfolio</h2>
            <Slider {...settings}>
              {portfolioExamples.map(example => (
                <div key={example.id} className="p-2">
                  <img src={example.imgSrc} alt={example.description} style={{ width: '100%', height: 'auto', aspectRatio: '16/9', borderRadius: '8px' }} />
                </div>
              ))}
            </Slider>
          </section>
          
          {/* Client Testimonials */}
          <section>
            <h2 className="text-xl font-semibold">Testimonials</h2>
            <ul className="list-disc ml-4">
              {clientTestimonials.map(testimonial => (
                <li key={testimonial.id}>
                  <blockquote className="mb-2">{testimonial.quote}</blockquote>
                  <cite>{testimonial.author}</cite>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Benefits of Professional Logo Design */}
          <section>
            <h2 className="text-xl font-semibold">Why Choose iGraphixs?</h2>
            <ul className="list-disc ml-4">
              <li>Unique and innovative logo designs</li>
              <li>Personalized approach tailored to your brand</li>
              <li>Quick turnaround times and responsive support</li>
              <li>Transparent pricing and competitive rates</li>
            </ul>
          </section>
          
          {/* Customization Options */}
          <section>
            <h2 className="text-xl font-semibold">Customization Options</h2>
            <p>We offer a range of customization options to ensure your logo reflects your brand identity and vision.</p>
          </section>
          
          {/* FAQs */}
          <section>
            <h2 className="text-xl font-semibold">FAQs</h2>
            <ul className="list-disc ml-4">
              {faqItems.map(faq => (
                <li key={faq.id} className="mb-4">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Call-to-Action */}
          <section>
            <h2 className="text-xl font-semibold">Get Started</h2>
            <p>Ready to elevate your brand with a stunning logo design? Contact us today to schedule a consultation!</p>
          </section>
          
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default ServicePage;
