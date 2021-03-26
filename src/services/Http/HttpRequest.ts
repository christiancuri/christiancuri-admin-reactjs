import * as HttpMethods from './HttpMethods';

/**
 * System section
 */

export async function getPosts<T>(skip: number, limit: number): Promise<T> {
  return HttpMethods.getModule<T>(
    `/blog/posts?skip=${skip}&limit=${limit}`,
  ).then(({ data }) => data);
}

export async function getPost<T>(postId: string): Promise<T> {
  return HttpMethods.getModule<T>(`/blog/post/${postId}`).then(
    ({ data }) => data,
  );
}
