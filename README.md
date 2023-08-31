# easy-query-hooks

Utility hooks for React Query, providing an easy and consistent way to make API calls. Simplifies your React application by abstracting common HTTP methods.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
    - [Setup](#setup)
    - [Hooks](#hooks)
3. [API](#api)
4. [Examples](#examples)
5. [Contribution](#contribution)
6. [License](#license)

## Installation

You can install `easy-query-hooks` using npm or yarn:

```bash
npm install easy-query-hooks
# or
yarn add easy-query-hooks
```

If you havent already you will need to follow the setup for @tanstack

```bash
npm install @tanstack/react-query
# or
yarn add @tanstack/react-query
```


## Usage

```javascript
import { useGetAPI } from "easy-query-hooks";

const TestComponent = () => {
  type post = { title: string };
  const { data: posts, isLoading } = useGetAPI<post[]>({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        posts?.map((post) => <div>{post.title}</div>)
      )}
    </>
  );
};

export default TestComponent;
```

### Setup

Like with @tanstack You need to Wrap a provider around the app and pass QueryClient in


**setUpEasyQueryHooks({ useMutation, useQuery, useInfiniteQuery } is Required**

```javascript
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { setUpEasyQueryHooks } from "easy-query-hooks";

const queryClient = new QueryClient();

setUpEasyQueryHooks({ useMutation, useQuery, useInfiniteQuery });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Testing easy-query-hooks</h1>
      </div>
    </QueryClientProvider>
  );
}

export default App;

```


Before using hooks, you may want to set up default options for (queryOptions,mutationOptions,infiniteQueryOptions), defaultHeaders and customise HTTP client, useful for adding axios. 



```javascript
const customGet = async ({ url, data, header }: HttpClientParams) =>
  axios
    .get(url, {
      headers: header,
    })
    .then((res) => res.data);

setUpEasyQueryHooks({
  useInfiniteQuery,
  useMutation,
  useQuery,
  get: customGet,
  queryOptions: {
    onError: (err: unknown) => {
      if (err instanceof Error) {
        setToast(err.message, "Error");
      }
    },
  },
  defaultHeaders: authHeaders,
});
```

### Hooks

#### `useGetAPI`

```javascript
  const { data: posts } = useGetAPI<post[]>({
    url: "https://jsonplaceholder.typicode.com/posts",
  });
```

#### `usePostAPI`

```javascript
const { mutate } = usePostAPI<TRequest, TResponse>({
  url: '/api/users',
});
```
#### `usePatchAPI`

```javascript
const { mutate } = usePatchAPI<TRequest, TResponse>({
  url: '/api/users',
});
```
#### `usePutAPI`

```javascript
const { mutate } = usePutAPI({
  url: '/api/users',
});
```
#### `useDeleteAPI`

```javascript
const { mutate } = useDeleteAPI({
  url: '/api/users',
});
```

## API

## Examples

### Using `useGetAPI` to fetch users

```javascript
const { data, isLoading, error } = useGetAPI({
  url: '/api/users',
});

if (isLoading) return "Loading...";
if (error) return "An error has occurred: " + error.message;

return (
  <ul>
    {data.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

### Using `usePostAPI` to Post Data

```javascript
  const { mutate: submitPost } = usePostAPI({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  const handleSubmit = () => {
    submitPost({
      title: "foo",
      body: "bar",
      userId: 1,
    });
  };
```
### Using `useDeleteAPI` to Post Data

```javascript
  const { mutateAsync: deletePost } = useDeleteAPI({
    url: "https://jsonplaceholder.typicode.com/posts/${id}",
  });

  const handleDelete = async() => {
    await deletePost();
  };
```

### Using `useGetInfiniteAPI` to fetch articles

```javascript
const { data, fetchNextPage, hasNextPage } = useGetInfiniteAPI({
  url: '/api/articles?sort=desc',
  hasParams: true,
  options: {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextPageToken;
    },
  },
});

const fetchMoreArticles = () => {
  if (hasNextPage) {
    fetchNextPage();
  }
};
```

## Contribution

Feel free to open issues or PRs! Check the [Contribution Guide](https://github.com/Samuel-Morgan-Tyghe/EasyQueryHooks/blob/main/CONTRIBUTING.md) for more details.

## License

MIT

GitHub Repository: [Samuel-Morgan-Tyghe/EasyQueryHooks](https://github.com/Samuel-Morgan-Tyghe/EasyQueryHooks)