import React, { ReactElement } from 'react';

import { Footer } from '@components/Footer';
import { Sidebar, Userbar } from '@components/Navbar';

type Props = {
  children: ReactElement;
};

export const Layout = ({ children }: Props): ReactElement => {
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
