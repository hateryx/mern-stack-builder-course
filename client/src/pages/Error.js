import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

export const Error = () => {
  return (
    <Wrapper className="full-page">
      <img src={img} alt="not found"></img>
      <h3>You got the wrong link.</h3>
      <p>Please get back to our home page.</p>
      <Link to="/">Go back to home</Link>
    </Wrapper>
  );
};

export default Error;
