import React, { Component } from "react";
import React from 'react';
import { Button } from 'reactstrap';
// import "./components/LearnerPage/Learner.css";
import Navbar from "../components/Navbar/Navbar";

class LearnerAssignment extends Component {
    render() {
       
        return (
            <>
            <Navbar />
            <div className="learnerAssignBox">

                <h2 style={{ textAlign: "center" }}>Your homework about ((topic))</h2>
                <h3>((Grader)) said...</h3>
                <p className="assignComment">Any questions or comments you'd like to make to your grader?</p>


            </div>
            
            </>
        );

    }
}

export default LearnerAssignment;