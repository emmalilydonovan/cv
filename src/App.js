import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap';
import './App.css';
import Bio from "./components/Bio";
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import SkillsInterests from './components/SkillsInterests';
import ComputationalProjects from './components/ComputerProjects';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Emma Lily Donovan Diaz</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#Bio">Bio</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#work-exp">Work Experience</Nav.Link>
          <Nav.Link href="#skills-interests">Skills & Interests</Nav.Link>
          <Nav.Link href="#comp-proj">Computational Projects</Nav.Link>
          <Nav.Link href="#cv-download">My CV PDF</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Bio />
        <hr />
        <Education />
        <hr />
        <WorkExperience />
        <hr />
        <SkillsInterests />
        <hr />
        <ComputationalProjects />
      </Container>
    </div>
  );
}

export default App;
