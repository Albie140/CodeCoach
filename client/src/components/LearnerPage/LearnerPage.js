import React, { useState, useEffect } from 'react';
import './Learner.css';
import ProgressBar from "./components/ProgressBar"
import lessons from './lessonPlan.json';
import LearnerGradedAssignment from './LearnerGradedAssignment';
import LearnerInputBox from './components/LearnerInputBox'


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

        <div className="learnerGradeDiv">
          <h2 className="learnh2">Recently reviewed code:</h2>
          
          <LearnerGradedAssignment 
          userName={props.userName}/>
        </div>
        <div className="LearnerProgBar">
          <h2 className="progBarh2">Your Progress: </h2>

          <ProgressBar />

          <h6 style={{textAlign:"center"}}>
          3 ouf of 10 lessons completed!
          </h6>

        </div>

        <div className="submitWorkDiv">
                    <h1 className="submitWorkh1">Submit your work!</h1>
                    <LearnerInputBox 
                    userName={props.userName}/>
                </div>
      </div>
    </div>
  );
}
export default LearnerPage;