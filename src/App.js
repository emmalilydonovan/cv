import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './App.css';
import Navigation from "./components/Navigation";
import HeaderImage from "./components/HeaderImage";
import Bio from "./components/Bio";
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import SkillsInterests from './components/SkillsInterests';
import ComputationalProjects from './components/ComputerProjects';

function App() {
  return (
    <div className="App">
      <HeaderImage />
      <Navigation />
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
