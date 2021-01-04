import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement;
  title?: string;
  subTitle?: string;
};

export const CustomCard: React.FC<Props> = ({ children, title, subTitle }) => {
  return (
    <div className="card">
      <div className="card-body">
        {title && <h4 className="header-title">{title}</h4>}
        {subTitle && <p className="text-muted font-14">{subTitle}</p>}
        {children}
      </div>
    </div>
  );
};
