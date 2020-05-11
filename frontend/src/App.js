import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './services/connection';
import {EndPointQuery} from './components/Query';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <EndPointQuery /> 
    </ApolloProvider>
  );
}

export default App;