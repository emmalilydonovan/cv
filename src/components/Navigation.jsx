import React from "react";
import { Nav, Navbar} from "react-bootstrap";

class Navigation extends React.Component {
    render() {
        return (
            <Navbar>
                <Nav className="mr-auto" id="navigation">
                    <Nav.Link href="#Bio">Bio</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#work-exp">Work Experience</Nav.Link>
                    <Nav.Link href="#skills-interests">Skills & Interests</Nav.Link>
                    <Nav.Link href="#comp-proj">Computational Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#cv-download">My CV PDF</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;