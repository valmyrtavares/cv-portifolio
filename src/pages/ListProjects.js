import React, { Component } from "react";
import ReactGA from "react-ga";
// import allProjects from '../data/allProjects';
// import IndividualProject from './IndividualProject';

export default class ListProjects extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <>
        <h1 style={{ color: "red" }}>TESTE TESTE TESTE </h1>
      </>
    );
  }
}
