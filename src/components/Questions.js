import React, { Component } from 'react';
import { OnSubmit } from './OnSubmit'
import { FetchQuestion } from './FetchQuestion'
import { PresentQuestions } from './PresentQuestions'
import { Result } from './Result'
var answerKey = [];
var Qbank = [];
var array = [];
export class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.createRandomQuestion = this.createRandomQuestion.bind(this);
    this.answerStore = this.answerStore.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.shouldReplaceAnswer = this.shouldReplaceAnswer.bind(this);
    this.state = {
      Qbank_Check: props.Data,
      counter: null,
    }
  }

  createRandomQuestion() {

    while (array.length <= 9) {
      let temp = 1 + Math.floor(Math.random() * 20);
      if (array.indexOf(temp) < 0) {
        array.push(temp);
      }
    }
    Qbank = this.state.Qbank_Check.filter(function (element, index) {
      if (array.indexOf(index + 1) >= 0) {
        return true;
      }
      else {
        return false;
      }
    })
  }

  checkAnswer() {
    let count = 0;
    Qbank.forEach((element) => {
      var myAnswer = answerKey.find(function (answerElement) {
        return (answerElement.id == element.id);
      })
      if (myAnswer != undefined) {
        if (myAnswer.answer == element.answer) {
          count++;
        }
      }
    });
    console.log(count);
    this.setState({ counter: count });
  }

  answerStore(id, answer) {
    let shouldReplace = this.shouldReplaceAnswer(id);
    if (!shouldReplace) {
      let temp = {};
      temp.id = id;
      temp.answer = answer;
      answerKey.push(temp);
    }
    else {
      shouldReplace.answer = answer;
    }
  }

  shouldReplaceAnswer(id) {
    let tempElement = answerKey.find((element) => {
      return element.id == id;
    })
    return tempElement;
  }

  render(props) {
    { this.createRandomQuestion() }
    if(this.state.counter !=null){
      return <Result correctAnswers = {this.state.counter}/>
    }
    return (
      <div>
        <PresentQuestions Qbank={Qbank} answerStore={this.answerStore} />
        <OnSubmit checkAnswer={this.checkAnswer.bind(this)} />
        
      </div>
    );
  }
}