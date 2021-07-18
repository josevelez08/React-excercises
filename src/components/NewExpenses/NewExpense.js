import React from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = () => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.ramdom().toString()
        };
        console.log(expenseData);
};
    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
    )
}

export default NewExpense;