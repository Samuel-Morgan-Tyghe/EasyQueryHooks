
# EasyQueryHooks

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

You can install `EasyQueryHooks` using npm or yarn:

```bash
npm install EasyQueryHooks
# or
yarn add EasyQueryHooks
```

## Usage

### Setup

Before using hooks, you may want to set up global options and an HTTP client.

```javascript
import { setupGlobalOptions, setupHTTPClient } from 'EasyQueryHooks';

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

## Contribution

Feel free to open issues or PRs! Check the Contribution Guide for more details.

## License

MIT

