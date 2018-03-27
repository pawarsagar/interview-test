import React from 'react'
import Timer from 'react-countdown-clock'

export function TimerComponent(props) {
  
    return(<div style={{position:'fixed'}}><Timer seconds={1000}
        color="#000"
        alpha={0.9}
        size={100}
        onComplete={props.triggerParentUpdate} /><br/></div>)
    }