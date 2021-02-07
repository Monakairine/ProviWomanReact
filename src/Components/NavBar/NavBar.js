import React from "react";
import "../../index.css";
import { useHistory } from "react-router-dom";
import {goToLoginPage } from '../Routes/Cordinator';

export default function NavBar() {
// class NavBar extends React.Component {
    
//     render() {
        const history = useHistory();
        return (
            
            <div>
             
                <ul id="nav">
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Nossa Missão</a></li>
                    <li><a href="#">Serviços Oferecidos</a></li>
                    <li><a href="#">Mentoria</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a onClick={() => goToLoginPage(history)}>Login</a></li>
               </ul>
          
            </div>
        )
    }



// export default NavBar
