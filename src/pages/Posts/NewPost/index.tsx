import React, { ReactElement, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

import { Breadcrumb, CustomCard, Layout, MarkdownEditor } from '@components';

export default function NewPost(): ReactElement {
  const history = useHistory();

  const [md, setMd] = useState<string>('');

  return (
    <Layout>
      <>
        <Row>
          <Col sm="12">
            <Breadcrumb
              name="Add new psot"
              right={
                <Button onClick={() => history.push('/posts')}>Back</Button>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <CustomCard>
              <MarkdownEditor />
            </CustomCard>
          </Col>
        </Row>
      </>
    </Layout>
  );
}
