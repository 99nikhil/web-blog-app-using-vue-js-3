import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

async function getAnonAccessT() {
  const url = `https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/blog-web-app-ddtvo/auth/providers/anon-user/login`;
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  })
    .then((res) => res.json())
    .then((data) => {
      return data.access_token;
    })
    .catch((err) => {
      console.log(err);
    });
}
// console.log("apolloclient");

export default async function getApolloClient() {
  const ANON_ACCESS = await getAnonAccessT();
  const cache = new InMemoryCache();
  const apolloClient = new ApolloClient({
    cache,
    uri: "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/blog-web-app-ddtvo/graphql",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${ANON_ACCESS}`,

      "Content-Type": "application/json",
    },
  });
  return apolloClient;
}
