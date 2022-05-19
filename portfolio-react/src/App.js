
    import React from "react";
    import { HashRouter as Router, Route,Routes} from "react-router-dom";
    import AboutMePage from "./pages/AboutMePage"
    import PortfolioPage from "./pages/PortfolioPage"
    import ContactMePage from "./pages/ContactMePage"
    import ResumePage from "./pages/ResumePage"
    import Header from "./components/Header"
 

    
    function App() {
      return (
        <Router>
          <main>
        <Routes>
          
          <Route exact path="/"  element={<AboutMePage/>} />         
          <Route exact path="/about"  element={<AboutMePage/>} />   
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/contact" element={<ContactMePage/>} />
          <Route path="/resume" element={<ResumePage/>} />
         
          </Routes>
          </main>
          <Header/>
        
          </Router >
      
      );
    }

export default App;
