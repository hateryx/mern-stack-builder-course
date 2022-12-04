import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

const reducer = (state, action) => {
  //--- to be defined once actions.js is built
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  //---
  throw new Error(`no action:${action.type}`);
};

export default reducer;
