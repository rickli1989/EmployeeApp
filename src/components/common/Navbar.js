import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import QuestionIcon from '@material-ui/icons/QuestionAnswer'
import MoreIcon from '@material-ui/icons/MoreVert'
import { StyledLink } from './StyledLink'
import { withRouter } from 'react-router-dom'
const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  iconText: {
    marginRight: 10
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  titleMobile: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  linkColor: {
    color: '#FFF'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
})

class AppNavBar extends React.Component {
  state = {
    mobileMoreAnchorEl: null
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }

  openLink(route) {
    this.props.history.push(route)
    this.handleMobileMenuClose()
  }

  render() {
    const { mobileMoreAnchorEl } = this.state
    const { classes } = this.props
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        
      </Menu>
    )

    return (
      <div className={classes.root}>
        <AppBar position='absolute'>
          <Toolbar>
            
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    )
  }
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(AppNavBar))
