import Header from '../shared/Header';
import { Container, Row, Col } from 'reactstrap';

const BaseLayout = (props) => {
  const { className, user, loading, children } = props;
  return (
    <div className="layout-container">
      <Header user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <div className="MainFooter">
        <Container>
          <Row>
          <Col xs="12" sm="12" md="4" lg="4">
              <p className="footerCopy">
             Adaptive Marketing  is a leading distribution and marketing company, providing high sales volume and quality solutions to any product or service. With our knowledge and resources, we are confident in understanding the unique needs of our clients and how to drive sales in order to exceed our clients’ goals.
              </p>
            </Col>
            <Col xs="12" sm="12" md="4" lg="4">
              <p className="footerCopy"></p>
            </Col>

            <Col xs="12" sm="12" md="4" lg="4" className="details">
              <span className="name">Brandon Povio</span>
              <p className="contactInfo">Mobile: 657 - 342 - 7016</p>
              <p className="contactInfo">brandonpovio@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </div>
      © 2024• Adaptive Marketing LLC
    </div>
  );
};

export default BaseLayout;
