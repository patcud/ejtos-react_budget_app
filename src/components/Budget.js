import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const setBudget = (value) => {
        if (value > 20000) {
            alert("The value cannot exceed 20000");
        } else if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    onChange={(event) => setBudget(event.target.value)}
                    value={budget}
                />
            </span>
        </div>
    );
};
export default Budget;