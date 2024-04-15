
import ButtonGradient from "../../assets/svg/ButtonGradient";
import Footer from "../Footer";
import Header from "../Header";

export const MinPages = () => {
  return <></>;
};

export default function MainPage() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
<div className="mt-5 p-4 ">

  Hello i am Pager 👻
</div>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}
