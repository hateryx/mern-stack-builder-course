import React from "react";
import { Logo, FrontRow, Alert } from "../component";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
// to use global context and useNavigate later

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
  errorType: "Invalid username",
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

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHandler}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {values.showAlert && <Alert errorType={values.errorType} />}
        {/* username field */}
        {!values.isMember && (
          <FrontRow
            type="text"
            name="name"
            value={values.name}
            changeHandler={changeHandler}
          />
        )}

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

        {/* toggle function */}

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
