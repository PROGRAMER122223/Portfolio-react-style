import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Resume from "../../assets/resume/"

function Background(props){
    return(
        <div className="uk-position-relative">
            <div className="uk-position-top">
                <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar = "true">
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav uk-visible@m">
                            <li><Link to = "/about">About Me</Link></li>
                            <li><Link to = "/portfolio">Portfolio</Link></li>
                            <li><Link to = "/resume">Resume</Link></li>
                            <li><Link to = "/contact">Contact</Link></li>
                        </ul>
                      </div>
                </nav>
            </div>
        </div>    
    )
}

export default Background