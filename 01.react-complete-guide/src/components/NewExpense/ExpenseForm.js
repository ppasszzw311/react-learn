import { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState(''); 
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  // 可依賴單個狀態變更、或是多個狀態變更
  const [enteredInput, setEnteredInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const titleChangeHandler = (event) => {
    setEnteredInput((prevState) => {
      return { ...prevState, title: event.target.value }
    })
  }
  const amountChangeHandler = (event) => {
    setEnteredInput((prevState) => {
      return { ...prevState, amount: event.target.value }
    })
  }
  const dateChangeHandler = (event) => {
    setEnteredInput((prevState) => {
      return { ...prevState, date: event.target.value }
    })
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
        </div>
        
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
