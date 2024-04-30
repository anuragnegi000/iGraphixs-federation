import Header from "../../Header";
import Footer from "../../Footer";

export const Logo = () => {
  return (
    <>
      <div className="main-container">
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
