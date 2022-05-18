import React from "react";
import "./style.css";
import Background from "../../components/Background";
import imageLink from "../../assets/images/pic1.jpg"
import PageTitle from "../../components/PageTitle"
import ContactCard from "../../components/ContactCard"
import Footer from "../../components/Footer"

function ContactMePage () {
    return(

        <Background image = {imageLink}>
                <PageTitle 
                paddingTop = {140}
                paddingBottom = {0}
                title = "Contact Me"
            />
            <ContactCard />
            <Footer/>

        </Background>
    )
}

export default ContactMePage


    