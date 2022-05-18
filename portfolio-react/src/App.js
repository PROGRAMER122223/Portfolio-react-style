
    import React from "react";
    import { HashRouter as Router, Route } from "react-router-dom";
    import AboutMePage from "./pages/AboutMePage"
    import PortfolioPage from "./pages/PortfolioPage"
    import ContactMePage from "./pages/ContactMePage"
    import ResumePage from "./pages/ResumePage"
    import Navbar from "./components/Navbar"
 

    
    function App() {
      return (
        <Router>
         
          <main>
          <Route exact path="/"  component={AboutMePage} />
          <Route path="/about"  component={AboutMePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={ContactMePage} />
          <Route path="/resume" component={ResumePage} />
          </main>
          <Navbar/>


          </Router >
      


      );
    }

export default App;
