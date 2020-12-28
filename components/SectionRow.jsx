import React from "react";
import {Row, Col} from "react-bootstrap";

class SectionRow extends React.Component {
    render() {
        return (
            <Row className="section-row">
                <Col className="section-col">
                    <Row className="section-subheader">{this.props.subheader}</Row>
                    <Row className="section-row-body">{this.props.children}</Row>
                </Col>
            </Row>
        );
    }
}

export default SectionRow;