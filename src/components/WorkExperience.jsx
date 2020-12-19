import React from "react";
import {Row } from 'react-bootstrap';

class WorkExperience extends React.Component {
  render() {
    return (
      <div className="section-div">
      <div className="section-header">Work Experience</div>
      <div>
        <Row>
          <Row className="row-header">
            Technology Graduate Analyst | Deutsche Bank | London | 08/2019-Ongoing
          </Row>
          <Row className="row-content">
            <ul>
              <li>Rotation 1: GTB Trade Finance and Lending, De-risking and Limit Management
                <ul>
                  <li>Helped to create Team City build pipelines and Fabric environments to help automate the CICD pipeline wihtin my team.</li>
                  <li>BDD end-to-end test writing using JBehave</li>
                </ul>
              </li>
              <li>Rotation 2:GTB Client Connectivity, Cash Manager Next Generation.</li>
              <ul>
                <li>Hands on development in Java using Spring Boot.</li>
                <li>Helping with the development of a Backend-for-frontend component in a microservice architecture.</li>
              </ul>
            </ul>
          </Row>
        </Row>
      </div>
    </div>
    );
  }
}

export default WorkExperience;