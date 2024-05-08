import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "./Footer";
import Header from "./Header";

const SelectionProduct = () => {
  return (
    <>
      <div className="main-container z-10 m-5 !px-0 !py-10  md-9 pt-16  ">
        <div className="header-container border border-t-blue-500">
          <Header />
        </div>

        <div>
          <Footer />
        </div>
        <ButtonGradient />
      </div>
    </>
  );
};

export default SelectionProduct;
