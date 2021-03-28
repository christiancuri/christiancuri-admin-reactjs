import { IUser } from '@interfaces';

import * as HttpMethods from './HttpMethods';

/**
 * System section
 */

export async function login<T>(email: string, password: string): Promise<T> {
  return HttpMethods.postModule<T>('/system/login', { email, password }).then(
    ({ data }) => data,
  );
}

/**
 * blog section
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

/**
 * User section
 */

export async function getUserInfo<T>(): Promise<T> {
  return HttpMethods.getModule<T>('/user/info').then(({ data }) => data);
}

export async function updateUserInfo<T>(payload: Partial<IUser>): Promise<T> {
  return HttpMethods.postModule<T>('/user', payload).then(({ data }) => data);
}
