import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { UI } from '@config';

const SidebarBadge = (): ReactElement => {
  const [display, setDisplay] = useState(false);

  if (!display) {
    return <></>;
  }

  return (
    <div className="help-box text-white text-center">
      <span
        className="float-right close-btn text-white"
        role="button"
        aria-hidden
        onClick={() => setDisplay(false)}
      >
        <i className="mdi mdi-close" />
      </span>
      <img src="assets/images/help-icon.svg" height="90" alt="Helper Icon" />
      <h5 className="mt-3">Unlimited Access</h5>
      <p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
      <a href="#!" className="btn btn-outline-light btn-sm">
        Upgrade
      </a>
    </div>
  );
};

export const Sidebar = (): ReactElement => {
  const history = useHistory();

  return (
    <div className="left-side-menu">
      <a href="index.html" className="logo text-center logo-light">
        <span className="logo-lg">
          <img src={UI.LOGO_WHITE} alt="" height="50" />
        </span>
        <span className="logo-sm">
          <img src={UI.LOGO_WHITE} alt="" height="50" />
        </span>
      </a>

      <div className="h-100" id="left-side-menu-container" data-simplebar>
        <ul className="metismenu side-nav">
          <li className="side-nav-item">
            <span
              className="side-nav-link"
              onClick={() => history.push('/')}
              aria-hidden
            >
              <i className="uil-calender" />
              <span> Dashboard </span>
            </span>
          </li>

          <li className="side-nav-item">
            <span
              className="side-nav-link"
              onClick={() => history.push('/posts')}
              aria-hidden
            >
              <i className="uil-calender" />
              <span> Posts </span>
            </span>
          </li>

          <li className="side-nav-title side-nav-item">Navigation</li>

          <li className="side-nav-item">
            <a href="#!" className="side-nav-link">
              <i className="uil-home-alt" />
              <span> With arrow </span>

              <span className="menu-arrow" />
            </a>
            <ul className="side-nav-second-level">
              <li>
                <a href="dashboard-analytics.html">Analytics</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href="#!" className="side-nav-link">
              <i className="uil-home-alt" />
              <span className="badge badge-success float-right">4</span>
              <span> Dashboards </span>
            </a>
            <ul className="side-nav-second-level">
              <li>
                <a href="dashboard-analytics.html">Analytics</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href="apps-calendar.html" className="side-nav-link">
              <i className="uil-calender" />
              <span> Calendar </span>
            </a>
          </li>
        </ul>
        <SidebarBadge />
        <div className="clearfix" />
      </div>
    </div>
  );
};
