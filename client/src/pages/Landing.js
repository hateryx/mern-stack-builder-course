import React from "react";

import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";

import { Logo } from "../component";
// alternative: import Logo from "../component/Logo";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <Logo />
      <div className="container page">
        {/*info*/}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
        
 
  <p>The ultimate tool for helping you find your dream job! 
    Our app offers a range of features to help you stay organized and on top of your job search.</p>
  <p>Keep track of all your job applications in one place. Our app allows you to easily see the status of each application and set reminders for follow-up tasks.</p>
  <p>Don't waste any more time on a disorganized job search. Try our job tracking app today and take control of your career!</p>


          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
