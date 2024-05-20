import React from "react";

const LastThreeCardsComponent = ({ cards }) => {
  return (
    <div className=" lg: justify-center lg:items-center gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 lg:gap-x-8 lg:pl-12 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-transparent mt-8 mx-auto border border-gray-200 rounded-lg shadow "
          >
            <a className="w-full" href="#">
              <img
                className="rounded-t-lg w-full"
                src={card.img}
                alt="product"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-indigo-700 tracking-tighter">
                  {card.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-white">
                <h1 className="text-xl">${card.price}</h1>
              </p>
              <a
                href="https://wa.me/yourwhatsappnumber"
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
    </div>
  );
};

export default LastThreeCardsComponent;
