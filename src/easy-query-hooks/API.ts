import { ApiOptions, HttpClientParams } from "./index.d";

export default async function api({ method, url, body, headers }: ApiOptions) {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!response.ok) {
    throw Error(await response.text());
  }
  const data = await response.json();
  return data;
}

export const get = async ({ url, header }: HttpClientParams) => {
  return api({ method: "GET", url, headers: header });
};

export const post = async ({ url, data, header }: HttpClientParams) => {
  return api({ method: "POST", url, body: data, headers: header });
};

export const put = async ({ url, data, header }: HttpClientParams) => {
  return api({ method: "PUT", url, body: data, headers: header });
};

export const patch = async ({ url, data, header }: HttpClientParams) => {
  return api({ method: "PATCH", url, body: data, headers: header });
};

export const remove = async ({ url, data, header }: HttpClientParams) => {
  return api({ method: "DELETE", url, body: data, headers: header });
};

export const APIOBJ = {
  get,
  post,
  put,
  patch,
  remove,
};

export const getDefaultClient = (key: string) =>
  ({
    get,
    post,
    put,
    patch,
    remove,
  }[key] ?? get);
