import React from "react";
import { Logo, FrontRow } from "../component";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
// to use global context and useNavigate later

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
// if possible prefer local state
// global state

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global context and useNavigate later

  const changeHandler = (e) => {
    setValues(e.target.value);
    console.log(values);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    //setValues(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHandler}>
        <Logo />
        <h3>Login</h3>
        {/* username field */}
        <FrontRow
          type="text"
          name="name"
          value={values.name}
          changeHandler={changeHandler}
        />

        {/* email field */}
        <FrontRow
          type="email"
          name="email"
          value={values.email}
          changeHandler={changeHandler}
        />
        {/* password field */}
        <FrontRow
          type="password"
          name="password"
          value={values.password}
          changeHandler={changeHandler}
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Not a member yet?
          <Link to="/Register"> Register</Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
