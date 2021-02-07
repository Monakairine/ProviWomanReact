import React from "react";
import Img from "../../IMG/ux-design.svg"
import "../../index.css";
import Register from '../RegisterPage/Register'


class NavBar extends React.Component {

    render() {
        return (
            <div>
                <ul id="nav">
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Nossos Produtos</a></li>
                    <li><a href="#">Mentorias</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="Register">Cadastro</a></li>
                </ul>
            </div>
        )
    }

}

export default NavBar
