import React, { ReactElement } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import { MarkdownEditorPage, Layout } from '@components';

import { IPost, MarkdownPayload } from '@interfaces';

import { HttpRequest } from '@services';

export default function NewPost(): ReactElement {
  const history = useHistory();

  const onSave = async (payload: MarkdownPayload): Promise<void> => {
    try {
      const post = await HttpRequest.createPost<IPost>(payload);
      toast.success(`${post.title} created.`);
      history.push('/posts');
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.response?.data ||
          error?.response ||
          'Failed to create post',
      );
    }
  };

  return (
    <Layout>
      <MarkdownEditorPage
        pageTitle="Add new post"
        onBack={() => history.push('/posts')}
        onSave={onSave}
      />
    </Layout>
  );
}
