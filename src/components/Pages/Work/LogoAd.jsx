import Header from "../../Header";
import Footer from "../../Footer";
const BigText = "Creative Logo Creation and Service ";
export const LogoAd = () => {
  return (
    <>
      <div className="main-container  z-10 m-5 !px-0 !py-10  md-9 pt-16 ">
        <div className="header-container">
          <Header />
        </div>
        <Heading />
        <div className="  md:flex md:flex-row  sm:gap-4  md:flex-shrink-0 border border-t-black border-pink-600 m-5 p-9 mt-28  ">
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

const Heading = () => {
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
const ImageComponents = () => {
  return (
    <>
      <div>
        <article className=" mt-4 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-white/90"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default LogoAd;
