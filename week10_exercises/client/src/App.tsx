
import './App.css'
// https://www.apollographql.com/docs/react/get-started
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import SimpleCards from './components/SimpleCards';
import CreatePerson from './components/CreatePerson';

const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>

      {/* Different way of sending the client to the component: */}
      <CreatePerson/>
      <SimpleCards client={client} />
      </ApolloProvider>
    </>
  )
}

export default App
