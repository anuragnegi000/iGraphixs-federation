import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Carousel from "./components/Carousel";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Testimonials from "./components/Pages/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhyChoose from "./components/Pages/“
  import FAQ from “./components/FAQ”
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Benefits />
        <Testimonials />
        <VerticalAccordion/>
        <Carousel />
        <Footer />
        
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
