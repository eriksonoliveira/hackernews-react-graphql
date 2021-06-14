import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const URI = "http://localhost:4000";

const httpLink = createHttpLink({
  uri: URI,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export { client };
