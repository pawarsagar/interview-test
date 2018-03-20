import React from 'react'
import Timer from 'react-countdown-clock'

export function TimerComponent(props) {
  
    return(<div><div class=" table-bordered" > <Timer seconds={10}
        color="#000"
        alpha={0.9}
        size={100}
        onComplete={props.triggerParentUpdate} /></div><br/></div>)
        
   

    }