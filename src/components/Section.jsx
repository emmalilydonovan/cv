import React from "react";
import {Container} from "react-bootstrap";

class Section extends React.Component {
    render() {
        return (
            <Container className={`${this.props.className}-section section-container`}>
                <div className={`${this.props.className}-section-title section-title`}>
                    {this.props.title}
                </div>
                <div className={`${this.props.className}-section-rows section-rows`}>
                    {this.props.children}
                </div>
            </Container>
        );
    }
}
export default Section;