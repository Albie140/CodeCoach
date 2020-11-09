import React, { useState, useEffect } from 'react';
import './Learner.css';
import ProgressBar from "../ProgressBar"

import lessons from './lessonPlan.json';
import LearnerGradedAssignment from './LearnerGradedAssignment';


function LearnerPage(props) {
  const [lessonInfo, setLessonInfo] = useState({
    lessons: lessons
  })

  useEffect(() => {
    setLessonInfo({ lessons })
    console.log(lessonInfo);
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <h1 className="learnerh1">
          👋 Hello there, {props.name}!
        </h1>

        <div>
          <h2>Graded Assigment: </h2>
          <LearnerGradedAssignment />

        </div>


        <div className="container-fluid LearnerProgBar">
          <h2 className="font">Your Progress Bar: </h2>

         <ProgressBar />

        </div>

      </div>

    </div>
  );
}

export default LearnerPage;