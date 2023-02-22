import { React, useState, useEffect } from 'react'
import { AddExpense, UpdateExpense, DeleteExpense } from '../services/expenses';
import { useDispatch } from 'react-redux';

const ExpenseForm = ({ expense, setIsEditing }) => {
    const dispatch = useDispatch();
    const descriptions = ['Groceries', 'Gas', 'Rent', 'Car Payment', 'Car Insurance']
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState(descriptions[0]);
    const [isNewExpense, setIsNewExpense] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        if (isNewExpense) {
            AddExpense(dispatch, { description: description, amount: amount })
        } else {
            UpdateExpense(dispatch, { id: expense.id, description: description, amount: amount })
            setIsEditing(false);
        }
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        DeleteExpense(dispatch, { id: expense.id, description: description, amount: amount })
        setIsEditing(false);
    }

    useEffect(() => {
        if (expense) {
            setIsNewExpense(false);
            setAmount(expense.amount);
            setDescription(expense.description);
        } else {
            setIsNewExpense(true);
        }
    }, [expense])

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base" htmlFor="description">
                    Description
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Enter description"
                >
                    {isNewExpense ? (
                        <option>{descriptions[0]}</option>
                    ) : (
                        <option>{description}</option>
                    )}
                    {descriptions.map((description, index) => (
                        <option key={index}>{description}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base" htmlFor="amount">
                    Amount
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    step="0.01"
                    placeholder={amount}
                />
            </div>
            {isNewExpense ? (
                <button
                    className="bg-purple-500 hover:bg-purple-500 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    style={{ marginTop: '10px' }}
                >
                    Add
                </button>
            ) : (
                <div className="flex items-center justify-between">
                    <button
                        className="text-purple-500 font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        style={{ marginRight: '2px' }}
                    >
                        <span
                            className="material-symbols-outlined text-lg sm:text-2xl">
                            done_outline
                        </span>
                    </button>
                    <button
                        className="text-purple-500 font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                        onClick={deleteHandler}
                        style={{
                            marginRight: '2px'
                        }}
                    >
                        <span
                            className="material-symbols-outlined text-lg sm:text-2xl">
                            delete
                        </span>
                    </button>
                    <button
                        className="text-purple-500 font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setIsEditing(false)}
                    >
                        <span
                            className="material-symbols-outlined text-lg sm:text-2xl">
                            close
                        </span>
                    </button>
                </div>
            )}
        </form>
    )
}

export default ExpenseForm