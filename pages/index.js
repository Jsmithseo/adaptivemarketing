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
      <br></br>
      <br></br>

      <div className="jumbtron">
        <div className="container">
          <center>
            <h2 className="jumbotronTitle">Adaptive Marketing</h2>
          </center>
          <p className="jumbotronCopy">
            Adaptive Marketing specializes in diverse growth strategies across
            various industries. We have successfully assisted numerous clients
            in expanding their businesses. We are proud to say that the
            businesses we've supported have achieved success and significantly
            expanded their reach.
          </p>
          <center>
            <Button>About Us</Button>
          </center>
          <br></br>
          <br></br>
          <Row></Row>

          {/* */}
        </div>
      </div>
      <Container>
        <Row className="aboutSection">
          <Col xs="12" sm="12" md="12" lg="offset-4" xl="offset-4"></Col>
          <Col xs="12" sm="12" md="12" lg="offset-4">
            <center>
              <h3>What We Do</h3>
            </center>
            <p className="companyCopy">
              At Adaptive Marketing, we specialize in crafting targeted direct
              marketing strategies that deliver measurable results. With years
              of experience and a team of dedicated professionals, we help
              businesses like yours reach and engage their audience through
              personalized marketing campaigns. Our approach is data-driven,
              ensuring that every effort is optimized for maximum impact and
              ROI.
            </p>
          </Col>
        </Row>
        <Row className="aboutSection">
          <Col xs="12" sm="12" md="6" lg="offset-4" xl="offset-4"></Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col xs="12" sm="12" md="4" lg="4">
            <center>
              {' '}
              <h3>Cold Call Marketing</h3>
            </center>
            <img
              src="/cold_calling.png" // Replace with your image path
              alt="Image"
              className="img-fluid client"
            />
          </Col>
          <Col xs="12" sm="12" md="4" lg="4">
            <center>
              <h3>Door to Door Marketing</h3>
            </center>
            <img
              src="/doortodoor.png" // Replace with your image path
              alt="Image"
              className="img-fluid client"
            />
          </Col>
          <Col xs="12" sm="12" md="4" lg="4">
            <center>
              {' '}
              <h3>Booth Marketing</h3>
            </center>

            <img
              src="/booth_marketing.png" // Replace with your image path
              alt="Image"
              className="img-fluid client"
            />
          </Col>
        </Row>

        <br></br>
        <br></br>
        <Row>
          <Col xs="12" sm="12" md="4" lg="4">
            <center>
              <h3>Email Marketing</h3>
            </center>
            <img
              src="/email_marketing.png" // Replace with your image path
              alt="Image"
              className="img-fluid client"
            />
          </Col>
          <Col xs="12" sm="12" md="4" lg="4">
            <center>
              <h3>SMS Marketing</h3>
            </center>
            <img
              src="/sms_marketing.png" // Replace with your image path
              alt="Image"
              className="img-fluid client"
            />
          </Col>

          <Col xs="12" sm="12" md="4" lg="4">
            <center>
              {' '}
              <h3>Direct Mail Services</h3>
            </center>

            <img
              src="/direct_mail.png" // Replace with your image path
              alt="Image"
              className="img-fluid client"
            />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
      </Container>
      <Row className="missionSection">
        <Col xs="12" sm="12" md="12" lg="offset-4" xl="offset-4"></Col>
        <Col xs="12" sm="12" md="12" lg="offset-4">
          <br></br>
          <br></br>
          <br></br>
          <center>
            <h3>Our Mission</h3>
          </center>
          <center>
            <h2 className="companyCopy">
              "Providing organizations with the tools they need to succeed."
            </h2>
          </center>
          <br></br>
          <br></br>
          <br></br>
        </Col>
  
      </Row>
      <Container>
        <center>
        <br></br>
          <br></br>
          <br></br>
      <Row className="aboutSection">
          <Col xs="12" sm="12" md="6" lg="6">
          <img
              src="users.png" // Replace with your image path
              alt="Image"
              className="img-fluid"
            />
          <h3>Expand You Customer Base</h3>
          <p>We offer a variety of channels that will put you right in front of your clients. Our ability to quickly expand the reach of your product or service through our complex network of mult.i-chain retail outlets, managerial resources, and independent sales operators</p>
          </Col>
          <Col xs="12" sm="12" md="12" lg="6">
          <img
              src="/cut.png" // Replace with your image path
              alt="Image"
              className="img-fluid"
            />
            <h3>Customized Approach</h3>
            <p>Whether you are a privately owned company, service provider, or an independent sales agent, our distribution network will give you an advantage, through the utilization of both our support and years of experience.</p>
          </Col>
          
        </Row>
        <br></br>
          <br></br>
          <br></br>
        </center>
      </Container>
      
    </BaseLayout>
  );
}
