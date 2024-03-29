# mern-stack-builder-course

#### 1) Setup: React App

- create <b>client</b> folder
- open terminal

```sh
cd client
```

```sh
npx create-react-app .
```

```sh
npm start
```

- set editor/browser side by side
- copy/paste assets from complete project

Other minor changes:

- change title in public/index.html
- replace favicon.ico in public
- resource [Generate Favicons](https://favicon.io/)

#### 2) NPM Install: Normalize.css and Global Styles

- CSS in JS (styled-components)
- saves times on the setup
- less lines of css
- speeds up the development
- normalize.css
- small CSS file that provides cross-browser consistency in the default styling of HTML elements.
- [normalize docs](https://necolas.github.io/normalize.css/)

```sh
npm install normalize.css
```

`done at \client`

- import 'normalize.css' in index.js
- SET BEFORE 'index.css'
- replace contents of index.css
- if any questions about normalize or specific styles
- Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
- Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)

#### 3) Building: Landing Page

- Create pages directory in the source
- get something on the screen
- react router and styled components right after

- for now Landing.js
- create component (snippets extension)
- setup basic return

```js
<h4>Landing Page<h4>
```

- import logo.svg and main.svg
- import Landing in App.js and render

#### 4) NPM Install: Styled-Components || Using Styled Components

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
npm install styled-components
```

```js
import styled from "styled-components";

const El = styled.el`
  // styles go here
`;
```

- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs
- style entire react component

```js
const Wrapper = styled.el``;

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  );
};
```

- Only responsible for styling
- 'Wrappers' folder contain the wrapper to be used for each file
- For every file (js), there is one (1) wrapper

#### 5) Resources: Logo and Images

- [Logo Resources] Figma
- [Image Resources] (https://undraw.co/)

Note: For images, svg file type should be picked.

#### 6) Building: Logo Component

- Created the <b>components</b> folder in source
- Created the Logo.js component and integrated it to the Landing page.

Note:

- A index.js can be created in the <b>components</b> to define Logo component.
  This is to do away/ manage too much components.

#### 7) NPM Install: React-Router || Set-up: React Router

- Teacher's Pick: Version 6
- Refer here on the documentation for [React Router Docs](https://reactrouter.com/docs/en/v6)

- Open the terminal and do below:

```sh
npm install history@5 react-router-dom@6
```

- Once installed, we can now build our React Router.
- Import the following in the App.js

```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

- The App.js is used to define the routepath structure, hence the following are built:

```js

<BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Dashboard</div>} />
      <Route path="/register" element={<div>Register</div>} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<div>Error</div>}>
    </Routes>
</BrowserRouter>

```

- The rationale for using Router is to manage nested routing and nested page structure. I suppose this will be demonstrated in the future section.
- The nav structure is to be temporarily put inside the app.js,
- Technical debt/ challenge: Create a navbar component with links defined.

```js
<nav>
  <Link to="/">Dashboard</Link>
  <Link to="/register">Register</Link>
  <Link to="/landing">Home</Link>
</nav>
```

- Set-up the Link in the Landing.js by importing the Link and replacing button into Link class.

```js
import { Link } from "react-router-dom";

return (
  <Link to="/register" className="btn btn-hero">
    Login / Register
  </Link>
);
```

#### 8) Setup Pages

- Create Error, Register and Dashboard pages
- Create an index.js for pages to facilitate exporting of the Error, Register and Dashboard pages
- Import the pages in the App.js with the use of index.js import reference
- Update the elements in the router to point to the pages in jsx format
- Remove the temporary nav bar

#### 9) Building: Error Page

- Define the error info
- Import the link(route), wrapper and the image

```js
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

return (
  <Wrapper className="full-page">
    <div>
      <img src={img} alt="not found" />
      <h3>text</h3>
      <p>text</p>
      <Link to="/">back home</Link>
    </div>
  </Wrapper>
);
```

#### 10) Major Build: Register Page (Initial)

- Interestingly, the Register page will be built through toggling the Login and Register components.

```js
import { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
// global context and useNavigate later

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
// if possible prefer local state
// global state

function Register() {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>

          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
}
```

#### 10-A) Register Page: FormRow Component

- Create FormRow.js in <b>components</b>
- Setup the component for email and password
- Transfer/ convert the input from Register into FrontRow component
- Setup the props for FrontRow "type,name,value"

```js
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
```

#### 10-B) Alert Component

