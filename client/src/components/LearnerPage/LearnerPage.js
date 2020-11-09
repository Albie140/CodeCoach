import React, {useState, useEffect} from 'react';
import { Row } from 'reactstrap';
import './Learner.css';
import ProgressBar from "../ProgressBar"
import LearnerLessonplan from './LearnerLessonplan';
import lessons from './lessonPlan.json';
import LearnerAssignment from './LearnerAssignment';


function LearnerPage(props) {
  const [lessonInfo, setLessonInfo] = useState({
    lessons: lessons
  })

  useEffect(() => {
    setLessonInfo({lessons})
		console.log(lessonInfo);
	}, []);

    return (
        <div>
        <div className="container-fluid font graderPageBox"> 
        <h1 className="graderh1">
        👋 Hello there, {props.name}! 
        </h1>

        <div className="container-fluid gradedHeader">
        <h2 className="font">Graded Assigment: </h2>
        <LearnerAssignment />
        </div>

        <div className="container-fluid nextLesson">
        <h2 className="font">Lessons: </h2>
        <Row>
        {lessons.map(data =>
        <LearnerLessonplan
          key={data.id}
          id={data.id}
          name={data.name}
          description={data.description}
          />)}
        </Row>
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