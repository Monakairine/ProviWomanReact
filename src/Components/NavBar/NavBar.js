import React from "react";
import Img from "../../IMG/ux-design.svg"
import "../../index.css";



class NavBar extends React.Component {

    render() {
        return (
            <div>
                <ul id="nav">
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Nossa Missão</a></li>
                    <li><a href="#">Serviços Oferecidos</a></li>
                    <li><a href="#">Mentoria</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Login</a></li>

                </ul>
            </div>
        )
    }

}

export default NavBar
