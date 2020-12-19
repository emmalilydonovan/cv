import React from "react";
import PinkMountain from "../images/pink-pink-mountain.png";
import OrangeCloud from "../images/orange-cloud.png";

class HeaderImage extends React.Component {
    render() {
        return (
            <div className="top-img-container">
                <img class="top-cloud" src={OrangeCloud} alt="orange-cloud-img" />
                <h1 class="im-emma">I'm Emma .</h1>
                <h2>A junior <span>dev</span>eloper.</h2>
                <img class="mountain" src={PinkMountain} alt="pink-mountain-img" />
                <img class="bottom-cloud" src={OrangeCloud} alt="orange-cloud-img" />
            </div>
        );
    }
}

export default HeaderImage;