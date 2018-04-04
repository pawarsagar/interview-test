import React, { Component } from 'react';
export function PresentQuestions(props) {
  const fontSet = {
    'fontSize' : 'medium',
  };
  return (
    <div>
      {props.Qbank.map((element, index) => {
        return (
          <div style={{fontSize : 'medium'}} key={element.Id}>
            <p><b>{index + 1}{". "}{element.Question__c}</b></p>
            <div className="radio">
              <label><input type="radio" name={element.Id} id={element.Id} onClick={() => props.answerStore(element.Id, element.Options__c.option1)} />{element.Options__c.option1}</label ><br />
              <label><input type="radio" name={element.Id} id={element.Id} onClick={() => props.answerStore(element.Id, element.Options__c.option2)} />{element.Options__c.option2}</label ><br />
              <label><input type="radio" name={element.Id} id={element.Id} onClick={() => props.answerStore(element.Id, element.Options__c.option3)} />{element.Options__c.option3}</label ><br />
              <label><input type="radio" name={element.Id} id={element.Id} onClick={() => props.answerStore(element.Id, element.Options__c.option4)} />{element.Options__c.option4}</label ><br />
            </div>
          </div>
        )
      })
      }
    </div>
  )
}