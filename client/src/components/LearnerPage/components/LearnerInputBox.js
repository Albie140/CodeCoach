import React, { useState, useEffect } from 'react';
import "../Learner.css"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import API from "../../../utils/API";

function LearnerInputBox(props) {
    const [assignment, setAssignment] = useState("1-Visual Studio Code & Github");
    const [link, setLink] = useState("");
    const [userComments, setUserComments] = useState("");

    function submitAssignment(event) {
        event.preventDefault();

        API.savePost({
            title: assignment,
            user: props.userName,
            grader: "noGrader",
            userLink: link,
            userComments: userComments,
            graderComments: "noGraderComments",
            grade: "ungraded"
        })
            .then(postData => {
                console.log(postData.data);
                // getAllPostsAgain();
                setAssignment("1-Visual Studio Code & Github")
                setLink("")
                setUserComments("")
            })
            .catch(err => console.log(err));
    }

    return (
        <Form>
            <FormGroup>
                <Label for="exampleSelect">Assignment Number</Label>

                <Input type="select" name="select" id="exampleSelect" value={assignment} onChange={e => setAssignment(e.target.value)}>
                    <option>1-Visual Studio Code & Github</option>
                    <option>2-HTML Basics</option>
                    <option>3-HTML Classes and IDs</option>
                    <option>4-CSS Basics</option>
                    <option>5-CSS Layouts</option>
                    <option>6-JavaScript Basics</option>
                    <option>7-JavaScript Basic Conditions</option>
                    <option>8-JavaScript Arrays and Objects</option>
                    <option>9-JavaScript For Loops</option>
                    <option>10-Create a Single Page App</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="repoLink">Your Code Repository Link</Label>
                <Input
                    type="url"
                    name="repoLink"
                    id="repoLink"
                    placeholder="yourprofile.github.com/repolink"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label for="exampleText">Place any comment for the grader you would like to add: </Label>
                <Input type="textarea" name="commentforgrader" id="commentforgrader" value={userComments} onChange={e => setUserComments(e.target.value)} />
            </FormGroup>

            <FormGroup>
                <Button className="submitWorkBtn" onClick={submitAssignment}> SUBMIT </Button>
            </FormGroup>


        </Form>
    );
}

export default LearnerInputBox;