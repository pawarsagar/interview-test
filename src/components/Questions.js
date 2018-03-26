import React, { Component } from 'react';
import { OnSubmit } from './OnSubmit'
import { FetchQuestion } from './FetchQuestion'
import { PresentQuestions } from './PresentQuestions'
import { Result } from './Result'
import {TimerComponent} from './TimerComponent'

export class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.answerKey = [];
    this.array = [];
    this.Qbank = [];
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
    while (this.array.length <= 9) {
      let temp = 1 + Math.floor(Math.random() * 20);
      if (this.array.indexOf(temp) < 0) {
        this.array.push(temp);
      }
    }

    this.Qbank = this.state.Qbank_Check.filter((element, index) => {
      if (this.array.indexOf(index + 1) >= 0) {
        return true;
      }
      else {
        return false;
      }
    })
  }

  checkAnswer() {
    let count = 0;
    this.Qbank.forEach((element) => {
      var myAnswer = this.answerKey.find(function (answerElement) {
        return (answerElement.id == element.id);
      })
      if (myAnswer != undefined) {
        if (myAnswer.answer == element.answer) {
          count++;
        }
      }
    });
    this.setState({ counter: count });
  }

  answerStore(id, answer) {
    let shouldReplace = this.shouldReplaceAnswer(id);
    if (!shouldReplace) {
      let temp = {};
      temp.id = id;
      temp.answer = answer;
      this.answerKey.push(temp);
    }
    else {
      shouldReplace.answer = answer;
    }
  }

  shouldReplaceAnswer(id) {
    let tempElement = this.answerKey.find((element) => {
      return element.id == id;
    })
    return tempElement;
  }

  render(props) {
    { this.createRandomQuestion() }
    if (this.state.counter != null) {
      return <Result correctAnswers={this.state.counter} />
    }
    return (
      <div>
      
        <div> <TimerComponent triggerParentUpdate={this.checkAnswer}/></div>
        <div class=" table-bordered" >
        <PresentQuestions Qbank={this.Qbank} answerStore={this.answerStore} />
        <OnSubmit checkAnswer={this.checkAnswer.bind(this)} />
        </div>
      </div>
      
    );
  }
}
