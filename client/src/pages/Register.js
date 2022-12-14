import React from "react";
import { Logo, FrontRow, Alert } from "../component";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/RegisterPage";

// to use global context and useNavigate later
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  // global context and useNavigate later
  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    loginUser,
    setupUser,
  } = useAppContext();

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      // previous version before refactor:  loginUser(currentUser);
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      // previous version before refactor:  registerUser(currentUser);
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User created! Redirecting...",
      });
    }
    //console.log(values);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHandler}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
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

        <button type="submit" className="btn btn-block" disabled={isLoading}>
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
