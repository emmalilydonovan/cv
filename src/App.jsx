import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container } from 'react-bootstrap';
import './App.css';
import Navigation from "./components/Navigation";
import HeaderImage from "./components/HeaderImage";
import Bio from "./components/Bio";
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import SkillsInterests from './components/SkillsInterests';
import ComputationalProjects from './components/ComputerProjects';
import EmailMe from './components/EmailMe';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <HeaderImage />
        <Container className="content-container">
          <Bio />
          <hr />
          <Education />
          <hr />
          <WorkExperience />
          <hr />
          <SkillsInterests />
          <hr />
          <ComputationalProjects />
          <hr />
          <EmailMe />
        </Container>
        <Footer />
      </div>
      );
    }
}

export default App;
