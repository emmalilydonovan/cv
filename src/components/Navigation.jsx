import React from "react";
import {Navbar} from "react-bootstrap";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

class Navigation extends React.Component {
    render() {
        return (
            <Navbar>
                <ScrollLink
                    to="bio-section"
                    activeClass="active-nav" 
                    spy={true} 
                    smooth={true}
                    offset={-100}
                >
                    Bio
                </ScrollLink>
                <ScrollLink
                    to="education-section"
                    activeClass="active-nav" 
                    spy={true} 
                    smooth={true}
                    offset={-50}
                >
                    Education
                </ScrollLink>
                <ScrollLink
                    to="work-experience-section"
                    activeClass="active-nav" 
                    spy={true} 
                    smooth={true}
                    offset={-50}
                >
                    Work Experience
                </ScrollLink>
                <ScrollLink
                    to="skills-interests-section"
                    activeClass="active-nav" 
                    spy={true} 
                    smooth={true}
                    offset={-50}
                >
                    Skills & Interests
                </ScrollLink>
                <ScrollLink
                    to="computational-projects-section"
                    activeClass="active-nav" 
                    spy={true} 
                    smooth={true}
                    offset={-50}
                >
                    Compulational Projects
                </ScrollLink>
                <ScrollLink
                    to="contact-section"
                    activeClass="active-nav" 
                    spy={true} 
                    smooth={true}
                >
                    Contact
                </ScrollLink>
            </Navbar>
            
        );
    }
}

export default Navigation;