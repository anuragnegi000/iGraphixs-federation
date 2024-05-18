import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "./Footer";
import Header from "./main.jsx";
import UserForm from "./simUtility/UserForm";
import {Animated} from "../assets/index.js";
import {banner1} from "../assets/index.js";
import {Concept} from "../assets/index.js";
import {emotes1} from "../assets/index.js";
import {illustration} from "../assets/index.js";
import {Jersey} from "../assets/index.js";
import {Mascot} from "../assets/index.js";
import {Poster} from "../assets/index.js";
import {Stream} from "../assets/index.js";
import {Thumbnail} from "../assets/index.js";
import {Vector} from "../assets/index.js";


const SelectionProduct = () => {
  return (
    <>
      <div className="main-container z-10 m-5 !px-0 !py-10  md-9 pt-16  ">
        <div className="header-container border border-t-blue-500">
          <Header />
        </div>
        <div
          className=" border border-blue-800 mt-28 md:flex flex-wrap
        justify-center md:m-8 md:p-16 md:gap-y-7.5 md:gap-x-9 p-4 grid
        grid-cols-1 gap-y-8 "
        >
          {" "}
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <div className=" space-y-4    z-10 m-5 !px-0 !py-10  md-9 pt-16  ">
          <UserForm />
        </div>
        <ButtonGradient />

        <Footer />
      </div>
    </>
  );
};

const BlogCard = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={Animated}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard1 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={banner1}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard2 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={Concept}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard3 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={emotes1}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard4 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={illustration}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard5 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={Jersey}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard6 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={Mascot}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard7 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={Poster}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard8 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={Stream}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard9 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={Thumbnail}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard10 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={Thumbnail}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
const BlogCard11 = () => {
  return (
    <div className="md:max-w-60  max-w-xs  bg-transparent border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="w-4/5" href="#">
        <img
          className="rounded-t-lg "
          src={Vector}
          alt="product.img"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold  text-indigo-700 tracking-tighter">
            Mascot Logo
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
