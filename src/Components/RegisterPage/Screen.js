import React from "react";
import Img from "../../IMG/ux-design.svg"
import "../../index.css";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from '../Routes/Cordinator'

export default function Screen() {


        const history = useHistory();
        return (
            <div>

               
               <button  onClick={() => goToLoginPage(history)} >Cadastrar</button>
               <button  onClick={() => goToLoginPage(history)} >Login</button>
            </div>
        )
    }




