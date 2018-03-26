import React, { Component } from 'react';

export function OnSubmit(props) {
  return (
    <div align="center" className="form-input-wide">
   <div className="form-buttons-wrapper">
      <button onClick={props.checkAnswer} className="form-submit-button form-submit-button-light">Submit</button>
      <label></label>
      </div>
    </div>
    
  )
}