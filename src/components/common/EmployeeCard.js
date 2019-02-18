import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import dateFns from 'date-fns';
const styles = theme => ({
  card: {
    display: 'flex',
    minHeight: 151,
    maxHeight: 151,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 400,
      minWidth: 400,
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100% - 151px)'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    minWidth: 151,
    minHeight: 151
  },
  date: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

class EmployeeCard extends React.Component {

  render() {
    const {
      classes,
      employee,
      theme
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={employee.avatar}
          title={employee.firstName + ' ' + employee.lastName}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {employee.firstName + ' ' + employee.lastName}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {employee.jobTitle}
            </Typography>
          </CardContent>
          <div className={classes.date}>
            <Typography color="textSecondary">
              Joined at
            </Typography>
            <Typography color="textSecondary">
              {
              dateFns.format(employee.dateJoined, 'DD MMM YYYY')
              }
            </Typography>
          </div>
        </div>
      </Card>
    )
  }
}

EmployeeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(EmployeeCard);