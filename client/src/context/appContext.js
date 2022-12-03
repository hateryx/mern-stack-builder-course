//import React, { useState, useReducer, useContext } from "react"; [previous version before useReducer]
import React, { useReducer, useContext } from "react";

import reducer from "./reducer";
import { DISPLAY_ALERT } from "./actions";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //const [state, setState] = useState(initialState); [previous version]
  const [state, dispatch] = useReducer(reducer, initialState);

  //--defined for actions.js as part of dispatch function
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
