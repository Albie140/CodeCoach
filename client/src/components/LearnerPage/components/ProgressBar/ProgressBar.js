import React from "react";
import { Progress } from 'reactstrap';
import './ProgressBar.css';


function ProgressBar() {
	return (
        <>
        <Progress multi className="progressbar">
        <Progress bar color="danger" value="10" />
        <Progress bar color="danger" value="10" />
        <Progress bar color="success" value="10" />
        <Progress bar color="success" value="10" />
        <Progress bar color="info" value="10"/>
        <Progress bar color="info" value="10" />
        <Progress bar color="warning" value="10" />
        <Progress bar color="danger" value="10" />
        <Progress bar color="danger" value="10" />
        <Progress bar color="" value="10" />
        </Progress>
      </>
	);
}

export default ProgressBar;