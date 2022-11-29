import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="joblify" className="logo" />
      </nav>
      <div className="container page">
        {/*info*/}
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            I'm baby tbh pork belly poutine, af kombucha +1 vegan. Scenester
            quinoa sustainable umami fit vinyl +1 cloud bread farm-to-table
            mukbang irony tilde. Cornhole vinyl hella, taxidermy humblebrag
            glossier austin. Gluten-free palo santo forage knausgaard, fixie
            small batch kitsch jianbing marfa selvage air plant lumbersexual
            yuccie mustache.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </main>
  );
};

export default Landing;
