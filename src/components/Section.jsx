import React from "react";

class Section extends React.Component {
    render() {
        return (
            <div className="section-div">
                <div className="section-title">{this.props.title}</div>
                <div className="section-rows">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Section;