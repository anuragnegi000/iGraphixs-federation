import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "./Footer";
import Header from "./Header";
import UserForm from "./simUtility/UserForm";
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

        <div className=" w-full h-full border  border-blue-600 ">
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
          src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c811571b-bd4f-48fb-b13f-f5371c00113a/illustrator-artworks-showcase-106.jpg"
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
