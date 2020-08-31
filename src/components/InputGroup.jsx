import React from "react";
import propTypes from "prop-types";

const InputGroup = ({ label, name, value, placeholder, type, onChange }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputGroup.propTypes = {
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  // value: propTypes.number.isRequired,
  placeholder: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

InputGroup.defaultProps = {
  type: "text",
};

export default InputGroup;