- Create Alert.js in <b>components</b>
- Setup state setting for Alert component in the Register page.
- Use case objective: UI component for input validation - show error message when input value is invalid.

```js
const Alert = () => {
  return <div className="alert alert-danger">alert goes here</div>;
};

export default Alert;
```

#### 10-C) Register Page Enhancement: Toggle Login vs. Register Fields

- Toggle is based on condition: Is user a member?
- If member = () => Login page, if not () => Register

```js
const toggleMember = () => {
  setValues({ ...values, isMember: !values.isMember });
};

return (
  <Wrapper>
    {/* control h3 */}

    <h3>{values.isMember ? "Login" : "Register"}</h3>

    {/* toggle name */}

    {!values.isMember && (
      <FormRow
        type="text"
        name="name"
        value={values.name}
        handleChange={handleChange}
      />
    )}

    {/* right after submit btn */}
    {/* toggle button */}

    <p>
      {values.isMember ? "Not a member yet?" : "Already a member?"}

      <button type="button" onClick={toggleMember} className="member-btn">
        {values.isMember ? "Register" : "Login"}
      </button>
    </p>
  </Wrapper>
);
```

#### 11-a) Global Context

- Create <b>context</b> directory in src folder
- actions.js
- reducer.js
- appContext.js - Children is used as it is tantamount to the application.

```js
import React, { useState, useReducer, useContext } from "react";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
```

- Update index.js to wrap App with AppProvider to broadcast the context.

```js
import { AppProvider } from "./context/appContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

- Update the Register.js to enable the use of global context. Sampled the showAlert to change it from local to global state.

```js
import { useAppContext } from "../context/appContext";

const { isLoading, showAlert } = useAppContext();
```

#### 11-b) Reference: useReducer

- [React Tutorial](https://youtu.be/iZhV0bILFb0)
- useReducer vs Redux
- multiple reducers vs one

#### 11-c) Set-up: useReducer

- Define the reducer.js to set-up dispatch function for useReducer

```js
reducer.js;

const reducer = (state, action) => {
  throw new Error(`no such action :${action.type}`);
};
export default reducer;
```

- Update the appContext.js to replace useState into useReducer functions

```js
appContext.js;

import reducer from "./reducer";

const [state, dispatch] = useReducer(reducer, initialState);
```

#### 12) Building: Display Alert (Part 1)

- Setup action.js for the dispatch function - display alert.

```js
actions.js;

export const DISPLAY_ALERT = "SHOW_ALERT";
```

- Update the import of reducer.js and appContext.js to pass data on display alert dispatch
- Define the displayAlert function as part of global context. Don't forget to update also the AppContext provider.

```js
appContext.js;

const displayAlert = () => {
  dispatch({ type: DISPLAY_ALERT });
};
```

- Define the conditions for display alert to dispatch.

```js
reducer.js;

if (action.type === DISPLAY_ALERT) {
  return {
    ...state,
    showAlert: true,
    alertType: "danger",
    alertText: "Please provide all values!",
  };
}
```

- Update the Alert.js to enable dynamic/ conditional output using useContext from appContext.js

```js
Alert.js in Components;

import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};
```

#### 12) Building: Display Alert (Part 2)

- [JS Nuggets - Dynamic Object Keys](https://youtu.be/_qxCYtWm0tw)

- [Update] Register.js : Refactor the changeHandler to optimize setting of state.

```js
Register.js;

const changeHandler = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};
```

- [Update] Register.js : Added input validation logic to display alert.

```js
Register.js;

const submitHandler = (e) => {
  e.preventDefault();
  const { name, email, password, isMember } = values;
  if (!email || !password || (!isMember && !name)) {
    displayAlert();
    return;
  }
  console.log(values);
};
```

#### 12) Building: Clear Alert

- technically optional

```js
actions.js;

export const CLEAR_ALERT = "CLEAR_ALERT";
```

- setup imports (reducer and appContext)

```js
reducer.js;

if (action.type === CLEAR_ALERT) {
  return {
    ...state,
    showAlert: false,
    alertType: "",
    alertText: "",
  };
}
```

```js
appContext.js;

const displayAlert = () => {
  dispatch({
    type: DISPLAY_ALERT,
  });
  clearAlert();
};

