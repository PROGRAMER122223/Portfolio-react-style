import React from "react";
import "./style.css";

function Footer(){ 
    return(
        <footer className="uk-text-center uk-text-middle footer uk-position-relative">
              <div className="uk-text-center uk-text-middle">
                            <a uk-icon="icon: github-alt ; ratio: 1.5" className="contact-icon contact-link-icon" href="https://github.com/programer122223"  target="_blank"></a>
                            <a uk-icon="icon: mail ; ratio: 1.5" className="contact-icon contact-link-icon" href="mailto:pratibha.indel@gmail.com"></a>
                            <a uk-icon="icon: linkedin ; ratio: 1.5" className="contact-icon contact-link-icon" href="https://www.linkedin.com/in/xxx/" target="_blank"></a>
                        </div>
        </footer>        
    )
}

export default Footer;