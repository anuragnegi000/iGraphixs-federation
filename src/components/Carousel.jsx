import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed:1200,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='gap-3 p-3 m-3 carousel-container'>
            <Slider className='gap-2'{...settings}>
                <Cards />
                <Cards />
                <Cards />
            </Slider>
        </div>
    );
}

function Cards() {
    return (
        <div className='object-scale-down p-4'>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.10 }}
            className=" overflow-hidden place-se rounded-lg shadow-lg transition hover:shadow-xl card place-self-center"
        >
            <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaGootby1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
                <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                    10th Oct 2022
                </time>
                <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900">
                        How to position your furniture for positivity
                    </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
        </motion.div>
        </div>
    );
}

