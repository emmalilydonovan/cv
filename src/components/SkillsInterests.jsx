import React from "react";
import Section from "./Section";
import SectionRow from "./SectionRow";

class SkillsInterests extends React.Component {
    render() {

        const title = "My Skills.";

        const compTitle = "Technical Skills";
        const compDesc = "Java, React, Typescript, JavaScript, Python, HTML5 & CSS, C++,MATLAB.";

        const labTitle = "Laboratory Skills";
        const labDesc = "Trasfection, Elecrophoresis, PRC, DNA cloning.";

        const sciComTitle = "Science Communication";
        const sciComDesc = "Teaching, podcast scripting, museum exhibition guide, presenting."

        const dancingTitle = "Dancing";
        const dancingDesc = "Ballet, Hip-hop, contemporary, Jazz, Salsa";

        const walkingTitle = "Hiking & Walking";
        const walkingDesc = "One of my greatest passions is to go out walking, whether it be in the centre of London or the Breacon Beacons.";

        const pianoTitle = "Piano";
        const pianoDesc = "Grade 6, ABRSM, 2015.";
 
        return (
            <Section title={title} className="skills-interests-section">
                <SectionRow subheader={compTitle}>
                    {compDesc}
                </SectionRow>
                <SectionRow subheader={labTitle}>
                    {labDesc}
                </SectionRow>
                <SectionRow subheader={sciComTitle}>
                    {sciComDesc}
                </SectionRow>
                <SectionRow subheader={dancingTitle}>
                    {dancingDesc}
                </SectionRow>
                <SectionRow subheader={walkingTitle}>
                    {walkingDesc}
                </SectionRow>
                <SectionRow subheader={pianoTitle}>
                    {pianoDesc}
                </SectionRow>
            </Section>
        );
    }
}

export default SkillsInterests;