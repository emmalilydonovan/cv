import React from "react";
import {Button} from "react-bootstrap";

class EmailMe extends React.Component {
    render() {
        return (
            <div class="contact-me" id="contact-section">
            <h2>Get In Touch</h2>
            {/* <a class="btn" href="mailto:emmalilydonovan@gmail.com">EMAIL ME</a> */}
            <Button variant="primary" size="lg" href="mailto:emmalilydonovan@gmail.com">
                EMAIL ME
            </Button>
        </div>
        );
    }
}

export default EmailMe;