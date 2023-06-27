import React, { useContext } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <IconContext.Provider value={{ color: 'limegreen', size: 30 }}>
                <FaPlusCircle onClick={event=> increaseAllocation(props.name)} />
            </IconContext.Provider>
        </td>
        <td>
            <IconContext.Provider value={{ color: 'firebrick', size: 30 }}>
                <FaMinusCircle onClick={event=> decreaseAllocation(props.name)} />
            </IconContext.Provider>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;