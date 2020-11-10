import React from "react";
import "../Grader.css";
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

// NEED TO PASS PROPS OF LEARNER SUBMITTED WORK
// FROM GRADERLIST

function GraderCard(props) {
    return (
        <div>
            <Card className="gradeCardMain">
                <CardHeader className="gradeCardHead" tag="h3">{props.user}</CardHeader>

                <CardBody className="gradeCardBody">

                    <CardTitle tag="h5">Lesson: {props.title}</CardTitle>
                    <CardText>
                        Learner Comments: {props.userComments}
                    </CardText>

                    <CardText>Github Repo: 
                    <a href={props.userLink} target="_blank"> {props.userLink}</a>
                    </CardText> 
                    
                </CardBody>

                <CardFooter className="gradeCardFoot">
                    <CardText className="text-muted"> 

                        <Button className="gradeThisBtn" >Grade This!</Button>

                    </CardText>
                </CardFooter>

            </Card>
        </div>
    );
}

export default GraderCard;