import React, {useState} from 'react';
import { Card, Button, CardTitle, CardText, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import './Learner.css'


const LearnerLessonplan = (props) => {
  // const { buttonLabel } = props;
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);
  return (

    <Col sm="6">
      <Card body className="lessonCard">
        <CardTitle tag="h5">{props.name}</CardTitle>
        <CardText>{props.description}</CardText>

        <CardText>
          <Button color="primary" onClick={toggle}>Instructions</Button>
          <Toast isOpen={show}>
            <ToastHeader toggle={toggle}>Toast title</ToastHeader>
            <ToastBody>
              {props.instructions}
            </ToastBody>
          </Toast>
        </CardText>

        

        <Button className="lessonBtn"><a href="https://www.w3schools.com/" target="_blank">w3Schools Resource Link</a></Button>
      </Card>
    </Col>

  );
};

export default LearnerLessonplan;