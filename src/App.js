import React from "react";
import "./index.css";
import Header from "./Components/Header/Header"
import NavBar from "./Components/NavBar/NavBar"
import Contact from "./Components/Contact/Contact"
import Contents from "./Components/Contents/Contents"
import Footer from "./Components/Footer/Footer"
import LoginPage from './Components/RegisterPage/LoginPage'
import Register from './Components/RegisterPage/Register'

export default function App() {

  return (
    <div id='body'>
      <Header/>
      <NavBar/>
      <Contents/>
      <Contact/>
      <Footer/> 
    </div>

 );

}









