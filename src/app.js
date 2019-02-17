import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import './index.css'
import fetch from 'isomorphic-fetch'
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import Layout from './routes'
const httpLink = new HttpLink({
  uri: 'https://us1.prisma.sh/rick-c026d0/westpac-test/dev',
  fetch
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const theme = createMuiTheme({
  palette: {
    primary: { main: '#e40000' }, // Westpac Red.
    secondary: { main: '#03A9F4' }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </MuiThemeProvider>
      </ApolloProvider>
    )
  }
}