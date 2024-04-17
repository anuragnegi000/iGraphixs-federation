import React from 'react'
import Header from '../Header'
import Footer from "../Footer"

export default function Advanced (){
  return (
    <>
    <Header/>
 <h2>hello </h2>
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