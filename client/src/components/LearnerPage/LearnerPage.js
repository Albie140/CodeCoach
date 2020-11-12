import React, { useState, useEffect } from 'react';
import './Learner.css';
import ProgressBar from "./components/ProgressBar";
import lessons from './lessonPlan.json';
import LearnerGradedAssignment from './LearnerGradedAssignment';
import LearnerInputBox from './components/LearnerInputBox';
import API from "../../utils/API";


function LearnerPage(props) {
  const [lessonInfo, setLessonInfo] = useState({
    lessons: lessons
  });
  const [numberOfGradedAssignments, setNumberOfGradedAssignments] = useState([]);
  const [gpaLetter, setGpaLetter] = useState("");
  const [completedTheCourse, setCompletedTheCourse] = useState("");

  useEffect(() => {
    setLessonInfo({ lessons })
    console.log(lessonInfo);
  }, []);

  // Calling This function again to fill the progress bar
  useEffect(() => {
    API.getAllPostsByUser(props.userName)
      .then(allData => {
        console.log("Getting all posts from user 'LearnerPage.js'")
        console.log(allData.data)

        var gradedAssignments = []
        var gradedAssignmentsNoDuplicates = [];
        var gradedAssignmentsTitles = [];

        var gpa = 0;
        var gpaLetterGrade = "";

        for (let i = 0; i < allData.data.length; i++) {
          if (allData.data[i].grade !== "ungraded") {

            gradedAssignments.push(allData.data[i])
          }
        }

        for (let i = 0; i < gradedAssignments.length; i++) {
          if (!gradedAssignmentsTitles.includes(gradedAssignments[i].title)) {
            gradedAssignmentsNoDuplicates.push(gradedAssignments[i]);
            gradedAssignmentsTitles.push(gradedAssignments[i].title);
          }
        }

        console.log("gradedAssignmentsNoDuplicates'")
        console.log(gradedAssignmentsNoDuplicates);

        setNumberOfGradedAssignments(gradedAssignmentsNoDuplicates);

        for (let i = 0; i < gradedAssignmentsNoDuplicates.length; i++){
          if (gradedAssignmentsNoDuplicates[i].grade === "A"){
            gpa = gpa + 4;
          }
          if (gradedAssignmentsNoDuplicates[i].grade === "B"){
            gpa = gpa + 3;
          }
          if (gradedAssignmentsNoDuplicates[i].grade === "C"){
            gpa = gpa + 2;
          }
          if (gradedAssignmentsNoDuplicates[i].grade === "D"){
            gpa = gpa + 1;
          }
          if (gradedAssignmentsNoDuplicates[i].grade === "F"){
            gpa = gpa + 0;
          }
        }

        gpa = gpa / gradedAssignmentsNoDuplicates.length;

        console.log("gpa");
        console.log(gpa);

        if (gpa < 0.67){
          gpaLetterGrade = "F";
        }
        if (gpa < 1){
          gpaLetterGrade = "D-";
        }
        if (gpa < 1.33){
          gpaLetterGrade = "D";
        }
        if (gpa < 1.67){
          gpaLetterGrade = "D+";
        }
        if (gpa < 2){
          gpaLetterGrade = "C-";
        }
        if (gpa < 2.33){
          gpaLetterGrade = "C";
        }
        if (gpa < 2.67){
          gpaLetterGrade = "C+";
        }
        if (gpa < 3){
          gpaLetterGrade = "B-";
        }
        if (gpa < 3.33){
          gpaLetterGrade = "B";
        }
        if (gpa < 3.67){
          gpaLetterGrade = "B+";
        }
        if (gpa < 4){
          gpaLetterGrade = "A-";
        }
        if (gpa = 4){
          gpaLetterGrade = "A";
        }

        console.log("gpaLetterGrade");
        console.log(gpaLetterGrade);

        setGpaLetter(gpaLetterGrade);

        if (gradedAssignmentsNoDuplicates.length >= 10){
          setCompletedTheCourse("You have completed the course!")
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <h1 className="learnerh1">
          👋 Hello there, {props.name}!
        </h1>

        <div className="learnerGradeDiv">
          <h2 className="learnh2">Recently reviewed code:</h2>

          <LearnerGradedAssignment
            userName={props.userName} />
        </div>
        <div className="LearnerProgBar">
          <h2 className="progBarh2">Your Progress: </h2>

          <ProgressBar userName={props.userName}/>

          <h6 style={{ textAlign: "center" }}>
            {numberOfGradedAssignments.length} out of 10 lessons completed!
          </h6>

        </div>

        <div className="submitWorkDiv">
          <h1 className="submitWorkh1">Submit your work!</h1>
          <LearnerInputBox
            userName={props.userName} />
        </div>
      </div>
    </div>
  );
}
export default LearnerPage;