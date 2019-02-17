import React from 'react'
import HomePage from './components/HomePage'
import { Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/common/Navbar'
import {
  graphql,
} from 'react-apollo'
import gql from 'graphql-tag'
import Loadable from 'react-loadable';

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar companyInfo={this.props.companyQuery.company}/>
        <Route exact path='/' component={HomePage} />
      </React.Fragment>
    )
  }
}

export const COMPANY_QUERY = gql `
  query companyQuery {
    company(where: {
      companyName: "Westpac"
    }) {
      id,
      companyName,
      companyMotto,
      companyEst
    }
  }
`

const LayoutQuery = graphql(COMPANY_QUERY, {
    name: 'companyQuery',
    options: {
      fetchPolicy: 'network-only'
    }
  })(Layout)

  export default LayoutQuery
