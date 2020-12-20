import React from "react";
import Section from "./Section";
import SectionRow from "./SectionRow";

class Education extends React.Component {
    render() {
        const title = "Education.";

        const universityTitle = "MSci Natural Sciences | Physics & Molecular Cell Biology | UCL | 1st Class Honors | 2015-2019";
        const universityMastersProject = "Masters Project: The characterization of a bacterial biosensor using a mathematical and experimental approach.";
        const universityThirdYearProject = "3rd Year Project: The use of dynamical systems theory in the modelling of genetic oscillators and switches.";

        const highSchoolTitle = "A-levels & GCSEs | Stanwell School | Penarth, Vale of Glamorgan | 2008-2015";
        const aLevels = "A Levels: Mathematics (A*), Physics (A), Biology (A), Chemisry (A), Geography (A), Welsh Baccalaureate (A*).";
        const gcses = "GCSEs: 12A*, 1A, 1B, Distinction in Additional Mathematics.";
    

        const awardsTitle = "Awards";
        const biologyPrize = "Kathleen Evans Biology Prize, 2015";
        const dOfE = "Bronze, Silver and Gold Duke of Edinburgh Award, 2015";
        const academicAchievementPrize = "Lily Anne Rogers Prize for Academic Achievement, 2014";

        return (
            <Section title={title} id="education">
                <SectionRow subheader={universityTitle}>
                    <ul>
                        <li>{universityMastersProject}</li>
                        <li>{universityThirdYearProject}</li>
                    </ul>
                </SectionRow>
                <SectionRow subheader={highSchoolTitle}>
                    <ul>
                        <li>{aLevels}</li>
                        <li>{gcses}</li>
                    </ul>
                </SectionRow>
                <SectionRow subheader={awardsTitle}>
                    <ul>
                        <li>{biologyPrize}</li>
                        <li>{dOfE}</li>
                        <li>{academicAchievementPrize}</li>
                    </ul>
                </SectionRow>
            </Section>
        );
    }
}

export default Education;