const clearAlert = () => {
  setTimeout(() => {
    dispatch({
      type: CLEAR_ALERT,
    });
  }, 3000);
};
```

#### 13) MAJOR SET-UP: Setup Server

- stop the dev server in client
- cd ..
- start setting up our server
- setup package.json

```sh
npm init -y
```

- create server.js
- console.log('server running...')

```sh
node server
```

#### 13-Notes) ES6 vs CommonJS

```js
CommonJS;

const express = require("express");
const app = express();
```

```js
ES6;

import express from "express";
const app = express();
```

- file extension .mjs

```js
package.json

"type":"module"
```

#### 14) Nodemon and Basic Express Server

```sh
npm install nodemon --save-dev
```

```js
package.json

"start":"nodemon server"

```

```sh
npm install express
```

```js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
```

#### 15) Not Found Middleware

- in the root create <b>middleware</b> folder
- not-found.js
- setup function
- return 404 with message 'Route does not exist'
- import in server.js
- make sure to use .js extension
- place after home route

#### 16) Error Middleware

- in the middleware create error-handler.js
- setup function
- accept 4 parameters, first one error
- log error
- return 500
- json({msg:'there was an error'})
- import in the server.js
- make sure to use .js extension
- place it last
- eventually handle Mongoose Errors, just like in the node-express
- showcase with async errors

#### 17-A) ENV Variables

```sh
npm install dotenv
```

- import dotenv from 'dotenv'
- dotenv.config()

- create .env
- PORT=4000
- .gitignore
- /node_modules
- .env

#### 17-B) Set-up MongoDB Account

- Configure Network Access - Add IP Access List Entry -> Allow Access Anywhere
- Connect your application to database!
- Technical Debt: connection string

#### 17-C) Connect to MongoDB

- switched back to PORT=5000
- remove Error from '/'

- existing MongoDB Atlas Account

```sh
npm install mongoose
```

- create <b>db</b> folder
- create connect.js
- setup connectDB(url)
- in server.js create start() function
- get connection string
- setup as MONGO_URL in .env
- Update the connection string to include the password and DB name

#### 17-D) Auth Controller and Route Structure

- Create <b>controllers</b> folder

- Define authController.js and therein, create async functions for the register, login, updateUser

- All controllers should be in async mode

```js
export { register, login, updateUser };
```

- return res.send('function name')
- create <b>routes</b> folder
- authRoutes.js
- setup express router
- import functions from authController.js

```js
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(updateUser);

export default router;
```

- import authRouter in server.js

```js
app.use("/api/v1/auth", authRouter);
```

#### 17-E) Jobs Controller and Route Structure

- jobsController.js
- create async functions

```js
export { createJob, deleteJob, getAllJobs, updateJob, showStats };
```

- return res.send('function name')

- jobsRoutes.js
- setup express router
- import functions from jobsController.js

```js
router.route("/").post(createJob).get(getAllJobs);
// remember before :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
```

- in server.js jobsRouter

```js
app.use("/api/v1/jobs", jobsRouter);
```

#### 18-E) Test Routing thru Postman

- URL global var
- JOBIFY Collection
- auth and jobs folders
- setup routes

#### 19) Build: User Model

- <b>models</b> folder
- User.js
- setup schema
- name, email, password, lastName, location
- all {type:String}

#### 19-A) Email Validator

```js
validate:{
  validator:(field)=> {return 2 > 1},
  message:'Please provide valid email'
  }
```

- Install validator package for email
  Note: [Validator Package](https://www.npmjs.com/package/validator)

```sh
npm install validator
```

- import in User.js
- validator.isEmail

#### 20) Register User - Initial Setup

- Define UserSchema for Users
- import User model
- setup temporary try/catch
- await User.create(req.body)
- if success 201 with json({user}) (temp)
- if error 500 with json({msg:'there was an error'})
- Test should be through PostMan and checked through MongoDB

#### 21) Pass Error to Error Handler

- next(error)

#### 22) Express-Async-Errors Package

- remove try/catch
- [Express-Async-Errors](https://www.npmjs.com/package/express-async-errors)

```sh
npm install express-async-errors

