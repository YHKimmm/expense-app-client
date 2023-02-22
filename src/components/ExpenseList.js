import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetExpenses } from '../services/expenses';
import ExpenseForm from './ExpenseForm';

const ExpenseList = () => {
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expensesSlice.expenses)

    useEffect(() => {
        GetExpenses(dispatch)
    }, [])

    return (
        <>
            <div style={{ marginBottom: '1rem' }}>
                {expenses.map(expense => <ListRow key={expense.id} expense={expense} />)}
            </div>
        </>
    )
}

const ListRow = ({ expense }) => {
    const [isEditing, setIsEditing] = useState(false)
    return (
        <>
            {isEditing ?
                <ExpenseForm expense={expense} setIsEditing={setIsEditing} /> :
                <ExpenseRow expense={expense} isEditing={isEditing} setIsEditing={setIsEditing} />}
        </>
    )
}


const ExpenseRow = ({ expense, setIsEditing, isEditing }) => {
    return (
        <>
            <div className="flex flex-row items-center justify-between py-3">
                <div className="w-3/5 text-sm sm:text-base">{expense.description}</div>
                <div className="w-1/5 text-sm sm:text-base">${expense.amount}</div>
                <div className="w-1/5 flex justify-end">
                    <button
                        className='font-bold py-1 px-2 rounded focus:outline-none'
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {!isEditing && (
                            <span
                                className="material-symbols-outlined text-base sm:text-2xl"
                            >
                                edit
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}

export default ExpenseList