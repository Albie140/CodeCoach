import React, { useState, useEffect } from 'react';
import { Progress } from 'reactstrap';
import './ProgressBar.css';
import API from "../../../../utils/API"


function ProgressBar(props) {
  const [completedArray, setCompletedArray] = useState([]);

  // Calling This function again to fill the progress bar
  useEffect(() => {
    API.getAllPostsByUser(props.userName)
      .then(allData => {
        console.log("Getting all posts from user 'ProgressBar.js'")
        console.log(allData.data)

        var gradedAssignments = []
        var gradedAssignmentsNoDuplicates = [];
        var gradedAssignmentsTitles = [];
        var newCompletedArray = [];

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

        for (let i = 0; i < gradedAssignmentsNoDuplicates.length; i++) {
          newCompletedArray.push("warning");
        }

        for (let i = 10; i > gradedAssignmentsNoDuplicates.length; i--) {
          newCompletedArray.push("");
        }

        console.log("newCompletedArray");
        console.log(newCompletedArray);

        setCompletedArray(newCompletedArray);

        console.log("completedArray");
        console.log(completedArray);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Progress multi className="progressbar">
        <Progress bar color={completedArray[0]} value="10" />
        <Progress bar color={completedArray[1]} value="10" />
        <Progress bar color={completedArray[2]} value="10" />
        <Progress bar color={completedArray[3]} value="10" />
        <Progress bar color={completedArray[4]} value="10" />
        <Progress bar color={completedArray[5]} value="10" />
        <Progress bar color={completedArray[6]} value="10" />
        <Progress bar color={completedArray[7]} value="10" />
        <Progress bar color={completedArray[8]} value="10" />
        <Progress bar color={completedArray[9]} value="10" />
      </Progress>
    </>
  );
}

// success info warning danger

export default ProgressBar;