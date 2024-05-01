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
        <div className="justify-center mt-28">
  <div className="sm:flex sm:flex-col-1 sm:flex-col-1 md:flex-wrap md:justify-center">
    <div className="flex sm:w-[75%] md:w-[75%] justify-center flex-col sm:flex-row items-center md:grid md:grid-cols-3 md:gap-4 md:justify-center">
      <div class="m-4 gap-4 justify-center">
        <ImageComponents class="w-auto h-auto max-w-full" />
      </div>
      <div class="m-4 gap-4 justify-center">
        <ImageComponents class="w-auto h-auto max-w-full" />
      </div>
      <div class="m-4 gap-4 justify-center">
        <ImageComponents class="w-auto h-auto max-w-full" />
      </div>
    </div>
  </div>
</div>


        <div className="md:flex justify-center">
          <div className="sm:flex sm:flex-col-1 sm:w-[50%] md:w-[50%] md:grid md:grid-cols-2 md:gap-6 md:justify-center">
            <div className="m-4 justify-center">
              <ImageComponents class="w-auto h-auto max-w-full" />
            </div>
            <div className="m-4 justify-center">
              <ImageComponents class="w-auto h-auto max-w-full" />
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
