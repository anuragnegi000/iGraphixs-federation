import Header from "../../Header";
import Footer from "../../Footer";

export const AdvanceCreative = () => {
  return (
    <>
      <div className="main-container z-10 m-5 !px-0 !py-10  md-9 pt-16  ">
        <div className="header-container">
          <Header />
        </div>

        <div className="body-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AdvanceCreative;
