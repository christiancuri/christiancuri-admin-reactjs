import React, { ReactElement } from 'react';
import { Col, Row } from 'react-bootstrap';

export const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <Row>
          <Col md="6">{new Date().getFullYear()} © Hyper - Coderthemes.com</Col>
          <Col md="6">
            <div className="text-md-right footer-links d-none d-md-block">
              <a href="#!">About</a>
              <a href="#!">Support</a>
              <a href="#!">Contact Us</a>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};
