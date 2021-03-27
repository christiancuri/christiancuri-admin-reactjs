import React, { ReactElement, ReactNode } from 'react';

type Props = {
  name: string;
  right?: ReactNode;
};
export const Breadcrumb = ({ name, right }: Props): ReactElement => {
  return (
    <div className="page-title-box">
      {right ? <div className="page-title-right">{right}</div> : null}
      <h4 className="page-title">{name}</h4>
    </div>
  );
};
