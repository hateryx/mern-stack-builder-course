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
          <p>
            I'm baby tbh pork belly poutine, af kombucha +1 vegan. Scenester
            quinoa sustainable umami fit vinyl +1 cloud bread farm-to-table
            mukbang irony tilde. Cornhole vinyl hella, taxidermy humblebrag
            glossier austin. Gluten-free palo santo forage knausgaard, fixie
            small batch kitsch jianbing marfa selvage air plant lumbersexual
            yuccie mustache.
          </p>
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
