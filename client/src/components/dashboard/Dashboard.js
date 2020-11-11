import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";
import Navbar from "../Navbar";

import GraderPage from "../GraderPage"
import LearnerPage from "../LearnerPage"

class Dashboard extends Component {
  state = {
    isLearner: true
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    API.getUserById(this.props.auth.user.id)
      .then(postData => {
        if (postData.data.role === "Learner") {
          this.setState({ isLearner: true });
        }
        if (postData.data.role === "Teacher") {
          this.setState({ isLearner: false });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.props.auth;

    const isLearnerRole = user.role

    let pagetoLoad;

    if (isLearnerRole === "Learner") {
      pagetoLoad = <LearnerPage
        id={user.id}
        name={user.name.split(" ")[0]}
        userName={user.name}
      />
    } else {
      pagetoLoad = <GraderPage
        id={user.id}
        name={user.name.split(" ")[0]}
        userName={user.name}
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