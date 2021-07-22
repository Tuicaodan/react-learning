import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteryear, setFilterYear] = useState("2020");

  const selectYearHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() == filteryear;
  });

  let expensesContent = <h2>No expenses found.</h2>;
  if (filteredExpenses.length >0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteryear} onSelectYear={selectYearHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContent}
      
    </Card>
  );
};

export default Expenses;
