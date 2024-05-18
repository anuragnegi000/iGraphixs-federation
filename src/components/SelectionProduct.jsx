import React from 'react';
import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "./Footer";
import Header from "./main.jsx";
import UserForm from "./simUtility/UserForm";
import { Animated, banner1, Concept, emotes1, illustration, Jersey, Mascot, Poster, Stream, Thumbnail, Vector } from "../assets/index.js";
import { priceData } from "../constants/price.js";

const SelectionProduct = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 ">
      {priceData.map((p, index) => (
        <div key={index} className="md:max-w-60 max-w-xs bg-transparent mt-32 mr-12 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a className="w-4/5" href="#">
            <img className="rounded-t-lg" src={p.img} alt="product" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold text-indigo-700 tracking-tighter">
                {p.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-white">
              <h1 className="text-xl">${p.price}</h1>
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const BlogCard = ({ img, title }) => {
  return (
    <div className="md:max-w-60 max-w-xs bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img className="rounded-t-lg" src={img} alt="product" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold text-indigo-700 tracking-tighter">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-white">
          <h1 className="text-xl">$99.9</h1>
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buy Now
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SelectionProduct;
