import Header from "../../Header";
import Footer from "../../Footer";
import { Logo2 } from "../../../constants/index";
import {mascot_logo} from "../../../assets/index"
import { vector_logo } from "../../../assets/index";
import { concept_logo } from "../../../assets/index";
import { emotes } from "../../../assets/index";
import { jersey_design } from "../../../assets/index";
import { animated_logo } from "../../../assets/index";
import { posters } from "../../../assets/index";
import { banner } from "../../../assets/index";

export const LogoAd = () => {
  const BigText = "Creative Logo Creation and Service ";
  return (
    <>
      <div className="main-container  z-10 m-5 !px-0 !py-10  md-9 pt-16 ">
        <div className="header-container">
          <Header />
        </div>
        <Heading headinContnet={BigText} />
        <div className="  md:flex md:flex-row  sm:gap-4 md:flex-shrink-0 border border-t-black border-l-black border-pink-600 m-5 p-9 mt-28  ">
          <ImageComponents />

          <ImageComponents2 />
          <ImageComponents3 />
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
            Creative Logo Creation and Service
          </span>
        </div>
      </div>
    </>
  );
};
export const ImageComponents = () => {
  return (
    <>
      <div>
        <a href="https://www.behance.net/gallery/135017457/Mascot-Logo">
        <article className=" mt-4 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src={mascot_logo}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white ">Mascot logo</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Exclusive Mascot Logo designs created By our  Designers for different organisations, teams and individuals creators!
              </p>
            </div>
          </div>
        </article>
        </a>
      </div>
    </>
  );
};

export const ImageComponents2 = () => {
  return (
    <>
      <div>
        <a href="https://www.behance.net/gallery/135020029/Vector-Sketch-Logo">
        <article className=" mt-4 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src={vector_logo}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">Vector Logo</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Exclusive Vector logo designs created By our  Designers for different organisations, teams and individuals creators!
              </p>
            </div>
          </div>
        </article>
        </a>
      </div>
    </>
  );
};

export const ImageComponents3 = () => {
  return (
    <>
      <div>
        <a href="https://www.behance.net/gallery/135021326/Concept-Logo">
        <article className=" mt-4 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src={concept_logo}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
               
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">Concept logo</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Exclusive Concept logo designs created By our  Designers for different organisations, teams and individuals creators!
              </p>
            </div>
          </div>
        </article>
        </a>
      </div>
    </>
  );
};

export const ImageComponentsADV1 = () => {
  return (
    <>
      <div>
        <a href="https://www.behance.net/gallery/135127959/Jersey">
        <article className=" mt-4 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src={jersey_design}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">Jersey</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                natus non, facere accusamus quasi, praesentium eaque ducimus
                voluptatibus est optio itaque recusandae, quam doloribus
                molestias. Quis consectetur itaque ad excepturi cupiditate earum
                maxime quia nemo dolores ipsum, error esse quae.
              </p>
            </div>
          </div>
        </article>
        </a>
      </div>
    </>
  );
};
export const ImageComponentsADV2 = () => {
  return (
    <>
      <div>
        <a href="https://www.behance.net/gallery/169076589/Emotes">
        <article className=" mt-4 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src={emotes}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">Emotes</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                natus non, facere accusamus quasi, praesentium eaque ducimus
                voluptatibus est optio itaque recusandae, quam doloribus
                molestias. Quis consectetur itaque ad excepturi cupiditate earum
                maxime quia nemo dolores ipsum, error esse quae.
              </p>
            </div>
          </div>
        </article>
        </a>
      </div>
    </>
  );
};

export const ImageComponentsADV3 = () => {
  return (
    <>
      <div>
        <a href="https://www.behance.net/gallery/135128469/Animated-Logos">
        <article className=" mt-4 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src={animated_logo}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
               
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">Animated Logos</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                natus non, facere accusamus quasi, praesentium eaque ducimus
                voluptatibus est optio itaque recusandae, quam doloribus
                molestias. Quis consectetur itaque ad excepturi cupiditate earum
                maxime quia nemo dolores ipsum, error esse quae.
              </p>
            </div>
          </div>
        </article>
        </a>
      </div>
    </>
  );
};

export const ImageComponentsADV4 = () => {
  return (
    <>
      <div>
        <a href="https://www.behance.net/gallery/135127853/Banners">
        <article className=" mt-4 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src={banner}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
               
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">Banners</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                natus non, facere accusamus quasi, praesentium eaque ducimus
                voluptatibus est optio itaque recusandae, quam doloribus
                molestias. Quis consectetur itaque ad excepturi cupiditate earum
                maxime quia nemo dolores ipsum, error esse quae.
              </p>
            </div>
          </div>
        </article>
        </a>
      </div>
    </>
  );
};

export const ImageComponentsADV5 = () => {
  return (
    <>
      <div>
        <a href="https://www.behance.net/gallery/135127683/Posters">
        <article className=" mt-4 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src={posters}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
               
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">Posters</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                natus non, facere accusamus quasi, praesentium eaque ducimus
                voluptatibus est optio itaque recusandae, quam doloribus
                molestias. Quis consectetur itaque ad excepturi cupiditate earum
                maxime quia nemo dolores ipsum, error esse quae.
              </p>
            </div>
          </div>
        </article>
        </a>
      </div>
    </>
  );
};


export default LogoAd;
