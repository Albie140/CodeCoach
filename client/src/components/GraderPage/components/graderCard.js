import React, { useState, useEffect } from 'react';
import "../Grader.css";
import {
    FormGroup, Label, Input, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import API from "../../../utils/API";


function GraderCard(props) {
    const [grade, setGrade] = useState("A");
    const [graderComments, setGraderComments] = useState("");

    function submitGrade(event) {
        event.preventDefault();

        console.log("Submitted!");

        API.updatePost(props.id, {
            title: props.title,
            user: props.user,
            grader: props.currentLoggedInGraderUserName,
            userLink: props.userLink,
            userComments: props.userComments,
            graderComments: graderComments,
            grade: grade
        })
            .then(
                props.loadGrading()
            )
            .catch(err => console.log(err));
    }

    function deleteAssignment(event) {
        event.preventDefault();

        console.log("Deleted!");

        API.removePost(props.id)
            .then(() => {
                props.setDeletedId(props.id)
                props.loadGrading()
            })
            .catch(err => console.log(err));
    }

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

                    <FormGroup>
                        <Label for="exampleSelect">Grade</Label>

                        <Input type="select" name="select" id="exampleSelect" onChange={e => setGrade(e.target.value)}>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>F</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Place any comment for the user you would like to add: </Label>
                        <Input type="textarea" name="commentforgrader" id="commentforgrader" onChange={e => setGraderComments(e.target.value)} />
                    </FormGroup>

                </CardBody>

                <CardFooter className="gradeCardFoot">
                    <CardText className="text-muted">

                        <Button className="deleteThisBtn" onClick={deleteAssignment}>Delete</Button>

                        <Button className="gradeThisBtn" onClick={submitGrade}>Grade This!</Button>

                    </CardText>
                </CardFooter>

            </Card>

        </div>
    );
}

export default GraderCard;