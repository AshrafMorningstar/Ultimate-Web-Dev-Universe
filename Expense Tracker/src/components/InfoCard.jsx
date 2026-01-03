/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '₹100 ' : '₹50 '}  
      in Category {isIncome ? 'Salary ' : 'Travel '}
      for {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  );
};

export default InfoCard;
