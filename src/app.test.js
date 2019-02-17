import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import TestRenderer from 'react-test-renderer'

const httpLink = new HttpLink({
  uri: 'https://us1.prisma.sh/rick-c026d0/prisma/dev'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders without error', () => {
  TestRenderer.create(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
})
