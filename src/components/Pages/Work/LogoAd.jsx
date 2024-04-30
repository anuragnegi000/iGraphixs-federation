import Header from "../../Header";
import Footer from "../../Footer";

export const LogoAd = () => {
  return (
    <>
      <div className="main-container  z-10 m-5 !px-0 !py-10  md-9 pt-16 ">
        <div className="header-container">
          <Header />
        </div>
        <div className=" image-container flex flex-row mt-28 pl-10 ">
          <ImageComponents />
          <ImageComponents />
          <ImageComponents />
        </div>
        <div className="body-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

const ImageComponents = () => {
  return (
    <>
      <div className=" border border-t-fuchsia-800 m-4 p-4 justify-center">
        <article className="group justify-center">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-56 border border-t-fuchsia-50 rounded-xl object-fill justify-center shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4 border border-e-yellow-700">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 text-center">
                Finding the Journey to Mordor
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 m-auto text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
            </p>
          </div>
        </article>
      </div>
    </>
  );
};
export default LogoAd;
