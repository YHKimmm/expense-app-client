import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBudget } from '../app/budgetSlice';
import { useNavigate } from 'react-router-dom';

const BudgetForm = () => {
    const [budget, setBudgetValue] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setBudget(Number(budget)));
        localStorage.setItem('budget', budget);
        navigate('/expenses');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label htmlFor="budget" className="text-gray-500 font-bold">
                Enter your budget:
            </label>
            <input
                type="number"
                id="budget"
                value={budget}
                placeholder="0"
                onChange={(e) => setBudgetValue(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2"
            />
            <button
                type="submit"
                className="bg-purple-400 hover:bg-purple-500 text-white rounded-md px-3 py-2"
            >
                Submit
            </button>
        </form>
    );
};

export default BudgetForm;