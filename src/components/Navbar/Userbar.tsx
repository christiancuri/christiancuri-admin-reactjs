/* eslint-disable */
import { UI } from '@config';
import { selectUser } from '@store';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { HttpRequest, Session } from '@services';
import { useHistory } from 'react-router';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

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

  const onRemoteDeploy = (): void => {
    confirmAlert({
      title: `Remote Deploy`,
      message: `You wanna deploy the site ?`,
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            await HttpRequest.remoteDeploy();
            toast.success(`Remote dispatch sent with sucess.`, {
              autoClose: 1750,
            });
          },
        },
        {
          label: 'No',
          onClick: () => ({}),
        },
      ],
    });
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
                    src={userState.user?.picture || UI.DEFAULT_USER_PICTURE}
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
              <Dropdown.Item onClick={onRemoteDeploy}>
                <i className="mdi mdi-access-point-network mr-1"></i>
                <span>Deploy NextJS</span>
              </Dropdown.Item>
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
