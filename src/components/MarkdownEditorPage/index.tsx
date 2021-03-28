import React, { ReactElement, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import { MarkdownPayload } from '@interfaces';

import { Breadcrumb } from '../Breadcrumb';
import { CustomCard } from '../Card';
import { MarkdownEditor } from '../MarkdownEditor';
import { Container } from './styles';

type Props = {
  defaultValue?: MarkdownPayload;
  onSave(payload: MarkdownPayload): void;
  pageTitle: string;
  onBack(): void;
};

export const MarkdownEditorPage = ({
  defaultValue,
  onSave,
  pageTitle,
  onBack,
}: Props): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);

  const [mdText, setMdText] = useState<string>(defaultValue?.value || '');
  const [title, setTitle] = useState<string>(defaultValue?.title || '');
  const [picture, setPicture] = useState<string>(defaultValue?.picture || '');
  const [description, setDescription] = useState<string>(
    defaultValue?.description || '',
  );

  useEffect(() => {
    if (defaultValue && Object.keys(defaultValue).length) {
      setMdText(defaultValue.value);
      setTitle(defaultValue.title);
      setPicture(defaultValue.picture);
      setDescription(defaultValue.description);
    }
  }, [defaultValue]);

  const handleOnSave = () => {
    onSave({
      title,
      picture,
      description,
      value: mdText,
    });
  };

  return (
    <>
      <Row>
        <Col sm="12">
          <Breadcrumb
            name={pageTitle}
            right={<Button onClick={onBack}>Back</Button>}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <CustomCard>
            <>
              <Row>
                <Col sm="6">
                  <Form.Group className="mb-3">
                    <Form.Label className="form-label">Title</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      autoComplete="off"
                      disabled={loading}
                    />
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group className="mb-3">
                    <Form.Label className="form-label">Picture</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={picture}
                      onChange={e => setPicture(e.target.value)}
                      autoComplete="off"
                      disabled={loading}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <Form.Group className="mb-3">
                    <Form.Label className="form-label">Description</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      autoComplete="off"
                      disabled={loading}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <Container>
                    <MarkdownEditor text={mdText} setText={setMdText} />
                  </Container>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm="12">
                  <Button onClick={handleOnSave}>Save</Button>
                </Col>
              </Row>
            </>
          </CustomCard>
        </Col>
      </Row>
    </>
  );
};
