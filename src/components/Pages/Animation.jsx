import React from 'react'
import Header from '../Header'

export default function Animation (){
  return (
    <>
    <Header/>
    <Main name={"anurag"}></Main>
    <Main name={"anurag"}></Main>
    <Main name={"anurag"}></Main>
    <Main name={"anurag"}></Main>
    <Main name={"anurag"}></Main>
    <Main name={"anurag"}></Main>
    <Footer/>
    </>   
  )
}


function Main({name}){
    return (
        <>
        <h1>Hey there {name}</h1>
        </>
    )
}