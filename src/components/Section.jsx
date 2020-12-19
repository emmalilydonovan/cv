import React from "react";
import {Container} from "react-bootstrap";

class Section extends React.Component {
    render() {
        return (
            <Container className="section-div">
                <div className="section-title">{this.props.title}</div>
                <div className="section-rows">
                    {this.props.children}
                </div>
            </Container>
        );
    }
}
export default Section;