import React, { useState } from "react";
import "./formInput.css";

function FormInput(props) {
  const [inputClick, setinputClick] = useState(false);
  return (
    <div className="group">
      {inputClick && <label className="label">{props.label}</label>}
      <input
        className="form-input"
        type={props.type}
        required
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        onFocus={() => setinputClick(true)}
        onBlur={()=>setinputClick(false)}
        placeholder={inputClick?null:props.label}
      />
    </div>
  );
}

export default FormInput;
