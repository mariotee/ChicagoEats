import React from 'react';

import {Typography, CircularProgress, withStyles} from '@material-ui/core';
const style = {
  root: {
    textAlign: 'center',
    margin: '256px auto',
    color: '#fefefe',
  }
}

function Loading({...props}) {
  const {classes} = props;

  return(
    <div className={classes.root}>
      <Typography
        variant="display1"
        color="inherit"
      >
        {'might take a while to load since i use a free cloud service...'}
      </Typography>
      <br/><br/><br/>
      <CircularProgress
        color='secondary'
        size={120}
      />
    </div>
  )
}

export default withStyles(style)(Loading)