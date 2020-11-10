import React, { Component } from "react";
import { Row } from 'reactstrap';
import "../components/LearnerPage/Learner.css"
import Navbar from "../components/Navbar/Navbar";
import LearnerLessonplan from "../components/LearnerPage/LearnerLessonplan.js";
import lessons from '../lessonPlan.json';
import API from "../utils/API";
import LearnerInputBox from "../components/LearnerPage/components/LearnerInputBox"

class LearnerAssignment extends Component {
    state = {
        lessons: lessons
    }

    onClickTest = e => {
        e.preventDefault();
        console.log("Test!!!")

        // API.savePost({
        //     title: "Test4",
        //     user: "Test User",
        //     grader: "",
        //     instructions: "Test Instructions",
        //     userAnswer: "Answer Goes Here",
        //     graderComments: "",
        //     grade: "ungraded"
        // })
        //     .then(postData => {
        //         console.log(postData.data);
        //     })
        //     .catch(err => console.log(err));

        // API.getUserByNameTest("Josh6")
        //     .then(postData => {
        //         console.log(postData.data);
        //     })
        //     .catch(err => console.log(err));

        API.getAllUngradedPosts("ungraded")
            .then(postData => {
                console.log(postData.data);

                // for (let i = 0; i < postData.data.length; i++) {
                //     if (postData.data[i].title === "Test3") {
                //         console.log("This is Test3!!!");
                //     }
                //     else{
                //         console.log("This is Not Test3!");
                //     }
                // }
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <Navbar />

                <div className="container-fluid lessonsMainDiv">

                    <h1 className="lessonHeadh1">Lessons</h1>

                    <Row className="lessonPlanRow">
                        {this.state.lessons.map(data =>
                            <LearnerLessonplan
                                key={data.id}
                                id={data.id}
                                name={data.name}
                                description={data.description}
                                instructions={data.instructions}
                            />)}
                    </Row>
                </div>

                {/* <button onClick={this.onClickTest}>Test Confirm</button> */}

                <div className="submitWorkDiv">
                    <h1 className="submitWorkh1">Submit your work!</h1>
                    <LearnerInputBox />
                </div>
            </>
        );

    }
}

export default LearnerAssignment;