```

- in server.js
- import 'express-async-errors'

- use throw Error('error') instead of next(error)

#### 23) Http Status Codes

- constants for status codes
- personal preference
- provides consistency
- less bugs
- easier to read/manage

- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)

```sh
npm install http-status-codes
```

- import/setup in authController and error-handler
- setup defaultError

#### 24) Refactor ErrorHandler Codes

- Create errors folder component
- Define custom-api, bad-request, not-found, index.js files

- add proper imports
- setup index.js just like in the front-end
- import {BadRequestError} in authController
- gotcha "errors/index.js"

#### 25) Build: Hashing Passwords

- Passwords sent to the database are hashed
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)

```sh
npm install bcryptjs
```

- User Model
- import bcrypt from 'bcryptjs'
- await genSalt(10)
- await hash(password , salt)
- await compare(requestPassword , currentPassword)
- [mongoose middleware](https://mongoosejs.com/docs/middleware.html)
- UserSchema.pre('save',async function(){
  "this" points to instance created by UserSchema
  })

#### 26) Mongoose - Custom Instance Methods

[Custom Instance Methods](https://mongoosejs.com/docs/guide.html#methods)

- UserSchema.methods.createJWT = function(){console.log(this)}
- register controller
- right after User.create()
- invoke user.createJWT()

#### 27-a) Build: JWT Function

- token
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

```sh
npm install jsonwebtoken
```

- User Model
- import jwt from 'jsonwebtoken'
- jwt.sign(payload,secret,options)
- createJWT

```js
return jwt.sign({ userId: this._id }, "jwtSecret", { expiresIn: "1d" });

//per source
return jwt.sign({ id: this._id }, "jwtSecret", { expiresIn: "1d" });
```

```js
return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_LIFETIME,
});
```

#### 27-b) Update JWT_SECRET and JWT_LIFETIME in the process env

- [Keys Generator](https://www.allkeysgenerator.com/)
- RESTART SERVER!!!!

#### 27-c) Update: Exclude Password in the Server Response for Register

- Update the password : {select:false} in User schema model js file
- complete response

#### 28) NPM Install: Concurrently

- Enable running two (2) terminals concurrently for front-end and back-end
- [concurrently](https://www.npmjs.com/package/concurrently)

```sh
npm install concurrently --save-dev

```

- package.json

```js
// --kill-others switch, all commands are killed if one dies
// --prefix client - folder
// cd client && npm start
// escape quotes

"scripts": {
    "server": "nodemon server --ignore client",
    "client": "npm start --prefix client",
    "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client\""
  },
```

### Major Section: Connecting Front-end and Back-end

- In the server, the business logic shall be defined
- In ReactJS, request function shall be defined.

#### 29) NPM Install: Axios (client)

- [axios docs](https://axios-http.com/docs/intro)
- stop app
- cd client

```sh
npm install axios
```

- cd ..
- restart app

#### 30-A) Build Connection: Register User - Setup

```js
appContext.js;

const initialState = {
  user: null,
  token: null,
  userLocation: "",
};
```

- actions.js REGISTER_USER_BEGIN,SUCCESS,ERROR
- import reducer,appContext

```js
appContext.js;
const registerUser = async (currentUser) => {
  console.log(currentUser);
};

 <AppContext.Provider value={{ registerUser }}>
```

- import in Register.js

```js
Register.js;

const currentUser = { name, email, password };
if (isMember) {
  console.log("already a member");
} else {
  registerUser(currentUser);
}

return (
  <button type="submit" className="btn btn-block" disabled={isLoading}>
    submit
  </button>
);
```

#### 30-B) Build Connection: Register User - Complete

```js
appContext.js;

import axios from "axios";

const registerUser = async (currentUser) => {
  dispatch({ type: REGISTER_USER_BEGIN });
  try {
    const response = await axios.post("/api/v1/auth/register", currentUser);
    console.log(response);
    const { user, token, location } = response.data;
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: {
        user,
        token,
        location,
      },
    });

    // will add later
    // addUserToLocalStorage({
    //   user,
    //   token,
    //   location,
    // })
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: REGISTER_USER_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert();
};
```

```js
reducer.js;
if (action.type === REGISTER_USER_BEGIN) {
  return { ...state, isLoading: true };
}
if (action.type === REGISTER_USER_SUCCESS) {
  return {
    ...state,
    user: action.payload.user,
    token: action.payload.token,
    userLocation: action.payload.location,
    jobLocation: action.payload.location,
    isLoading: false,
    showAlert: true,
    alertType: "success",
    alertText: "User Created! Redirecting...",
  };
}
if (action.type === REGISTER_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: "danger",
    alertText: action.payload.msg,
  };
}
```

#### 31) Update Register.js: Navigate To Dashboard

```js
Register.js;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
};
```

#### 32) Build: Access to Local Storage

```js
appContext.js;
const addUserToLocalStorage = ({ user, token, location }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
  localStorage.setItem("location", location);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("location");
};

