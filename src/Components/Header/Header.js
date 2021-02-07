import React from "react";
import Logo from "../../IMG/ux-design-logo2.svg"
import "../../index.css";



class Header extends React.Component{

    render(){

        return (
            <div className='header'>
              <span className='header-title'>
                Mulheres UX
                  </span>
              <br />
              <span className="header-text">
                Apoie mulheres na área de UX/UI Designe
                     <img src={Logo} className='header-imag' />
              </span>
            </div>
          );


    }

}

export default Header
