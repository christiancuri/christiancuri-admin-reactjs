import React, { ReactElement } from 'react';
import { Col, Row } from 'react-bootstrap';

import { Layout } from '@components';

const Home = (): ReactElement => {
  return (
    <Layout>
      <>
        <Row>
          <Col sm="12">Dashboard</Col>
        </Row>
      </>
    </Layout>
  );
};

export default Home;
