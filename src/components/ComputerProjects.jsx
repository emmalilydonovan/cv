import React from "react";
import Section from "./Section";
import SectionRow from "./SectionRow";

class ComputerProjects extends React.Component {
    render() {

        const title = "My Computational Projects.";

        const grnDstTitle = "Model simulation for genetic regulatory networks and their characterization using dynamical systems theory";
        const grnDstDesc = "Computational modelling done with Python and ODE mathematical models to elucidate how the architecture of genetic regulatory networks governs gene expression.";

        const hpcTitle = "High performance computing";
        const hpcDesc = "Working with PyOpenCL to develop asynchronous code in Python to solve the Poisson Equation using a Finite Difference Method. PyOpenCL was used as a method of parallelization in order to improve computational speed.";

        const sirTitle = "SIR Model of Influenza Outbreaks";
        const sirDesc = "Simulation of seasonal influenza outbreaks within a population an ODE mathematical model in Python.";

        const physLabTitle = "Mathematical model of a multi-component circuit";
        const physLabDesc ="Developed a supplementary mathematical model in MATLAB to help explain the mathematical theory behind a physics lab project.";

        const nnTitle = "Neural Network";
        const nnDesc = "My first expeirnece in coding came in my second year of university where I had to develop a simple neural network in MATLAB for the classification and diagnosis of breast cancer data.";

        return (
            <Section title={title} className="comp-proj-section">
                <SectionRow subheader={grnDstTitle}>
                    {grnDstDesc}
                </SectionRow>
                <SectionRow subheader={hpcTitle}>
                    {hpcDesc}
                </SectionRow>
                <SectionRow subheader={sirTitle}>
                    {sirDesc}
                </SectionRow>
                <SectionRow subheader={physLabTitle}>
                    {physLabDesc}
                </SectionRow>
                <SectionRow subheader={nnTitle}>
                    {nnDesc}
                </SectionRow>
            </Section>
        );
    }
}

export default ComputerProjects;