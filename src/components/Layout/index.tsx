import React, { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Footer } from '@components/Footer';
import { Sidebar, Userbar } from '@components/Navbar';
import { selectUser } from '@store';

import { User } from '@services';

type Props = {
  children: ReactElement;
};

export const Layout = ({ children }: Props): ReactElement => {
  const userState = useSelector(selectUser);

  const loadSession = async () => {
    if (!userState.user) {
      await User.initSession();
    }
  };

  useEffect(() => {
    loadSession();
  }, []);

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="content-page">
          <div className="content">
            <Userbar />
            <div className="container-fluid">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
