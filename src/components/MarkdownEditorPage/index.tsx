import React, { ReactElement, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { toast, ToastOptions } from 'react-toastify';

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

  const [body, setBody] = useState<string>(defaultValue?.body || '');
  const [title, setTitle] = useState<string>(defaultValue?.title || '');
  const [picture, setPicture] = useState<string>(defaultValue?.picture || '');
  const [description, setDescription] = useState<string>(
    defaultValue?.description || '',
  );

  useEffect(() => {
    if (defaultValue && Object.keys(defaultValue).length) {
      setBody(defaultValue.body);
      setTitle(defaultValue.title);
      setPicture(defaultValue.picture);
      setDescription(defaultValue.description);
    }
  }, [defaultValue]);

  const handleOnSave = () => {
    const options: ToastOptions = { autoClose: 1500 };
    if (!title) return toast.error(`Missing title`, options);
    if (!picture) return toast.error(`Missing picture`, options);
    if (!description) return toast.error(`Missing description`, options);
    if (!body) return toast.error(`Missing body`, options);

    onSave({
      title,
      picture,
      description,
      body,
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
                    <MarkdownEditor text={body} setText={setBody} />
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
