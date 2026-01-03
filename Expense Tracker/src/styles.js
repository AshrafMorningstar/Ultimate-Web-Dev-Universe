/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));
