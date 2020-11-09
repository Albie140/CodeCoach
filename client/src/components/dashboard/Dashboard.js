import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../Navbar";

import GraderPage from "../GraderPage"
import LearnerPage from "../LearnerPage"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    
    const isLearnerRole = user.role
    console.log(`@@@@@@@@@@@@@`)
    console.log(this.props)
    let pagetoLoad;

    if (isLearnerRole === "Learner") {
      pagetoLoad = <LearnerPage
                    id={user.id}
                    name={user.name.split(" ")[0]}
                />
    } else {
      pagetoLoad = <GraderPage
                    id={user.id}
                    name={user.name.split(" ")[0]}
                 />
    }

    return (
      <>
        <div className="container-fluid">

          <Navbar />

          {pagetoLoad}

        </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);