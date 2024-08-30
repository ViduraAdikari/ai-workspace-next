import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {API} from "@/const/values";

const isServer = typeof window === "undefined";

export const getApolloClient = () => {
  const httpLink = createHttpLink({
    uri: isServer ? API.graphQLSSRApi : API.graphQLApi,
  })

  return new ApolloClient({
    ssrMode: isServer,
    link: httpLink,
    cache: new InMemoryCache(),
  });
}
