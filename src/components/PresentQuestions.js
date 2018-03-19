import React, { Component } from 'react';
export function PresentQuestions(props) {
  const fontSet = {
    'fontSize' : 'medium',
  };
  return (
    <div>
      {props.Qbank.map((element, index) => {
        return (
          <div style={{fontSize : 'medium'}} key={element.id}>
            <p><b>{index + 1}{". "}{element.question}</b></p>
            <div className="radio">
              <label><input type="radio" name={element.id} id={element.id} onClick={() => props.answerStore(element.id, element.options.option1)} />{element.options.option1}</label ><br />
              <label><input type="radio" name={element.id} id={element.id} onClick={() => props.answerStore(element.id, element.options.option2)} />{element.options.option2}</label ><br />
              <label><input type="radio" name={element.id} id={element.id} onClick={() => props.answerStore(element.id, element.options.option3)} />{element.options.option3}</label ><br />
              <label><input type="radio" name={element.id} id={element.id} onClick={() => props.answerStore(element.id, element.options.option4)} />{element.options.option4}</label ><br />
            </div>
          </div>
        )
      })
      }
    </div>
  )
}