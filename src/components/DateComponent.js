import React from 'react'
import dateDemo from './CandidateCredentials.json'
import { FetchQuestion } from './FetchQuestion.js'
let date = new Date().toLocaleDateString();
let arrayDate = dateDemo.Date[0].ExamDate;

class datePicker extends React.Component {
    constructor(props) {
        super(props);
        this.date = new Date().toLocaleDateString();
        this.temp = dateDemo.Date[0].ExamDate;
        this.arrayDate = new Date(this.temp).toLocaleDateString();
    }
    render() {

        if (this.date == this.arrayDate) {
            alert("Today is your exam  ");
            return (<FetchQuestion />)
        }
        else if (this.date <= this.arrayDate) {
            return (<div align="Center">

              
                <p>Your Date has not arrived yet!</p>


            </div>);
        }
        else {
            return (<div align="Center">

                <p>Your exam date has passed!</p>


            </div>);
        }


    };
}
export default datePicker
