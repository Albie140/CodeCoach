import React, { Component } from "react";
import { Row } from 'reactstrap';
import "../components/LearnerPage/Learner.css"
import Navbar from "../components/Navbar/Navbar";
import LearnerLessonplan from "../components/LearnerPage/LearnerLessonplan.js";
import lessons from '../lessonPlan.json';
import API from "../utils/API";


class LearnerAssignment extends Component {
    state = {
        lessons: lessons
    }

    onClickTest = e => {
        e.preventDefault();
        API.getAllUngradedPosts("ungraded")
            .then(postData => {
                console.log(postData.data);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <Navbar />

                <div className="container-fluid lessonsMainDiv">

                    <h1 className="lessonHeadh1">Coding Lesson Plan</h1>

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


            </>
        );

    }
}

export default LearnerAssignment;