import React from "react";
import "../../index.css";
import faceLogo from "../../IMG/facebook.svg"
import instaLogo from "../../IMG/instagram.svg"
import twitterLogo from "../../IMG/twitter.svg"




class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <p> Fique por dentro das atualizações também em nossas redes sociais </p>
                <div className = "footer-div-with-imgs">
                    <a target="_blank" href="https://www.facebook.com"> <img src={faceLogo} className="footer-img" alt="facebook" /></a>
                    <a target="_blank" href="https://www.instagram.com"> <img src={instaLogo} className="footer-img" alt="instagram" /></a>
                    <a target="_blank" href="https://www.twitter.com"> <img src={twitterLogo} className="footer-img" alt="twitter" /></a>
                </div>
            </div>

        )
    }

}

export default Footer