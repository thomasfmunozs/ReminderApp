import React from 'react';
import './App.css';
import RemindersContainer from './containers/reminders/Reminders';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My Reminders </h2>
      <RemindersContainer />
    </div>
  </ApolloProvider>
);

export default App;
