import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/img2.jpg";
import Project4 from "../assets/images/pic4.jpg";
import Project5 from "../assets/images/img5.jpg";
import Project6 from "../assets/images/project2.webp";



function PortfolioList(name, img,githubLink,appLink) {
    this.name = name;
    this.img = img;
    this.appLink = appLink;
    this.githubLink = githubLink;
};

const MagicHub = new PortfolioList(
    "Orlando Magic Fan Hub",
    Project1,   
    
    "https://github.com/admakinh/magic-fan-dashboard.git",
    "https://admakinh.github.io/magic-fan-dashboard/"
  
);

const HotdogProject = new PortfolioList(
    "HotdogProject",
     Project2,   
     "https://github.com/robertschwartz603/Project-2",
     "https://radiant-tundra-47110.herokuapp.com/"
);


const QuizgameApp= new PortfolioList(
    "QuizGame",
     Project3,   
  
     "https://github.com/PROGRAMER122223/Quiz-game-repo.git",
     "https://programer122223.github.io/Quiz-game-repo/"
     
);

const WeatherDashboard= new PortfolioList(
    "WeatherDashboard",
     Project4,   
     
     "https://github.com/PROGRAMER122223/Weather-Dashboard-repo.git",
     "https://programer122223.github.io/Weather-Dashboard-repo/"
     
     
);

const GeneratePassword= new PortfolioList(
    "GeneratePassword",
     Project5,   
   
     "https://github.com/PROGRAMER122223/generate-password-repo.git",
     "https://programer122223.github.io/generate-password-repo/"
     
);

const EmployeeTracker= new PortfolioList(
    "EmployeeTracker",
     Project6,   
    "https://github.com/PROGRAMER122223/Employee-tracker-System" ,
    "https://watch.screencastify.com/v/dI9EhJDnWZwdqbbm9i18"
);













let portfolioList = [MagicHub,HotdogProject,QuizgameApp,WeatherDashboard,GeneratePassword, EmployeeTracker];

export default portfolioList;