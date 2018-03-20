import React from 'react'
import dateDemo from './CandidateCredentials.json'
import { FetchQuestion } from './FetchQuestion.js'
let date = new Date().toLocaleDateString();
let arrayDate = dateDemo.Date[0].ExamDate;

class datePicker extends React.Component {
    render() {

        if (date == arrayDate) {
            alert("Today is your exam  ");
            return (<div><FetchQuestion /></div>)
        }
        else if (date <= arrayDate) {
            return (<div align="Center">

                <p>Your Date is not arrive</p>


            </div>);
        }
        else {
            return (<div align="Center">

                <p>You have passed of the Date</p>


            </div>);
        }


    };
}
export default datePicker
