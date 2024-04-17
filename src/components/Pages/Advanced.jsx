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
      // Fetch testimonials from API or database
      try {
        // Example API call
        const response = await axios.get('https://api.example.com/testimonials');
        setClientTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    const fetchFaqs = async () => {
      // Fetch FAQs from API or database
      try {
        // Example API call
        const response = await axios.get('https://api.example.com/faqs');
        setFaqItems(response.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
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
            <p>Explain the importance of having a professionally designed logo, including how it can enhance brand identity, credibility, and memorability.</p>
          </section>
          
          {/* Customization Options */}
          <section>
            <h2 className="text-xl font-semibold">Tailored Solutions for Your Brand</h2>
            {/* Describe customization options */}
          </section>
          
          {/* Value Proposition */}
          <section>
            <h2 className="text-xl font-semibold">Why Choose [Your Company Name]</h2>
            {/* Highlight the unique features or advantages of your logo design service */}
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
            {/* Encourage visitors to take action by contacting you for a consultation, requesting a quote, or exploring your portfolio further */}
          </section>
          
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default ServicePage;
