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

function Testimonials({ testimonials }) {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="mb-4">{testimonial.quote}</blockquote>
              <cite>{testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Why Choose iGraphixs?</h2>
        <ul className="list-disc ml-6">
          <li className="mb-2">Unique and innovative logo designs</li>
          <li className="mb-2">Personalized approach tailored to your brand</li>
          <li className="mb-2">Quick turnaround times and responsive support</li>
          <li className="mb-2">Transparent pricing and competitive rates</li>
        </ul>
      </div>
    </section>
  );
}

function CustomizationOptions() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Customization Options</h2>
        <p className="text-lg">We offer a range of customization options to ensure your logo reflects your brand identity and vision.</p>
      </div>
    </section>
  );
}

function FAQs({ faqItems }) {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">FAQs</h2>
        <div>
          {faqItems.map(faq => (
            <div key={faq.id} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
        <p className="text-lg">Ready to elevate your brand with a stunning logo design? Contact us today to schedule a consultation!</p>
      </div>
    </section>
  );
}

function OurTeam() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        {/* Add your team members here */}
      </div>
    </section>
  );
}

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

          <WhyChoose />

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

export default ServicePage;
