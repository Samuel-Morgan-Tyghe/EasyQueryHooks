type ApiOptions = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  endpoint: string;
  body?: unknown;
  headers?: Record<string, string>;
};

export default async function api({
  method,
  endpoint,
  body,
  headers,
}: ApiOptions) {
  const response = await fetch(endpoint, {
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

export const get = async (
  endpoint: string,
  headers?: Record<string, string>
) => {
  return api({ method: "GET", endpoint, headers });
};

export const post = async (
  endpoint: string,
  body: unknown,
  headers?: Record<string, string>
) => {
  return api({ method: "POST", endpoint, body, headers });
};

export const put = async (
  endpoint: string,
  body: unknown,
  headers?: Record<string, string>
) => {
  return api({ method: "PUT", endpoint, body, headers });
};

export const patch = async (
  endpoint: string,
  body: unknown,
  headers?: Record<string, string>
) => {
  return api({ method: "PATCH", endpoint, body, headers });
};

export const remove = async (
  endpoint: string,
  body: unknown,
  headers?: Record<string, string>
) => {
  return api({ method: "DELETE", endpoint, body, headers });
};
