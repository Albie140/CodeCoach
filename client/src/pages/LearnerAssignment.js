import React, { Component } from "react";
import { Button } from 'reactstrap';
// import "./components/LearnerPage/Learner.css";
import { Row } from 'reactstrap';
import "../components/LearnerPage/Learner.css"
import Navbar from "../components/Navbar/Navbar";
import LearnerLessonplan from "../components/LearnerPage/LearnerLessonplan.js"
import lessons from '../lessonPlan.json';

class LearnerAssignment extends Component {
    state = {
        lessons: lessons
    }

    render() {
        return (
            <>
                <Navbar />

                <div className="container-fluid lessonsMainDiv">

                    <h1 className="lessonHeadh1">Lessons: </h1>

                <h2 style={{ textAlign: "center" }}>Your homework about ((topic))</h2>
                <h3>((Grader)) said...</h3>
                <p className="assignComment">Any questions or comments you'd like to make to your grader?</p>

                    <Row>
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