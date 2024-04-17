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
            Authorization: 'Bearer YOUR_PEXELS_API_KEY' // Replace 'YOUR_PEXELS_API_KEY' with your actual Pexels API key
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
        { id: 1, quote: "Our new logo exceeded our expectations! It perfectly captures the essence of our brand.", author: "John Doe, CEO of ABC Company" },
        { id: 2, quote: "Working with [Your Company Name] was a breeze. They understood our vision and delivered exceptional results.", author: "Jane Smith, Marketing Director of XYZ Inc." }
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
          <h1 className="text-2xl font-bold">Logo Design</h1>
          <p className="mb-4">At [Your Company Name], we specialize in creating unique and memorable logos tailored to your brand identity. From concept to execution, we'll work closely with you to bring your vision to life.</p>
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
          
          {/* Client Testimonials */}
          <section>
            <h2 className="text-xl font-semibold">What Our Clients Say</h2>
            <ul>
              {clientTestimonials.map(testimonial => (
                <li key={testimonial.id}>
                  <blockquote>{testimonial.quote}</blockquote>
                  <cite>{testimonial.author}</cite>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Benefits of Professional Logo Design */}
          <section>
            <h2 className="text-xl font-semibold">Why Invest in Professional Logo Design</h2>
            <p>Investing in professional logo design can have a significant impact on your brand's success. A well-designed logo can:</p>
            <ul>
              <li>Enhance brand identity and recognition</li>
              <li>Build credibility and trust with customers</li>
              <li>Stand out in a crowded marketplace</li>
              <li>Create a memorable first impression</li>
              <li>Adapt and grow with your business</li>
            </ul>
          </section>
          
          {/* Customization Options */}
          <section>
            <h2 className="text-xl font-semibold">Tailored Solutions for Your Brand</h2>
            <p>Our logo design service offers customizable options to suit your brand's unique identity and requirements. Whether you prefer a minimalist wordmark or a bold emblem, we'll tailor our approach to reflect your vision and values.</p>
          </section>
          
          {/* Value Proposition */}
          <section>
            <h2 className="text-xl font-semibold">Why Choose [Your Company Name]</h2>
            <p>When you choose [Your Company Name] for your logo design needs, you're choosing:</p>
            <ul>
              <li>Experienced and talented designers</li>
              <li>Personalized attention and collaboration</li>
              <li>Quick turnaround times and responsive support</li>
              <li>Transparent pricing and competitive rates</li>
              <li>A commitment to quality and satisfaction</li>
            </ul>
          </section>
          
          {/* FAQs */}
          <section>
            <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
            <ul>
              {faqItems.map(faq => (
                <li key={faq.id}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Call-to-Action */}
          <section>
            <h2 className="text-xl font-semibold">Get Started Today</h2>
            <p>Ready to elevate your brand with a stunning logo design? Contact us today to schedule a consultation, request a quote, or explore our portfolio further. Let's bring your vision to life!</p>
            {/* Add your call-to-action buttons or contact form here */}
          </section>
          
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default ServicePage;
