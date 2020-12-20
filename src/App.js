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
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeaderImage />
      <Navigation />
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
      </Container>
      <Footer />
    </div>
  );
}

export default App;
