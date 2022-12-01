import React from "react";

const FrontRow = ({ type, value, name, changeHandler, labelText }) => {
  // the ({}) actually sets up the prop (beautiful!)
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={changeHandler}
        className="form-input"
      />
    </div>
  );
};

export default FrontRow;
