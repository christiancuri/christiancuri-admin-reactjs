import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Breadcrumb, CustomCard, Layout } from '@components';
import { UI } from '@config';
import { useDebounce } from '@hooks';
import { selectUser, setUser } from '@store';

import { IUser } from '@interfaces';

import { HttpRequest } from '@services';

import { SavingLabel } from './styles';

export default function Account(): ReactElement {
  const userState = useSelector(selectUser);
  const dispath = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [picture, setPicture] = useState<string>('');

  const debounceName = useDebounce(name, 1000);
  const debounceEmail = useDebounce(email, 1000);
  const debouncePicture = useDebounce(picture, 500);

  const handleChange = async (
    fieldName: string,
    value: string,
  ): Promise<void> => {
    setLoading(true);
    try {
      const updatedUser = await HttpRequest.updateUserInfo<IUser>({
        [fieldName]: value,
      });
      dispath(setUser(updatedUser));
      toast.success(`${fieldName} saved.`, {
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.response?.data ||
          error?.response ||
          'Failed to update',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debounceName && debounceName !== userState.user?.name) {
      handleChange('name', debounceName);
    }
  }, [debounceName]);

  useEffect(() => {
    if (debounceEmail && debounceEmail !== userState.user?.email) {
      handleChange('email', debounceEmail);
    }
  }, [debounceEmail]);

  useEffect(() => {
    if (debouncePicture && debouncePicture !== userState.user?.picture) {
      handleChange('picture', debouncePicture);
    }
  }, [debouncePicture]);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const onChangePicture = (e: ChangeEvent<HTMLInputElement>): void => {
    setPicture(e.target.value);
  };

  useEffect(() => {
    if (userState.user) {
      const { email: uEmail, name: uName, picture: uPicture } = userState.user;
      setName(uName);
      setEmail(uEmail);
      setPicture(uPicture);
    }
  }, [userState]);

  return (
    <Layout>
      <>
        <Row>
          <Col sm="12">
            <Breadcrumb name="My account" />
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <CustomCard>
              <div className="card-body">
                <div className="text-center">
                  <img
                    src={userState.user?.picture || UI.DEFAULT_USER_PICTURE}
                    className="rounded-circle avatar-lg img-thumbnail"
                    alt="profile"
                  />

                  <h4 className="mb-0 mt-2">
                    {userState.user?.name || 'Loading...'}
                  </h4>
                  <p className="text-muted font-14" />
                </div>

                <div className="text-start mt-3">
                  {/* <h4 className="font-13 text-uppercase">About Me :</h4>
                  <p className="text-muted font-13 mb-3">
                    Hi Im Johnathn Deo,has been the industrys standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type.
                  </p> */}
                  <p className="text-muted mb-2 font-13">
                    <strong>Email: </strong>
                    <span className="ms-2">
                      {userState.user?.email || 'Loading...'}
                    </span>
                  </p>
                </div>
              </div>
            </CustomCard>
          </Col>
          <Col sm="6">
            <CustomCard>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="form-label">Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={onChangeName}
                    autoComplete="off"
                    disabled={loading}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="form-label">Email</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={onChangeEmail}
                    autoComplete="off"
                    disabled={loading}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="form-label">Picture url</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    value={picture}
                    onChange={onChangePicture}
                    autoComplete="off"
                    disabled={loading}
                  />
                </Form.Group>

                <div className="mb-3">
                  <Button>Update password</Button>
                  {loading && <SavingLabel>Saving...</SavingLabel>}
                </div>
              </Form>
            </CustomCard>
          </Col>
        </Row>
      </>
    </Layout>
  );
}
