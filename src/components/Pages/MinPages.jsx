
export const MinPages = () => {
  return (
   <>
   
   <MainPage name={"aditya"} />
   <MainPage name={"anurag"}/>
   <MainPage name={"aditya"}/>
   <MainPage name={"aditya"}/>
   <MainPage name={"aditya"}/>
   <MainPage name={"aditya"}/>
   
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
