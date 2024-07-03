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
            <Col xs="12" sm="12" md="6" lg="6">
              <h1 className="contactTitle">Contact:</h1>
            </Col>

            <Col xs="12" sm="12" md="4" lg="6" className="details">
              <span className="name">Brandon Povio</span>
              <p className="contactInfo">Mobile: 657 - 342 - 7016</p>
              <p className="contactInfo">brandonpovio@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BaseLayout;
