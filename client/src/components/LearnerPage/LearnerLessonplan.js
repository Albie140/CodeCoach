import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import './Learner.css'


const LearnerLessonplan = (props) => {

    return (
      
       
        <Col sm="6">
          <Card body className="lessonCard">
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardText>{props.description}</CardText>
            <Button className="lessonBtn">Go somewhere</Button>
          </Card>
        </Col>
      
    );
  };
  
  export default LearnerLessonplan;