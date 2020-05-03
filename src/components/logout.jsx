import React, { Component } from "react";
import auth from "../services/authService";
class Logut extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logut;
