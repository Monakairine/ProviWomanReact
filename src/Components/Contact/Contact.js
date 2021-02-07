import React from "react";
import "../../index.css";



class Contact extends React.Component {

    render() {

        return (
            <div className='contact-container bg-grey'>
                <span className="div-title">Entre em contato</span>
                <div className='contact-form'>
                    <div id='sect1'>
                        <span>Entre em contato para mais informações e dúvidas e te responderemos em 24h.</span>
                        <span>
                            <i className="fas fa-map-marker-alt"></i>
                              Brasil
                          </span>
                        <span>
                            <i className="fas fa-mobile-alt"></i>
                              00 9999-9999
                          </span>
                        <span>
                            <i className="far fa-envelope"></i>
                              mulheresUX@gmail.com
                          </span>
                    </div>

                    <div id='sect2'>
                        <span>
                            Contato
                          </span>

                        <input type="text" placeholder="email" className="input-field" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
                        <button className="contact-btn">Enviar</button>
                    </div>
                </div>
            </div>
        );


    }

}

export default Contact