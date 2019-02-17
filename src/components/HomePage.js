import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
const styles = theme => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    marginTop: 64,
    [theme.breakpoints.down('xs')]: {
      marginTop: 56,
      height: 'calc(100vh - 56px)'
    },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-x',
    backgroundAttachment: 'fixed',
    backgroundPosition: '100% 0',
    animation: 'moving 15s linear infinite'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: 1
  },
  heading: {
    position: 'absolute',
    color: '#ffffff',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: 70
  },
  subheading: {
    position: 'absolute',
    color: '#ffffff',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%,0)'
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none',
    '&:hover': {
      color: '#e40000'
    }
  }
})

class HomePage extends React.Component {
  componentDidCatch(error, info) {
    console.log(info.componentStack)
  }

  render() {
    const { classes } = this.props
    if (this.props.homeContentQuery.loading) {
      return (
        <div className={classes.root}>
          <CircularProgress size={100} />
        </div>
      )
    }
    return (
      <div
        className={classes.root}
        
      >
        
      </div>
    )
  }
}

export const HOME_CONTENT_QUERY = gql`
  query homeContentQuery {
    homeContents(orderBy: createdAt_DESC) {
      id,
      firstName,
      lastName,
      description,
      skills,
      avatar

    }
  }
`

const HomePageWithQuery = graphql(HOME_CONTENT_QUERY, {
  name: 'homeContentQuery',
  options: {
    fetchPolicy: 'network-only'
  }
})(HomePage)

export default withStyles(styles)(HomePageWithQuery)
