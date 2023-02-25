import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetExpenses } from '../services/expenses';
import ExpenseForm from './ExpenseForm';

const ExpenseList = () => {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expensesSlice.expenses);
    const [highlightedExpenses, setHighlightedExpenses] = useState(
        JSON.parse(localStorage.getItem('highlightedExpenses')) || []
    );

    useEffect(() => {
        GetExpenses(dispatch);
    }, [dispatch]);

    const toggleHighlight = (expense) => {
        if (highlightedExpenses.includes(expense)) {
            setHighlightedExpenses(
                highlightedExpenses.filter((e) => e !== expense)
            );
        } else {
            setHighlightedExpenses([...highlightedExpenses, expense]);
        }
    };

    useEffect(() => {
        localStorage.setItem(
            'highlightedExpenses',
            JSON.stringify(highlightedExpenses)
        );
    }, [highlightedExpenses]);

    return (
        <>
            <div style={{ marginBottom: '1rem' }}>
                {expenses.map((expense) => (
                    <ListRow
                        key={expense.id}
                        expense={expense}
                        highlightedExpenses={highlightedExpenses}
                        toggleHighlight={toggleHighlight}
                    />
                ))}
            </div>
        </>
    );
};

const ListRow = ({ expense, highlightedExpenses, toggleHighlight }) => {
    const [isEditing, setIsEditing] = useState(false);
    const isHighlighted = highlightedExpenses.includes(expense.id);

    return (
        <>
            {isEditing ? (
                <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
            ) : (
                <ExpenseRow
                    expense={expense}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    isHighlighted={isHighlighted}
                    toggleHighlight={toggleHighlight}
                />
            )}
        </>
    );
};

const ExpenseRow = ({
    expense,
    setIsEditing,
    isEditing,
    isHighlighted,
    toggleHighlight,
}) => {
    const handleEditClick = (event) => {
        event.stopPropagation();
        setIsEditing(!isEditing);
    };

    return (
        <>
            <div
                className={`flex flex-row items-center justify-between py-3 cursor-pointer ${isHighlighted ? "bg-violet-300 text-white rounded-lg font-bold mb-3" : ""
                    }`}
                onClick={() => toggleHighlight(expense.id)}
            >
                <div className="w-3/5 text-sm sm:text-base">{expense.description}</div>
                <div className="w-1/5 text-sm sm:text-base">${expense.amount}</div>
                <div className="w-1/5 flex justify-end">
                    <button
                        className="font-bold py-1 px-2 rounded focus:outline-none"
                        onClick={handleEditClick}
                    >
                        {!isEditing && (
                            <span className="material-symbols-outlined text-base sm:text-2xl">
                                edit
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ExpenseList;