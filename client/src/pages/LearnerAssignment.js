import React, { Component } from "react";
import { Row } from 'reactstrap';
import "../components/LearnerPage/Learner.css"
import Navbar from "../components/Navbar/Navbar";
import LearnerLessonplan from "../components/LearnerPage/LearnerLessonplan.js";
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