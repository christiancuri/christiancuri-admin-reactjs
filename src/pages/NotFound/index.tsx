import React, { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

export default function NotFound(): ReactElement {
  const history = useHistory();

  useEffect(() => {
    toast.error(`Page not found`);
    history.push('/');
  }, []);

  return <> </>;
}
