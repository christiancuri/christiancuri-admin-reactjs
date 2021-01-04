import React, { ReactElement } from 'react';

export const Breadcrumb = (): ReactElement => {
  return (
    <div className="page-title-box">
      <div className="page-title-right">
        <ol className="breadcrumb m-0">
          <li className="breadcrumb-item">
            <a href="#!">Hyper</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#!">Tables</a>
          </li>
          <li className="breadcrumb-item active">Basic Tables</li>
        </ol>
      </div>
      <h4 className="page-title">Basic Tables</h4>
    </div>
  );
};
