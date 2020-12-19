import { render } from "@testing-library/react";
import React from "react";

class SectionRow extends React.Component {
    render() {
        return (
            <div className="section-row-div">
                <Row className="section-row">
                    <Row>{this.props.subheader}</Row>
                    <Row>{this.props.children}</Row>
                </Row>
            </div>
        );
    }
}

export default SectionRow;