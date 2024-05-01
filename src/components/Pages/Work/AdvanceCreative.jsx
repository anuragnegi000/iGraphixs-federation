import Header from "../../Header";
import Footer from "../../Footer";
import { ImageComponents } from "./LogoAd";
const HeadingText = "More Craetive ";
export const AdvanceCreative = () => {
  return (
    <>
      <div className="main-container z-10 m-5 !px-0 !py-10  md-9 pt-16  ">
        <div className="header-container border border-t-blue-500">
          <Header />
        </div>
        <div className="mt-28">
          <div className="heading">
            <Heading />
          </div>

          <div className="m-5 p-5">
            <div className="flex flex-row justify-center">
              <div className="  flex  w-[75%] justify-center   ">
                <div className=" m-4 gap-4 justify-center  ">
                  <ImageComponents />
                </div>
                <div className="  m-4 ">
                  <ImageComponents />
                </div>
                <div className="  m-4 ">
                  <ImageComponents />
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="  flex  w-[50%] justify-center   ">
            <div className=" m-4 gap-6 justify-center  ">
              <ImageComponents />
            </div>
            <div className="  m-4 ">
              <ImageComponents />
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
