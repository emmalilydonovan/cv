import React from "react";
import Section from "./Section";
import ProfilePic from "../images/emma-profile-pic.png";

class Bio extends React.Component {
    render() {
        const bioTitle = "Hello.";
        const bioText = `I graduated from MSci Natural Sciences at UCL in 2019, 
        where I studied Physics with Molecular & Cell Biology. Since then, my interest 
        in developing the coding skills I picked up during my degree drove me to undertake 
        the Technology graduate scheme at Deutsche Bank. I'm a keen learner at the start of my career, 
        and am excited to continue to diversify my skills within the technology industry.`;

        return (
            <div id="bio-section">
                <img src={ProfilePic} className="profile-img" />
                <Section title={bioTitle} className="bio">
                    {bioText}
                </Section>
            </div>
        );
    }
}

export default Bio;