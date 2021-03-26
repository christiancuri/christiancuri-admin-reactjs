/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { api as API } from '../api';

export async function getHeaders(): Promise<{ [s: string]: any }> {
  return {};
}

export async function getModule<T>(
  url: string,
  config = {},
): Promise<AxiosResponse<T>> {
  return API.get(url, config);
}

export async function putModule<T>(
  url: string,
  data: { [s: string]: any },
): Promise<AxiosResponse<T>> {
  return API.put(url, data);
}

export async function postModule<T>(
  url: string,
  data: { [s: string]: any },
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  return API.post(url, data, config);
}

export async function deleteModule<T>(url: string): Promise<AxiosResponse<T>> {
  return API.delete(url);
}

export async function patchModule<T>(
  url: string,
  data: { [s: string]: any },
): Promise<AxiosResponse<T>> {
  return API.patch(url, data);
}
