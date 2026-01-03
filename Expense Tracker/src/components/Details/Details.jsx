/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

import useStyles from './styles';

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={ title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title= {title} />
      <CardContent>
        <Typography variant="h5">₹{total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
