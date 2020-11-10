import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import './Learner.css'


const LearnerLessonplan = (props) => {

    return (
      
        <Col sm="6">
          <Card body className="lessonCard">
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardText>{props.description}</CardText>
            <CardText>{props.instructions}</CardText>
            <Button className="lessonBtn"><a href="https://www.w3schools.com/" target="_blank">w3Schools Resource Link</a></Button>
          </Card>
        </Col>
      
    );
  };
  
  export default LearnerLessonplan;