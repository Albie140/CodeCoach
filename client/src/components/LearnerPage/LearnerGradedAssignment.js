import React from "react";
import "./Learner.css"

function LearnerGradedAssignment() {
    return (
      <div className="learnerAssignBox">

          <h2 style={{textAlign: "center"}}>Your homework about ((topic))</h2>
          <h3>((Grader)) said...</h3>
          <p className="assignComment">great job on the assignment!</p>

      </div>
    );
  }
  
  export default LearnerGradedAssignment;