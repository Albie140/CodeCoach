import React from 'react';
import './Learner.css';

function LearnerPage(props) {
    return (
        <div>
        <div className="container-fluid font graderPageBox"> 
        <h1 className="graderh1">
        👋 Hello there, {props.name}! 
        </h1>
        <div className="graderMiniBox">
        We are so happy you want to learn how to code!
        </div>

      </div>
      
      </div>
    );
  }

  export default LearnerPage;