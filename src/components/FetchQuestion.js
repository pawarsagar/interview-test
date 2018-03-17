import React, { Component } from 'react';
import { Questions } from './Questions'

var loadQues_temp = 0;
export class FetchQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.setQuestion = this.setQuestion.bind(this);
    this.state = {
      questionSet: {},
      answerSet: [],
      randomQuestion: [],
    }
  }
  setQuestion() {
    fetch('http://localhost:3000/question')
      .then(function (data) {
        return data.json();
      })
      .then((data) => {
        this.setState({
          questionSet: data,
        })
        console.log(this.state.questionSet);
      })
  }

  render() {
    if (loadQues_temp === 0) {
      { loadQues_temp++ }
      { this.setQuestion() }
    }
    if (JSON.stringify(this.state.questionSet) === '{}') {
      return (
        <div>
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <Questions Data={this.state.questionSet} />
        </div>
      )
    }
  }
}