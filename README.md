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

#### 2) Set-up: Normalize.css and Global Styles

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

#### 4) Using Styled Components

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

#### 7) Set-up: React Router

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

- create FormRow.js in <b>components</b>
- setup import/export
- setup one for email and password
- hint "type,name,value"

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
