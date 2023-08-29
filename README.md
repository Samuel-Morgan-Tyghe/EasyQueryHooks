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

## Usage

### Setup

Like with @tanstack You need to Wrap a provider around the app and pass QueryClient in

```javascript
import { QueryClient } from "@tanstack/react-query";
import { WrapThatApp } from "easy-query-hooks";
import TestComponent from "./TestComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <WrapThatApp queryClient={queryClient}>
      <div className="App">
        <h1>Testing easy-query-hooks</h1>
        <TestComponent />
      </div>
    </WrapThatApp>
  );
}

export default App;
```


Before using hooks, you may want to set up global options and an HTTP client.

```javascript
import { setupGlobalOptions, setupHTTPClient } from 'easy-query-hooks';

const globalOptions = {
  queryOptions: {},
  mutationOptions: {}
};

setupGlobalOptions(globalOptions);

const httpClient = {
  get: yourGetFunction,
  post: yourPostFunction,
  // ...other methods
};

setupHTTPClient(httpClient);
```

### Hooks

#### `useGetAPI`

```javascript
const { data, isLoading } = useGetAPI({
  endpoint: '/api/users',
  options: {},
});
```

#### `usePostAPI`

```javascript
const { mutate } = usePostAPI({
  endpoint: '/api/users',
  options: {}
});
```

... other hooks.

## API

### useGetAPI
* `endpoint` - API endpoint to call.
* `options` - Optional custom React Query options.

... other hooks and their APIs.

## Examples

### Using `useGetAPI` to fetch users

```javascript
const { data, isLoading, error } = useGetAPI({
  endpoint: '/api/users',
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
const [name, setName] = useState("");

const { mutateAsync, isLoading, isError } = usePostAPI({
  endpoint: '/api/create',
  options: {}
});

const handleSubmit = async () => {
  try {
    const response = await mutateAsync({ name });
    console.log('Data saved:', response);
  } catch (error) {
    console.log('Save failed:', error);
  }
};
```

### Using `useGetInfiniteAPI` to fetch articles

```javascript
const { data, fetchNextPage, hasNextPage } = useGetInfiniteAPI({
  endpoint: '/api/articles?sort=desc',
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

### Using `setupGlobalOptions` to define Global Options

```javascript
import { useToast } from "@chakra-ui/react";
import { setupGlobalOptions } from 'easy-query-hooks';

const toast = useToast();

const globalMutationOptions = {
  onSuccess: () => {
    toast({
      title: "Success",
      description: "Your operation was successful",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  },
  onError: (error) => {
    toast({
      title: "Error",
      description: `Operation failed: ${error.message}`,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  },
};

const globalOptions = {
  mutationOptions: globalMutationOptions,
  // other options...
};

setupGlobalOptions(globalOptions);
```

## Contribution

Feel free to open issues or PRs! Check the [Contribution Guide](https://github.com/Samuel-Morgan-Tyghe/EasyQueryHooks/blob/main/CONTRIBUTING.md) for more details.

## License

MIT

GitHub Repository: [Samuel-Morgan-Tyghe/EasyQueryHooks](https://github.com/Samuel-Morgan-Tyghe/EasyQueryHooks)