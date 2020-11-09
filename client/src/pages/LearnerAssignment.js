import React, { Component } from "react";
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
                <p className="assignComment">great job on the assignment!</p>

            </div>
            
            </>
        );

    }
}

export default LearnerAssignment;