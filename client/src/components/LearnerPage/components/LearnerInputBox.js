import React from "react";
import "../Learner.css"
import { Form, FormGroup, Label, Input } from 'reactstrap';

function LearnerInputBox() {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleSelect">Assignment Number</Label>

                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="repoLink">Your Code Repository Link</Label>
                <Input
                    type="url"
                    name="repoLink"
                    id="repoLink"
                    placeholder="yourprofile.github.com/repolink"
                />
            </FormGroup>

            <FormGroup>
                <Label for="exampleText">Place any comment for the grader you would like to add: </Label>
                <Input type="textarea" name="commentforgrader" id="commentforgrader" />
            </FormGroup>

            <FormGroup>
                <button> SUBMIT </button>
            </FormGroup>


        </Form>
    );
}

export default LearnerInputBox;