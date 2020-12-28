import React from "react";
import Butterflies from "../images/butterflies-background-2.3.png";

class HeaderImage extends React.Component {
    render() {
        return (
            <div className="top-img-container">
                <img class="butterflies" src={Butterflies} alt="orange-cloud-img" />
                <h1 class="im-emma">I'm Emma .</h1>
                <h2 className="sub-title-im-emma">A junior <span>dev</span>eloper.</h2>
            </div>
        );
    }
}

export default HeaderImage;