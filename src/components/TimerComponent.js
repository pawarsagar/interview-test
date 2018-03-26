
import React from 'react'
import ReactDOM from 'react-dom'
import Timer from 'react-countdown-clock'

export function TimerComponent(props) {



    return (
        <div className="row">
                   
             
                   <div className="col-sm-4">
                   
                    <Timer seconds={20} color="#F44336" alpha={0.9} size={100} onComplete={props.triggerParentUpdate} /></div>
               
                    <div className="col-sm-8">
                    <h1>Incapsulate Aptitude Test</h1>
                    <h3> Do not refresh this page  </h3>
                    </div>
                    
        </div>                
           
       ) 

} 
