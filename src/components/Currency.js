import React, { useContext } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const currencyText = {
        '$': 'Currency ($ Dollar)',
        '£': 'Currency (£ Pound)',
        '€': 'Currency (€ Euro)',
        '₹': 'Currency (₹ Rupee)',
    }
    const changeCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }
    const optionStyle = {
        color: 'black',
        backgroundColor: 'lightgreen',
    }
    return (
        <div className='alert alert-secondary'>
            <label
                style={{
                    backgroundColor: 'lightgreen',
                    color: 'white',
                    borderRadius: '4px',
                }}
            >
                {currencyText[currency]}
                <MdArrowDropDown/>
                <select 
                    style={{
                        color: 'transparent',
                        backgroundColor: 'transparent',
                        outline: 'none',
                        width: '140px',
                        border: 0,
                        borderRadius: '4px',
                        position: 'absolute',
                        left: "15px"
                    }}
                    name='currency'
                    id='currency'
                    onChange={(event) => changeCurrency(event.target.value)}
                >
                    <option style={optionStyle} value='$'>$ Dollar</option>
                    <option style={optionStyle} value='£'>£ Pound</option>
                    <option style={optionStyle} value='€'>€ Euro</option>
                    <option style={optionStyle} value='₹'>₹ Rupee</option>
                </select>
            </label>
        </div>
    );
};

export default Currency;