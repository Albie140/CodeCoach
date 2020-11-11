import React, { useState, useEffect } from 'react';
import "../Learner.css"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import API from "../../../utils/API";

function LearnerInputBox(props) {
    const [assignment, setAssignment] = useState("Visual Studio Code & Github");
    const [link, setLink] = useState("yourprofile.github.com/repolink");
    const [userComments, setUserComments] = useState("");

    // var gradedAssignments = [];

    // useEffect(() => {
    //     API.getAllPostsByUser(props.userName)
    //         .then(postData => {

    //             gradedAssignments = [];

    //             // console.log("Here are your graded assignments!");

    //             for (let i = 0; i < postData.data.length; i++) {
    //                 if (postData.data[i].grade !== "ungraded") {

    //                     // console.log(postData.data[i]);
    //                     gradedAssignments.push(postData.data[i])
    //                 }
    //             }

    //             console.log("Here are your graded assignments!");
    //             console.log(gradedAssignments);
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    // function getAllPostsAgain() {
    //     API.getAllPostsByUser(props.userName)
    //         .then(postData => {

    //             gradedAssignments = [];

    //             // console.log("Here are your graded assignments!");

    //             for (let i = 0; i < postData.data.length; i++) {
    //                 if (postData.data[i].grade !== "ungraded") {

    //                     // console.log(postData.data[i]);
    //                     gradedAssignments.push(postData.data[i])
    //                 }
    //             }

    //             console.log("Here are your graded assignments!");
    //             console.log(gradedAssignments);
    //         })
    //         .catch(err => console.log(err));
    // }

    function submitAssignment(event) {
        event.preventDefault();

        // console.log("Submitted!");
        // console.log("title: " + assignment);
        // console.log("user: " + props.userName);
        // console.log("grader: " + "noGrader");
        // console.log("userLink: " + link);
        // console.log("userComments: " + userComments);
        // console.log("graderComments: " + "noGraderComments");
        // console.log("grade: " + "ungraded");

        // console.log("this.props");
        // console.log(this.props);

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
                setAssignment("Visual Studio Code & Github")
                setLink("yourprofile.github.com/repolink")
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