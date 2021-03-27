/* eslint-disable */
import { UI } from '@config';
import { selectUser } from '@store';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { Session } from '@services';
import { useHistory } from 'react-router';

const UserDropdown = React.forwardRef(
  (
    {
      children,
      onClick,
    }: { children: ReactElement; onClick: (...args: any) => void },
    ref: any,
  ) => (
    <a
      className="nav-link dropdown-toggle nav-user arrow-none mr-0"
      href=""
      role="button"
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ),
);

export const Userbar = (): ReactElement => {
  const userState = useSelector(selectUser);
  const history = useHistory();

  const onLogout = (): void => {
    Session.logout();
    window.location.href = '/login';
  };

  return (
    <div className="navbar-custom">
      <ul className="list-unstyled topbar-right-menu float-right mb-0">
        <li className="dropdown notification-list">
          <Dropdown>
            <Dropdown.Toggle as={UserDropdown}>
              <span>
                <span className="account-user-avatar">
                  <img
                    src={UI.DEFAULT_USER_PICTURE}
                    alt=""
                    className="rounded-circle"
                  />
                </span>
                <span className="account-user-name pt-1">
                  {userState.user?.name}
                </span>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => history.push('/account')}>
                <i className="mdi mdi-account-circle mr-1"></i>
                <span>My account</span>
              </Dropdown.Item>
              <Dropdown.Item onClick={onLogout}>
                <i className="mdi mdi-logout mr-1"></i>
                <span>Log out</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
};
