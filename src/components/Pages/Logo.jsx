import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ButtonGradient from '../../assets/svg/ButtonGradient'

export default function Logo () {
  return (
    <>
    <Header/>
    <Main name={"anurag"}></Main>
    <Main name={"anurag"}></Main>
    <Main name={"anurag"}></Main>
    <Main name={"anurag"}></Main>
    <Main name={"anurag"}></Main>
    <Footer/>
    <ButtonGradient/>

    </>  
  )
}

function Main({name}){
  return <>
  
  <h1>hello {name}</h1>

  </>
}
