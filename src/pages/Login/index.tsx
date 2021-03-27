import React, { FormEvent, ReactElement, useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router';

import { AppConfig, UI } from '@config';
import styled from 'styled-components';

import { api, HttpRequest, Session, User } from '@services';

import BackgroundSVG from './background.svg';

const Background = styled.div`
  background-image: url(${BackgroundSVG});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

type ILoginResponse = {
  accessToken: string;
};

const LoginPage = (): ReactElement => {
  const history = useHistory();

  if (Session.isAuthenticated()) history.push('/');

  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (!email) return setError('Please type your email');
    if (!pwd) return setError('Please type your password');

    setLoading(true);

    try {
      const { accessToken } = await HttpRequest.login<ILoginResponse>(
        email,
        pwd,
      );
      Session.setSession(accessToken);
      User.initSession();
      history.push('/');
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) setError('');
  }, [loading]);

  return (
    <Background>
      <div className="account-pages">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card">
                <div className="card-header pt-3 pb-2 text-center bg-primary">
                  <img src={UI.LOGO} alt="" height="60" />
                </div>

                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 font-weight-bold">
                      Sign In
                    </h4>
                    <p className="text-muted mb-4">
                      Welcome to {AppConfig.NAME}
                    </p>
                  </div>

                  {error && <Alert variant="danger">{error}</Alert>}

                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        placeholder="Write your email"
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Write your password"
                          onChange={e => setPwd(e.target.value)}
                          required
                        />
                        <div
                          className="input-group-append"
                          data-password="false"
                        >
                          <div className="input-group-text">
                            <span className="password-eye" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group pt-2">
                      <div className="form-group mb-0 text-center">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? 'Loading...' : 'Login'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-alt">
        {new Date().getFullYear()} © {AppConfig.NAME}
      </footer>
    </Background>
  );
};

export default LoginPage;
