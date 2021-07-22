import "./ExpenseForm.css";
import React from "react";

const foldNewExpense = (props) => {

    //once the button clicked, call this handler and return the status
    const expendFormHandler = () => {
        props.onExpendForm(true)
    }

  return (
    <form>
        <button onClick={expendFormHandler}>Add Expense</button>
    </form>
  );
};

export default foldNewExpense;
