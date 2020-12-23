import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import {Link} from "react-scroll";

class Navigation extends React.Component {
    render() {
        return (
            <Navbar>
                <Nav className="mr-auto" id="navigation">
                    <Nav.Link href="#Bio">Bio</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#work-exp">Work Experience</Nav.Link>
                    <Nav.Link href="#skills-interests">Skills & Interests</Nav.Link>
                    <Link to="computationalProjects" smooth={true} dur={1000}>Computational Projects</Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#cv-download">My CV PDF</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;