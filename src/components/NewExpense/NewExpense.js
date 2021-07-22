import React, { useState } from "react";
import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [formVisibility, setFormVisibility] = useState(true);


  //get form status from the children components
  const foldFormHandler = (status) => {
    setFormVisibility(status);
  }; 
  
  const expendFormHandler = () => {
    setFormVisibility(true);
}

  return (
    <div className="new-expense">
      {formVisibility && (
        <ExpenseFrom
          onFoldForm={foldFormHandler}
          onSaveExpenseDate={onSaveExpenseDateHandler}
        />
      )}
      {!formVisibility && <button onClick={expendFormHandler}>Add New Expense</button> }
    </div>
  );
};

export default NewExpense;
