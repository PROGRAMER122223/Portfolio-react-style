import React from 'react';
import './style.css';
import Mugshot from '../../assets/images/pic2.jpg'

function About(){
    return(
        <div className = "uk-container">
            <div className = "uk-text-center">
                <div className = "about-container">
                    <div className = "about-me">
                    <img id = "mugshot" src={Mugshot} alt="Me" style={{ width: 180 }} />
                        <h1 className="about-me-title uk-heading-divider">Prathibha Vadakkini Purakkal</h1>
                        <div className = "about-text-container"> 
                            <p>About me:
                    <b>Hi</b>, I'm a computer science graduate in software systems, looking to start as a full stack web developer.</p>
                    <p>Currently I'm based in Connecticut, USA, looking forward to a great opportunity to show my skills.</p>
                    <p> At present, pursuing a certification in BootCampSpot from the University of New Hampshire. </p>
                    <p>I have a deep desire to excel and continuously improve in my work. Learn more about my journey above.</p>
               
                                              
                            
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About