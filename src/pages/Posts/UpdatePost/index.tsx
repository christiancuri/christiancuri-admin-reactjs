import React, { ReactElement } from 'react';
import { useHistory } from 'react-router';

import { MarkdownEditorPage, Layout } from '@components';

import { MarkdownPayload } from '@interfaces';

export default function UpdatePost(): ReactElement {
  const history = useHistory();

  const onSave = async (payload: MarkdownPayload): Promise<void> => {
    //
  };

  return (
    <Layout>
      <MarkdownEditorPage
        pageTitle="Update Post"
        onBack={() => history.push('/')}
        onSave={onSave}
      />
    </Layout>
  );
}
