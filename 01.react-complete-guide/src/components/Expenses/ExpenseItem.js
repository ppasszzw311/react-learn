import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  const expenseDate = props.date;
  const expenseAmount = props.amount;

  const [title, setTitle] = useState(props.title);

  // click 
  const clickHandler = () => {
    setTitle('Updated!')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
