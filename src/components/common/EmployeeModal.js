import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import dateFns from 'date-fns';
const styles = theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
  content: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  img: {
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  mobile: {
    [theme.breakpoints.down('xs')]: {
      float: 'right'
    }
  }
})

class EmployeeModal extends React.Component {
  render() {
    const {employee, classes} = this.props;
    return (
        <Dialog
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{employee.firstName + " " + employee.lastName}
            <IconButton className={classes.closeButton} aria-label="Close" onClick={this.props.close}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent className={classes.content}>
            <div style={{marginRight: '20px', minWidth: 200}}>
              <img className={classes.img} src={employee.avatar} />
              <div className={classes.mobile}>{employee.jobTitle}</div>
              <div className={classes.mobile}>{employee.age} years old</div>
              <div className={classes.mobile}>Joined at : {dateFns.format(employee.dateJoined, 'DD MMM YYYY')}</div>
            </div>
            <DialogContentText>
              {employee.bio}
            </DialogContentText>
          </DialogContent>
        </Dialog>
    );
  }
}

EmployeeModal.propTypes = {
  employee: PropTypes.object.isRequired
};

export default withStyles(styles)(withMobileDialog()(EmployeeModal));