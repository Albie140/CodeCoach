import React, { useState, useEffect } from 'react';
import "../Learner.css"
import { Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../../utils/API";

function LearnerInputBox(props) {
    const [assignmentNumber, setAssignmentNumber] = useState("1");
    const [link, setLink] = useState("No link / left blank");
    const [userComments, setUserComments] = useState("No comments / left blank");

    var gradedAssignments = [];

    useEffect(() => {
        API.getAllPostsByUser(props.userName)
            .then(postData => {

                // console.log("Here are your graded assignments!");

                for (let i = 0; i < postData.data.length; i++) {
                    if (postData.data[i].grade !== "ungraded") {
                        
                        // console.log(postData.data[i]);
                        gradedAssignments.push(postData.data[i])
                    }
                }

                console.log("Here are your graded assignments!");
                console.log(gradedAssignments);
            })
            .catch(err => console.log(err));
      }, []);

    function submitAssignment(event) {
        event.preventDefault();

        // console.log("Submitted!");
        // console.log("title: " + assignmentNumber);
        // console.log("user: " + props.userName);
        // console.log("grader: " + "noGrader");
        // console.log("userLink: " + link);
        // console.log("userComments: " + userComments);
        // console.log("graderComments: " + "noGraderComments");
        // console.log("grade: " + "ungraded");

        API.savePost({
            title: assignmentNumber,
            user: props.userName,
            grader: "noGrader",
            userLink: link,
            userComments: userComments,
            graderComments: "noGraderComments",
            grade: "ungraded"
        })
            .then(postData => {
                console.log(postData.data);
            })
            .catch(err => console.log(err));   
    }

    return (
        <Form>
            <FormGroup>
                <Label for="exampleSelect">Assignment Number</Label>

                <Input type="select" name="select" id="exampleSelect" onChange={e => setAssignmentNumber(e.target.value)}>
                    <option>Visual Studio Code & Github</option>
                    <option>HTML Basics</option>
                    <option>HTML Classes and IDs</option>
                    <option>CSS Basics</option>
                    <option>CSS Layouts</option>
                    <option>Javascript Basics</option>
                    <option>avascript Basic Conditions</option>
                    <option>Javascript Arrays and Objects</option>
                    <option>Javascript For Loops</option>
                    <option>Create a Single Page App</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="repoLink">Your Code Repository Link</Label>
                <Input
                    type="url"
                    name="repoLink"
                    id="repoLink"
                    placeholder="yourprofile.github.com/repolink"
                    onChange={e => setLink(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Label for="exampleText">Place any comment for the grader you would like to add: </Label>
                <Input type="textarea" name="commentforgrader" id="commentforgrader" onChange={e => setUserComments(e.target.value)} />
            </FormGroup>

            <FormGroup>
                <button onClick={submitAssignment}> SUBMIT </button>
            </FormGroup>


        </Form>
    );
}

export default LearnerInputBox;