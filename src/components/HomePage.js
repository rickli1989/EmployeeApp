import React, { useState } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import EmployeeCard from './common/EmployeeCard';
import { StyledDiv } from './common/StyledDiv';
import EmployeeModal from './common/EmployeeModal';

const styles = theme => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 72,
    [theme.breakpoints.down('xs')]: {
      marginTop: 88
    }
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
  mediaDiv: {
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  }
})

function HomePage(props) {
  const [employeeDetail, setEmployeeDetail] = useState(null);
  const { classes } = props
  if (props.employeeQuery.loading) {
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
      {
        props.employeeQuery.employees.map(e => <StyledDiv className={classes.mediaDiv} onClick={() => {
          setEmployeeDetail(e);
        }} key={e.id} >
          <EmployeeCard employee={e}></EmployeeCard>    
        </StyledDiv>)
      }
      {
        employeeDetail ?
          <EmployeeModal employee={employeeDetail} open={employeeDetail ? true : false} close={() => setEmployeeDetail(null)}></EmployeeModal>
        : <React.Fragment></React.Fragment>
      }
    </div>
  )
}

export const EMPLOYEE_QUERY = gql`
  query employeeQuery {
    employees(orderBy: dateJoined_DESC) {
      id,
      firstName,
      lastName,
      jobTitle,
      bio,
      avatar,
      age,
      dateJoined
    }
  }
`

const HomePageWithQuery = compose(
  graphql(EMPLOYEE_QUERY, {
    name: 'employeeQuery',
    options: {
      fetchPolicy: 'network-only'
    }
  })
)(HomePage)

export default withStyles(styles)(HomePageWithQuery)
