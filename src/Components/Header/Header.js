import React from "react";
import Logo from "../../IMG/LogoOficial.jpeg"
import "../../index.css";



class Header extends React.Component{

    render(){

        return (
            <div className='header'>
              <img src={Logo} className='header-imag' />
              <span className='header-title'>
                Mulheres UX
              </span>
              <span className="header-text">
                Apoie mulheres na área de UX/UI Designe
              </span>
            </div>
          );


    }

}

export default Header
