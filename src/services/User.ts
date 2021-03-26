import { setUser, Store } from '@store';

import { IUser } from '@interfaces/user';

import { HttpRequest } from './Http';

async function fetchUserInfo(): Promise<void> {
  const userInfo: IUser = {
    _id: '',
    name: '',
    username: '',
    email: '',
    bio: '',
  }; // await HttpRequest.getUserInfo<IUser>();
  Store.dispatch(setUser({ ...userInfo }));
}

export async function initSession(): Promise<void> {
  await Promise.all([fetchUserInfo()]);
}
