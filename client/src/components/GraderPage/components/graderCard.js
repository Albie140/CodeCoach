import React from "react";
import "../Grader.css";
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

// NEED TO PASS PROPS OF LEARNER SUBMITTED WORK
// FROM GRADERLIST

function GraderCard() {
    return (
        <div>
            <Card className="gradeCardMain">
                <CardHeader className="gradeCardHead" tag="h3">Name of Person To Grade</CardHeader>

                <CardBody className="gradeCardBody">

                    <CardTitle tag="h5">Lesson: Lesson Topic</CardTitle>
                    <CardText>
                        Learner Comments: Any comments by learner about the assignment
                    </CardText>

                    <CardText>Github Repo: 
                    <a href="http://github.com" target="_blank"> http://github.com</a>
                    </CardText> 
                    
                </CardBody>

                <CardFooter className="gradeCardFoot">
                    <CardText className="text-muted">Date Submitted: Date it was submited

                        <Button className="gradeThisBtn" >Grade This!</Button>

                    </CardText>
                </CardFooter>

            </Card>
        </div>
    );
}

export default GraderCard;