import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import { MarkdownEditorPage, Layout } from '@components';

import { IPost, MarkdownPayload } from '@interfaces';

import { HttpRequest } from '@services';

type RouteProps = {
  id: string;
};

type Props = RouteComponentProps<RouteProps>;

export default function UpdatePost({ match }: Props): ReactElement {
  const history = useHistory();

  const { id } = match.params;

  const [post, setPost] = useState<IPost>();

  const fetchPost = async (postId: string): Promise<void> => {
    const post = await HttpRequest.getPost<IPost>(postId);
    setPost(post);
  };

  const onSave = async (payload: MarkdownPayload): Promise<void> => {
    //
  };

  useEffect(() => {
    fetchPost(id);
  }, []);

  return (
    <Layout>
      <MarkdownEditorPage
        pageTitle="Update Post"
        onBack={() => history.push('/')}
        onSave={onSave}
        defaultValue={post}
      />
    </Layout>
  );
}
