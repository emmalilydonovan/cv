import React from "react";
import {Row } from 'react-bootstrap';
import Section from "./Section";
import SectionRow from "./SectionRow";

class WorkExperience extends React.Component {
  render() {
    const title = "Work Experience";

    const dbTitle = "Technology Graduate Analyst | Deutsche Bank | London | 08/2019-Ongoing";
    const dbRotation1Title = "Rotation 1: GTB Trade Finance and Lending, De-risking and Limit Management";
    const tfPoint1 = "Helped to create Team City build pipelines and Fabric environments to help automate the CICD pipeline wihtin my team.";
    const tfPoint2 = "BDD end-to-end test writing using JBehave";

    const dbRotation2Title = "Rotation 2:GTB Client Connectivity, Cash Manager Next Generation.";
    const cmngPoint1 = "Hands on development in Java using Spring Boot.";
    const cmngPoint2 = "Development of a Backend-for-frontend component in a microservice architecture.";
    const cmngPoint3 = "Development of an online banking application in React and Typescript."
  
    const uaemTitle = "Access Research Team Leader | University Global Health Research League Table | London | 08/2017-04/2019";
    const uaemPoint1 = "Evaluating top 25 UK research universities’ contributions to global health research and access to treatment worldwide."
    const uaemPoint2 = "Developing a fair scoring methodology based on the 2014 ranking by collaborating with Canadian and German teams.";
    const uaemPoint3 = "Organizing and managing team meetings, setting agendas, weekly tasks and deadlines for a team of 5.";

    const lmbcTitle = "Research Student | Quantitative Imaging & Nanobiophysics Group | LMCB | London | 08/2018-09/2018";
    const lmbcPoint1 = "Used four competing super-resolution Java algorithms to analyse data and determine the best image analysis approach.";
    const lmbcPoint2 = "Optimised live cell imaging conditions using new photoactivated blinking fluorophores and STORM microscopy.";

    const biopharmaTitle = "Conference Executive | UCL Biopharma Society | London | 08/2017-05/2018";
    const biopharmaPoint1 = "Organized the 2018 UCL Biopharma Conference on Genomics & Personalised healthcare for about 100 attendees";
    const biopharmaPoint2 = "Found and invited 8 high profile speakers from industry, research and business, informing them of their speaker duties.";
    const biopharmaPoint3 = "Developed the conference programme and managed 4 workshop agendas.";

    const plazaLatinaTitle = "Event Organizer | Carnaval Del Pueblo: Plaza Latina Festival | London | 05/2017-08/2017";
    const plazaLatinaPoint1 = "Helped organize London’s biggest Latino festival, attracting 15,000 people (almost doubled attendance since 2016).";
    const plazaLatinaPoint2 = "Managed social media presence and invitations of large interest groups over Facebook (designed posters campaigns).";
    const plazaLatinaPoint3 = "Managed and directed main stage (23 groups of performers including dance groups, singers, DJs and presenters).";

    const globalCitizenTitle = "Pro Bono Consultant | Global Citizenship | UCL | London | 06/2016";
    const globalCitizenPoint1 = "Developed a strategy for an African theatre company to integrate with the existing community within Queen Alexandra Olympic Park (QAOP) and simultaneously improve the wellbeing of the local elderly community.";
    const globalCitizenPoint2 = "Conducted interviews with locals and the CEO of Westfield regarding the local’s stigma towards the park.";

    const nuffieldTitle = "Nuffield Research Student | Cardiff University School of Physiotherapy | Cardiff | 07/2014-08/2014";
    const nuffieldPoint1 = "Investigated the movement of regional spinal segments in patients with chronic low back pain.";
    const nuffieldPoint2 = "Processed data using Vicon Nexus 1.6.1, MATLAB and statistical packages (SPSS, IBM version 20).";
    const nuffieldPoint3= "Produced a 15-page report and scientific poster synthesising the findings of my research.";
    const nuffieldPoint4 = "Presented my poster and discussed my project at a formal Nuffield celebration evening.";


    return (
      <Section title={title} clasSName="work-experience-section">
        <SectionRow subheader={dbTitle} className="we-db-row">
          <ul className="cv-list-wrapper">
            <li>{dbRotation1Title}</li>
            <ul className="cv-list">
              <li>{tfPoint1}</li>
              <li>{tfPoint2}</li>
            </ul>
            <li>{dbRotation2Title}</li>
            <ul className="cv-list">
              <li>{cmngPoint1}</li>
              <li>{cmngPoint2}</li>
              <li>{cmngPoint3}</li>
            </ul>
          </ul>
        </SectionRow>
        <SectionRow subheader={uaemTitle} className="we-uaem-row">
          <ul className="cv-list">
            <li>uaemPoint1</li>
            <li>{uaemPoint2}</li>
            <li>{uaemPoint3}</li>
          </ul>
        </SectionRow>
        <SectionRow subheader={lmbcTitle} className="we-lmcb-row">
          <ul className="cv-list">
            <li>{lmbcPoint1}</li>
            <li>{lmbcPoint2}</li>
          </ul>
        </SectionRow>
        <SectionRow subheader={biopharmaTitle} className="we-biopharma-row">
          <ul className="cv-list">
            <li>{biopharmaPoint1}</li>
            <li>{biopharmaPoint2}</li>
            <li>{biopharmaPoint3}</li>
          </ul>
        </SectionRow>
        <SectionRow subheader={plazaLatinaTitle} className="we-plazaLatina-row">
          <ul className="cv-list">
            <li>{plazaLatinaPoint1}</li>
            <li>{plazaLatinaPoint2}</li>
            <li>{plazaLatinaPoint3}</li>
          </ul>
        </SectionRow>
        <SectionRow subheader={globalCitizenTitle} className="we-gc-row">
          <ul className="cv-list">
            <li>{globalCitizenPoint1}</li>
            <li>{globalCitizenPoint2}</li>
          </ul>
        </SectionRow>
        <SectionRow subheader={nuffieldTitle} className="we-nuffield-row">
          <ul className="cv-list">
            <li>{nuffieldPoint1}</li>
            <li>{nuffieldPoint2}</li>
            <li>{nuffieldPoint3}</li>
            <li>{nuffieldPoint4}</li>
          </ul>
        </SectionRow>
      </Section>
    );
  }
}

export default WorkExperience;