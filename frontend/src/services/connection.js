import ApolloClient from 'apollo-boost';

const uri = `${process.env.REACT_APP_GRAPHQL_URL}`;

export const client = new ApolloClient({
  uri
});
