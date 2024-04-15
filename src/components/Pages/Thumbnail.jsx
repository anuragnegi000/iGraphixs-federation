import ButtonGradient from "../../assets/svg/ButtonGradient"
import Footer from "../Footer"
import Header from "../Header"

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


function MainPage({name}){
    return (
        <>
        <h1>hello {name}</h1>
        </>
    )
}

export default Thumbnail;
