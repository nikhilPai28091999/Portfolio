import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Hero = () => {
    return (
        <Container fluid className="bg-light py-5">
          <Row className="align-items-center">
            <Col md={6}>
              <h1>Welcome to My Portfolio</h1>
              <p>Building innovative software solutions and scalable applications.</p>
              <Button variant="primary" href="#projects">
                View Projects
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="https://via.placeholder.com/500"
                alt="Software Engineer"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      );
}

export default Hero