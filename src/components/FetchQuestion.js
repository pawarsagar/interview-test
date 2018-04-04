import React, { Component } from 'react';
import { Questions } from './Questions'

var loadQues_temp = 0;
export class FetchQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.qBankData = [];
    this.fetchQuestion = this.fetchQuestion.bind(this);
    this.setQuestion = this.setQuestion.bind(this);
    this.state = {
      questionSet: {},
      answerSet: [],
      randomQuestion: [],
    }
  }

  setQuestion(qBankData) {
    let options;
    let answer;
    qBankData.forEach(element => {
      options = element.Options__c;
      options = JSON.parse(options);
      element.Options__c = options;
      answer = element.Correct_Answer__c;
      answer = JSON.parse(answer);
      element.Correct_Answer__c = answer;
    });
    this.setState({
      questionSet : qBankData,
    });    
  }

  fetchQuestion() {
    let that = this; 
    var xhttp = new XMLHttpRequest();
    var token = '00D7F000005Bog7!AREAQH9NVn.2sSKc68lPMIABr6vSm3A3Ok5KsxvJ1kKnk7Z9ibnmfI9sLFTTLpg6ISnif_PQtEhbb0pSGgHpSUS0z0hDO.NY';
    var jsonObject;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        that.setQuestion(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", "https://trailrecruitment01-dev-ed.my.salesforce.com/services/apexrest/questionRestHandler", true);
    xhttp.setRequestHeader('Authorization', 'Bearer ' + token);
    xhttp.send();
  }

  render() {
    if (loadQues_temp === 0) {
      { loadQues_temp++ }
      { this.fetchQuestion() }
    }
    if (JSON.stringify(this.state.questionSet) === '{}') {
      return (
        <div>
        </div>
      )
    }
    else {
      return (
        <div>
          <Questions Data={this.state.questionSet} />
        </div>
      )
    }
  }
}