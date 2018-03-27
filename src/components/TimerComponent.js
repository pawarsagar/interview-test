import React from 'react'
import ReactDOM from 'react-dom';
import Timer from 'react-countdown-clock'

export function TimerComponent(props) {
  /* 
    return(<div id="header" className="col-sm-4"><Timer seconds={60*10}
        color="green"
        alpha={0.9}
        size={100}
        onComplete={props.triggerParentUpdate} /><br/></div>) */
        
    return<Timer seconds={60*10}
    color="green"
    alpha={0.9}
    size={100}
    onComplete={props.triggerParentUpdate} />
    }

    