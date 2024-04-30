import Header from "../../Header";
import Footer from "../../Footer";
import { ImageComponents } from "./LogoAd";
const HeadingText = "More Craetive ";
export const AdvanceCreative = () => {
  return (
    <>
      <div className="main-container z-10 m-5 !px-0 !py-10  md-9 pt-16  ">
        <div className="header-container">
          <Header />
        </div>
        <div className="mt-28">
          <div className="heading">
            <Heading />
          </div>

          <div className="m-5 p-5">
            <div className=" md:grid md:grid-cols-3 sm:flex sm:flex-col p-3 m-5 gap-4  ">
              <div>
                {" "}
                <ImageComponents />{" "}
              </div>
              <div>
                <ImageComponents />{" "}
              </div>
              <div>
                <ImageComponents />{" "}
              </div>{" "}
              <div className="col-span-3">
                <ImageComponents />{" "}
              </div>{" "}
              <div className="col-start-1 col-end-3">
                <ImageComponents />{" "}
              </div>{" "}
              <div>
                <ImageComponents />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="body-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export const Heading = () => {
  return (
    <>
      <div className=" mt-28">
        <div class="text-5xl text-center text-opacity-120 font-extrabold ...">
          <span class="bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            AdvanceCreative Logo Creation and Service
          </span>
        </div>
      </div>
    </>
  );
};
export default AdvanceCreative;
