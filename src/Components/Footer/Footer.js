import React from "react";
import "../../index.css";
import faceLogo from "../../IMG/facebook.svg"
import instaLogo from "../../IMG/instagram.svg"
import twitterLogo from "../../IMG/twitter.svg"




class Footer extends React.Component {

    render() {
        return (
            <div class="footer">
                <p> Fique por dentro das atualizações também em nossas redes sociais </p>
                <a target="_blank" href="https://www.facebook.com"> <img src={faceLogo} className="footer-img" alt="facebook" /></a>
                <a target="_blank" href="https://www.instagram.com"> <img src={instaLogo} class="footer-img" alt="instagram" /></a>
                <a target="_blank" href="https://www.twitter.com"> <img src={twitterLogo} class="footer-img" alt="twitter" /></a>
            </div>

        )
    }

}

export default Footer