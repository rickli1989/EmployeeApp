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
import dateFns from 'date-fns';
import { withRouter } from 'react-router-dom'
const styles = theme => ({
  root: {
    width: '100%'
  },
  h1: {
    padding: 0,
    margin: 0
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  companyEst: {
    display: 'flex',
    alignItems: 'flex-end'
  }
})

class AppNavBar extends React.Component {
  render() {
    const { classes } = this.props
    
    return (
      <div className={classes.root}>
        <AppBar position='absolute'>
          <Toolbar>
            {
              this.props.companyInfo ? <div className={classes.toolbar}>
                <div>
                  <h1 className={classes.h1}>{this.props.companyInfo.companyName}</h1>
                  <span>{this.props.companyInfo.companyMotto}</span>
                </div>
                <div className={classes.companyEst}>
                  {
                    dateFns.format(this.props.companyInfo.companyEst, 'DD MMM YYYY')
                  }
                </div>
              </div> : <React.Fragment></React.Fragment>
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(AppNavBar))
