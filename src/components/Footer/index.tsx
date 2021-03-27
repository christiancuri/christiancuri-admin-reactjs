import React, { ReactElement } from 'react';
import { Col, Row } from 'react-bootstrap';

import { AppConfig } from '@config';

export const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <Row>
          <Col md="12">
            {new Date().getFullYear()} © {AppConfig.NAME} - {AppConfig.DOMAIN}
          </Col>
        </Row>
      </div>
    </footer>
  );
};