const registerUser = async (currentUser) => {
  // in try block
  addUserToLocalStorage({
    user,
    token,
    location,
  });
};

// set as default
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
};
```

#### 33) UnauthenticatedError

- unauthenticated.js in errors
- import/export

```js
import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
```

#### 34) Compare Password

```js
User.js in models;

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
```

```js
authController.js;
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};
```

- test in Postman

### MAJOR BUILD: Nested Pages in React Router 6

#### 35) Dashboard pages

- delete Dashboard.js
- fix imports/exports
- replace in home route

```js
<Route path="/" element={<div>dashboard</div>} />
```

- create <b>dashboard</b> directory in pages
- create AddJob,AllJobs,Profile,Stats,SharedLayout, index.js
- setup basic returns

```js
return <h1>Add Job Page</h1>;
```

- export all with index.js (just like components)
- import all pages in App.js


#### Navbar, SmallSidebar, BigSidebar

- create Navbar, SmallSidebar, BigSidebar in components
- import Wrappers from assets/wrappers
- simple return
- import/export

```js
SharedLayout.js;

import { Outlet } from "react-router-dom";
import { Navbar, SmallSidebar, BigSidebar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  const { user } = useAppContext();
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
```

#### React Icons

[React Icons](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons
```

```js
Navbar.js

import Wrapper from '../assets/wrappers/Navbar'
import {FaHome} from 'react-icons/fa'
const Navbar = () => {
  return (
    <Wrapper>
      <h4>navbar</h4>
      <FaHome>
    </Wrapper>
  )
}

export default Navbar

```
#### React Icons

[React Icons](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons
```

```js
Navbar.js

import Wrapper from '../assets/wrappers/Navbar'
import {FaHome} from 'react-icons/fa'
const Navbar = () => {
  return (
    <Wrapper>
      <h4>navbar</h4>
      <FaHome>
    </Wrapper>
  )
}

export default Navbar

```

#### Navbar Setup

```js
Navbar.js;

import { useState } from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          onClick={() => console.log("toggle sidebar")}
        >
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => console.log("show logout")}>
            <FaUserCircle />
            john
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              onClick={() => console.log("logout user")}
              className="dropdown-btn"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
```

#### Toggle Sidebar

```js
actions.js;

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
```

- import/export

```js
appContext.js;

const initialState = {
  showSidebar: false,
};

const toggleSidebar = () => {
  dispatch({ type: TOGGLE_SIDEBAR });
};
```

```js
reducer.js;

if (action.type === TOGGLE_SIDEBAR) {
  return { ...state, showSidebar: !state.showSidebar };
}
```

```js
Navbar.js;

const { toggleSidebar } = useAppContext();

return (
  <button className="toggle-btn" onClick={toggleSidebar}>
    <FaAlignLeft />
  </button>
);
```

#### Toggle Sidebar

```js
actions.js;

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
```

- import/export

```js
appContext.js;

const initialState = {
  showSidebar: false,
};

const toggleSidebar = () => {
  dispatch({ type: TOGGLE_SIDEBAR });
};
```

```js
reducer.js;

if (action.type === TOGGLE_SIDEBAR) {
  return { ...state, showSidebar: !state.showSidebar };
}
```

```js
Navbar.js;

const { toggleSidebar } = useAppContext();

return (
  <button className="toggle-btn" onClick={toggleSidebar}>
    <FaAlignLeft />
  </button>
);
```

#### Toggle Dropdown

```js
Navbar.js

const [showLogout, setShowLogout] = useState(false)

<div className='btn-container'>
  <button className='btn' onClick={() => setShowLogout(!showLogout)}>
    <FaUserCircle />
      {user.name}
    <FaCaretDown />
  </button>
  <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
    <button onClick={() => logoutUser()} className='dropdown-btn'>
      logout
    </button>
  </div>
</div>

```

#### Logout User

```js
actions.js;

export const LOGOUT_USER = "LOGOUT_USER";
```

- import/export

```js
appContext.js

const logoutUser = () => {
  dispatch({ type: LOGOUT_USER })
  removeUserFromLocalStorage()
}

value={{logoutUser}}
```

```js
reducer.js;

import { initialState } from "./appContext";

if (action.type === LOGOUT_USER) {
  return {
    ...initialState,
    user: null,
    token: null,
    userLocation: "",
    jobLocation: "",
  };
}
```

```js
Navbar.js;

const { user, logoutUser, toggleSidebar } = useAppContext();

return (
  <div className="btn-container">
    <button className="btn" onClick={() => setShowLogout(!showLogout)}>
      <FaUserCircle />
      {user.name}
      {user && user.name}
      {user?.name} // optional chaining
      <FaCaretDown />
    </button>
    <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
      <button onClick={logoutUser} className="dropdown-btn">
        logout
      </button>
    </div>
  </div>
);
```

#### Setup Links

- create <b>utils</b>in the <b>src</b>
- setup links.js

```js
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "all-jobs",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "add job",
    path: "add-job",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
```

#### Small Sidebar - Setup

```js
SmallSidebar.js;

import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button className="close-btn" onClick={() => console.log("toggle")}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">nav links</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
```

#### Big Sidebar

```js
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
```

#### REACT ROUTER UPDATE !!!

- [Stack Overflow](https://stackoverflow.com/questions/70644361/react-router-dom-v6-shows-active-for-index-as-well-as-other-subroutes)

```js
<NavLink
to={path}
key={id}
onClick={toggleSidebar}
className={({ isActive }) =>
isActive ? 'nav-link active' : 'nav-link'}


end
>
```

#### Authenticate User Setup

- create auth.js in <b>middleware</b>

```js
const auth = async (req, res, next) => {
  console.log("authenticate user");
  next();
};

export default auth;
```

```js
authRoutes.js;

import authenticateUser from "../middleware/auth.js";

router.route("/updateUser").patch(authenticateUser, updateUser);
```

- two options

```js
server.js;

import authenticateUser from "./middleware/auth.js";
app.use("/api/v1/jobs", authenticateUser, jobsRouter);
```

```js
jobsRoutes.js;

import authenticateUser from "./middleware/auth.js";

// all routes !!!!

router.route("/stats").get(authenticateUser, showStats);
```

#### Auth - Bearer Schema

```js
Postman

Headers

Authorization: Bearer <token>

```

```js
auth.js;

const auth = async (req, res, next) => {
  const headers = req.headers;
  const authHeader = req.headers.authorization;
  console.log(headers);
  console.log(authHeader);
  next();
};
```

#### Postman - Set Token Programmatically

In the Postman: 

- The test syntax for all routes (Job and Auth) shall be defined.

```js
const jsonData = pm.response.json();
pm.globals.set("token", jsonData.token);

Type: Bearer;

Token: {
  {
    token;
  }
}
```
- Go to Authorization and set the type into Bearer token.
- In the same note, set the `Token` value to {{token}}



#### Unauthenticated Error

```js
auth.js;

import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    // why, well is it 400 or 404?
    // actually 401
    throw new UnAuthenticatedError("Authentication Invalid");
  }

  next();
};
```

#### Auth Middleware

```js
import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload)
    // attach the user request object
    // req.user = payload
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export default auth;
```

#### Update User

```js
const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;

  await user.save();

  // various setups
  // in this case only id
  // if other properties included, must re-generate

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};
```

#### Modified Paths

- user.save() vs User.findOneAndUpdate

```js
User.js;

