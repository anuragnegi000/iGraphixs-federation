import React from "react";
import { priceData } from "../constants/price.js";

const SelectionProduct = () => {
  return (
    <div className="flex mt-32 flex-wrap justify-center items-center md:justify-center gap-8 p-6">
      {priceData.map((p, index) => (
        <div
          key={index}
          className=" sm:max-w-40   md:max-w-60 sm:w-full max-w-xs bg-transparent mt-4 md:mr-12 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
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
              href="https://wa.me/message/ZPEYAJ2WUS26C1"
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

export default SelectionProduct;
