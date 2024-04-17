import ButtonGradient from "../../assets/svg/ButtonGradient"
import Footer from "../Footer"
import Header from "../Header"

<<<<<<< HEAD:src/components/Pages/MinPages.jsx
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
=======
export const Thumbnail = () => {
  return (
   <>

   <Header/>
   
   <MainPage name={"aditya"} />
   <MainPage name={"anurag"}/>
   <MainPage name={"aditya"}/>
   <MainPage name={"aditya"}/>
   <MainPage name={"aditya"}/>
   <MainPage name={"aditya"}/>

   <Footer/>
   <ButtonGradient/>
   
   </>
  )
}
>>>>>>> d7ccb5f335bbdfe7cfda702910a2658dcd25310d:src/components/Pages/Thumbnail.jsx

  Hello i am Pager 👻
</div>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default Thumbnail;
