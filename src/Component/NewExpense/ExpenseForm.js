import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // alternate way to set usestate
  // const [userInput, setUserInput] = useState({
  //     enteredTitle='',
  //     enteredAmount='',
  //     enteredDate=''
  // })

  const handleTitleInput = (event) => {
    setEnteredTitle(event.target.value);

    // alternate way to set usestate
    // setUserInput({
    //   ...userInput,
    //     enteredTitle: event.target.value
    // })
  };
  const handleAmountInput = (event) => {
    setEnteredAmount(event.target.value);

    // alternate way to set usestate
    // setUserInput({
    //   ...userInput,
    //     enteredAmount: event.target.value
    // })
  };
  const handleDateInput = (event) => {
    setEnteredDate(event.target.value);

    // alternate way to set usestate
    // setUserInput({
    //   ...userInput,
    //     enteredDate: event.target.value
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onAddExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          <input type='text' value={enteredTitle} onChange={handleTitleInput} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={handleAmountInput}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            value={enteredDate}
            onChange={handleDateInput}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancelEditing}>
          {" "}
          Cancel
        </button>
        <button type='Submit' onClic>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
