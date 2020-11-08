import React from "react";
import "../Grader.css";
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, CardLink } from 'reactstrap';

// NEED TO PASS PROPS OF LEARNER SUBMITTED WORK
// FROM GRADERLIST

function GraderCard() {
    return (
        <div>
            <Card>
                <CardHeader tag="h3">Name of Person To Grade</CardHeader>
                <CardBody>
                    <CardTitle tag="h5">Lesson: Lesson Topic</CardTitle>
                    <CardText>Learner Comments: Any comments by learner about the assignment
                    </CardText>
                    <CardText>Github Link:
                    <CardLink> Github code link</CardLink>
                    </CardText>
                    <CardText className="text-muted">Date Submitted: Date it was submited</CardText>
                </CardBody>
                <CardFooter className="gradeBtnBox">
                    <Button className="gradeThisBtn" color='warning'>Grade This!</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default GraderCard;