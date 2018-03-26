import React, { Component } from 'react';

export function Result(props) {
  let answer = props.correctAnswers > 1 ? 'answers' : 'answer'
  return (
    <div>
      <h3><span className="label label-info">You got {props.correctAnswers} correct {answer}.</span></h3>
    </div>
  )
}