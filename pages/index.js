import React from 'react';

// import MaterialContactform from './components/MaterialContactform';
import Link from 'next/link';
import { Jumbotron, Container } from 'reactstrap';
import { Row, Col, Button } from 'reactstrap';
import BaseLayout from './components/layouts/BaseLayouts.js';
import 'bootstrap/dist/css/bootstrap.css';

export default function Index() {
  const MainStyle = {
    overflowX: 'hidden',
  };

  const companyTitle = {
    textAlign: 'center',
    fontFamily: 'avenir',
  };

  const copy = {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'avenir',
  };
  return (
    <BaseLayout>
      <div className="jumbtron">
        <div className="container">
          <br></br>
          <br></br>
          <br></br>
          <Row>
          </Row>

          {/* */}

          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      <Container>
        <Row className="aboutSection">
          <Col xs="12" sm="12" md="12" lg="offset-4" xl="offset-4">
          </Col>
          <Col xs="12" sm="12" md="12" lg="offset-4">
            <h2 className="aboutTitle">Adaptive Marketing</h2>
            <p className="homepageCopy">
            At Adaptive Marketing, we specialize in crafting targeted direct marketing strategies that deliver measurable results. With years of experience and a team of dedicated professionals, we help businesses like yours reach and engage their audience through personalized marketing campaigns. Our approach is data-driven, ensuring that every effort is optimized for maximum impact and ROI.
            </p>
          </Col>
        </Row>
        <Row className="aboutSection">
          <Col xs="12" sm="12" md="6" lg="offset-4" xl="offset-4">
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col xs="4" sm="4">
            <center>
                {' '}
                <h3>Cold Call Marketing</h3>
            </center>
              {/* <img
                src="/cold_calling.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              /> */}

          </Col>
          <Col xs="4" sm="4">
            <center>
                <h3>Door to Door Marketing</h3>
            </center>
              {/* <img
                src="/doortodoor.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              /> */}

          </Col>
          <Col xs="4" sm="4">
            <center>
                {' '}
                <h3>Booth Marketing</h3>

            </center>

              {/* <img
                src="/booth_marketing.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              /> */}
          </Col>
        </Row>

        <br></br>
        <br></br>
        <Row>
          <Col xs="4" sm="4">
            <center>
                <h3>Email Marketing</h3>
            </center>
              {/* <img
                src="/email_marketing.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              /> */}
          </Col>
          <Col xs="4" sm="4">
            <center>
                <h3>SMS Marketing</h3>
            </center>
              {/* <img
                src="/sms_marketing.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              /> */}
          </Col>

          <Col xs="4" sm="4">
            <center>

                {' '}
                <h3>Direct Mail Services</h3>
            </center>

              {/* <img
                src="/direct_mail.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              /> */}
          </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
}
