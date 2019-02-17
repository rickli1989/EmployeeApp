import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './HomePage'
import { HOME_CONTENT_QUERY } from './HomePage'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import TestRenderer from 'react-test-renderer'
import { MockedProvider } from 'react-apollo/test-utils'
const mocks = [
  {
    request: {
      query: HOME_CONTENT_QUERY
    }
  }
]

it('renders without error', () => {
  TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <HomePage />
    </MockedProvider>
  )
})

it('should render loading state initially', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={[]}>
      <HomePage />
    </MockedProvider>
  )

  const tree = component.toJSON()
  expect(tree.children[0].props.role).toContain('progressbar')
})
