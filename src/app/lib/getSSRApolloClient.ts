import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {API} from "@/const/values";

export const getSSRApolloClient = async () => {
  const httpLink = createHttpLink({
    uri: API.graphQLSSRApi,
  })

  return new ApolloClient({
    ssrMode: true,
    link: httpLink,
    cache: new InMemoryCache(),
  });
}
