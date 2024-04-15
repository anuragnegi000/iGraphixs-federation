
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userData } from '../constants/userData'; // Adjust the import path as necessary

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