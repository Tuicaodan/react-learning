import React from 'react';
import ExpenseFrom from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const onSaveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };

    return ( 
        <div className='new-expense'>
            <ExpenseFrom onSaveExpenseDate={onSaveExpenseDateHandler} />            
        </div>
     );
}
 
export default NewExpense;