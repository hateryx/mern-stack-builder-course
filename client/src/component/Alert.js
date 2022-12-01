import React from "react";

const Alert = ({ errorType }) => {
  return <div className="alert alert-danger">{errorType}</div>;
};

export default Alert;
