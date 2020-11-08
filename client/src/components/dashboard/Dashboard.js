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

    return (
      <>
        <div className="container-fluid">

          <Navbar />

          {/* Use this to pick up name of logged in user */}
          {/* <h4>
            <b>Hey there,</b> {user.name.split(" ")[0]}
          </h4> */}




          {/* <GraderPage
            name={user.name.split(" ")[0]}
          /> */}

          <LearnerPage
            name={user.name.split(" ")[0]}
          />

          <button className="btn btn-primary LogoutBtn"
            onClick={this.onLogoutClick}>
            Logout
            </button>

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