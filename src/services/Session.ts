import { AppConfig } from '@config';

import * as Storage from './Storage';

const { STORAGE_KEY } = AppConfig;

const memorySession: { [s: string]: string } = {};

const _getToken = (): string | undefined => {
  const token = Storage.local.getItem(STORAGE_KEY.TOKEN) || undefined;

  if (token) memorySession[STORAGE_KEY.TOKEN] = token;

  return token;
};

export const getToken = (): string | undefined =>
  memorySession[STORAGE_KEY.TOKEN] || _getToken();

export const isAuthenticated = (): boolean => getToken() !== undefined;

export const setSession = (token: string): void => {
  Storage.local.setItem(STORAGE_KEY.TOKEN, token);
  memorySession[STORAGE_KEY.TOKEN] = token;
};

export const clearSession = (): void => {
  Storage.local.removeItem(STORAGE_KEY.TOKEN);
  delete memorySession[STORAGE_KEY.TOKEN];
};

export const logout = (): void => {
  clearSession();
};
