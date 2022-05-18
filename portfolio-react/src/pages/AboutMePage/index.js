import React from "react";
import "./style.css";

import imageLink from "../../assets/images/pic1.jpg"
import Background from "../../components/Background"
import About from "../../components/About"
import Footer from "../../components/Footer"




function AboutMePage () {
    return(


        <Background image = {imageLink}>
          
          <About /> 
          <Footer/> 
       
         </Background>
    
        
    )
}

export default AboutMePage