UserSchema.pre("save", async function () {
  console.log(this.modifiedPaths());
  console.log(this.isModified("name"));

  // if (!this.isModified('password')) return
  // const salt = await bcrypt.genSalt(10)
  // this.password = await bcrypt.hash(this.password, salt)
});
```

#### Profile Page

```js
appContext.js

const updateUser = async (currentUser) => {
  console.log(currentUser)
}

value={{updateUser}}
```

```js
Profile.js;

import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      // test and remove temporary
      displayAlert();
      return;
    }

    updateUser({ name, email, lastName, location });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            labelText="last name"
            type="text"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
```

#### Bearer Token - Manual Approach

```js
appContext.js;

const updaterUser = async (currentUser) => {
  try {
    const { data } = await axios.patch("/api/v1/auth/updateUser", currentUser, {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};
```

#### Axios - Global Setup

<!-- IMPORTANT  -->

In current axios version,
common property returns undefined,
so we don't use it anymore!!!

```js
appContext.js;

axios.defaults.headers["Authorization"] = `Bearer ${state.token}`;
```

#### Axios - Setup Instance

```js
AppContext.js;

const authFetch = axios.create({
  baseURL: "/api/v1",
  headers: {
    Authorization: `Bearer ${state.token}`,
  },
});

const updaterUser = async (currentUser) => {
  try {
    const { data } = await authFetch.patch("/auth/updateUser", currentUser);
  } catch (error) {
    console.log(error.response);
  }
};
```

#### Axios - Interceptors

- will use instance, but can use axios instead

<!-- IMPORTANT  -->

In current axios version,
common property returns undefined,
so we don't use it anymore!!!

```js
appContext.js;

// response interceptor
authFetch.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${state.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// response interceptor
authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 401) {
      console.log("AUTH ERROR");
    }
    return Promise.reject(error);
  }
);
```

#### Update User

```js
actions.js;
export const UPDATE_USER_BEGIN = "UPDATE_USER_BEGIN";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";
```

```js
appContext.js;

const updateUser = async (currentUser) => {
  dispatch({ type: UPDATE_USER_BEGIN });
  try {
    const { data } = await authFetch.patch("/auth/updateUser", currentUser);

    // no token
    const { user, location, token } = data;

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: { user, location, token },
    });

    addUserToLocalStorage({ user, location, token });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert();
};
```

```js
reducer.js
if (action.type === UPDATE_USER_BEGIN) {
  return { ...state, isLoading: true }
}

