import React from "react";

import "./style.css";
import Background from "../../components/Background";
import imageLink from "../../assets/images/pic1.jpg"
import PageTitle from "../../components/PageTitle"
import Container from "../../components/Container"
import Resume from "../../assets/resume/resume.docx"
import Footer from "../../components/Footer";


function ResumePage () {
    return(
        <Background image = {imageLink}>
               <PageTitle 
                title = "Resume"
                description = "Here is link to download Resume "
                paddingTop = {140}
                paddingBottom = {70}
            />
            
      <div className="viewFour" id="resume">
        <div className="row">
          <div className="col-md">
          </div>
            <a href={Resume} target="_blank" className="resLink"><h3  id="resumeTitle" >Download Resume</h3></a>
        </div>
      </div>
         <Footer/>   
        </Background>
    )
}

export default ResumePage