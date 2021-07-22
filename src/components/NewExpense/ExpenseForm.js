import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseFrom = (prop) => {
  //multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangehandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangehandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    prop.onSaveExpenseDate(expenseData);
    //clean the forms
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const clickFoldHandler = () => {
    prop.onFoldForm(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={clickFoldHandler}>Cancel</button>
        <button className="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
