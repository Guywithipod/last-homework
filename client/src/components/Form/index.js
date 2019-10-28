import React from "react";
import "./form.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />

    </div>
  );
}


export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" {...props}   rows = "5"/>
     
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button  className="submit-button" {...props} >
     {props.children}
    </button>
  );
}
