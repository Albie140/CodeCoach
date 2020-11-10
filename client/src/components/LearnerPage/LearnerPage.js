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
          :wave: Hello there, {props.name}!
        </h1>
        <div className="learnerGradeDiv">
          <h2 className="learnh2">Recently Graded:</h2>
          
          <LearnerGradedAssignment />
        </div>
        <div className="LearnerProgBar">
          <h2 className="progBarh2">Your Progress: </h2>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}
export default LearnerPage;