if (action.type === UPDATE_USER_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    token:action.payload.token
    user: action.payload.user,
    userLocation: action.payload.location,
    jobLocation: action.payload.location,
    showAlert: true,
    alertType: 'success',
    alertText: 'User Profile Updated!',
  }
}
if (action.type === UPDATE_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}
```

#### 401 Error - Logout User

```js
appContext.js;
// response interceptor
authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      logoutUser();
    }
    return Promise.reject(error);
  }
);

const updateUser = async (currentUser) => {
  dispatch({ type: UPDATE_USER_BEGIN });
  try {
    const { data } = await authFetch.patch("/auth/updateUser", currentUser);

    // no token
    const { user, location } = data;

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: { user, location, token },
    });

    addUserToLocalStorage({ user, location, token: initialState.token });
  } catch (error) {
    if (error.response.status !== 401) {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  }
  clearAlert();
};
```

#### Job Model

- Job Model

```js
Job.js;

import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },

    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
```

#### Create Job

```js
jobsController.js;

import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please Provide All Values");
  }

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
```

#### Job State Values

```js
appContext.js;
const initialState = {
  isEditing: false,
  editJobId: "",
  position: "",
  company: "",
  // jobLocation
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["pending", "interview", "declined"],
  status: "pending",
};
```

#### AddJob Page - Setup

```js
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const AddJob = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    console.log("create job");
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"} </h3>
        {showAlert && <Alert />}

        {/* position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job type */}

          {/* job status */}

          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
```

#### Select Input

```js
return (
  // job type
  <div className="form-row">
    <label htmlFor="jobType" className="form-label">
      job type
    </label>

    <select
      name="jobType"
      value={jobType}
      onChange={handleJobInput}
      className="form-select"
    >
      {jobTypeOptions.map((itemValue, index) => {
        return (
          <option key={index} value={itemValue}>
            {itemValue}
          </option>
        );
      })}
    </select>
  </div>
);
```

#### FormRowSelect

- create FormRowSelect in components
- setup import/export

```js
const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
```

```js
AddJob.js;

return (
  <>
    {/* job status */}

    <FormRowSelect
      name="status"
      value={status}
      handleChange={handleJobInput}
      list={statusOptions}
    />

    {/* job type */}
    <FormRowSelect
      labelText="type"
      name="jobType"
      value={jobType}
      handleChange={handleJobInput}
      list={jobTypeOptions}
    />
  </>
);
```

#### Change State Values With Handle Change

- [JS Nuggets Dynamic Object Keys](https://youtu.be/_qxCYtWm0tw)

```js
actions.js;

export const HANDLE_CHANGE = "HANDLE_CHANGE";
```

```js
appContext.js

const handleChange = ({ name, value }) => {
  dispatch({
    type: HANDLE_CHANGE,
    payload: { name, value },
  })
}

value={{handleChange}}
```

```js
reducer.js;

if (action.type === HANDLE_CHANGE) {
  return { ...state, [action.payload.name]: action.payload.value };
}
```

```js
AddJob.js;

const { handleChange } = useAppContext();

const handleJobInput = (e) => {
  handleChange({ name: e.target.name, value: e.target.value });
};
```
