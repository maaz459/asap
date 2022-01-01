import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://64.225.87.170:1337/graphql",
    cache: new InMemoryCache(),
});

export default client;