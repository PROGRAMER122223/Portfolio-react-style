import React from "react";
import "./style.css";
import Background from "../../components/Background";
import imageLink from "../../assets/images/pic1.jpg"
import PageTitle from "../../components/PageTitle"
import Container from "../../components/Container"
import portfolioList from "../../utils/portfolioList.js"
import PortfolioCard from "../../components/PortfolioCard"
import Footer from "../../components/Footer"



function PortfolioPage () {
    return(
        <Background image = {imageLink}>
            <PageTitle 
                title = "Portfolio"
                description = "Here are some of my most recent work"
                paddingTop = {140}
                paddingBottom = {70}
            />
            <Container>
                {
                    portfolioList.map((item, id) =>{
                        return(
                            <PortfolioCard 
                                image = {item.img}
                                name = {item.name}
                                description = {item.description}
                                appLink = {item.appLink}
                                githubLink = {item.githubLink}
                                key = {id}
                            />
                        )
                    })
                }
            </Container>
            <Footer/>
        </Background>
    )
}

export default PortfolioPage