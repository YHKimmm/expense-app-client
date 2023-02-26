import React from "react";
import { ToastContainer } from 'react-toastify';
import ExpenseForm from '../ExpenseForm';
import ExpenseList from '../ExpenseList';
import BudgetTracker from "../BudgetTracker";

const ExpensePage = () => {
    return (
        <div className="mt-10">
            <div className="max-w-[80%] md:max-w-2xl m-auto">
                <ToastContainer />
                <h3 className="mb-3 text-gray-500 font-bold text-lg sm:text-2xl">Manage Budget</h3>
                <BudgetTracker />
                <h3 className="mb-3 text-gray-500 font-bold text-lg sm:text-2xl">New Expense</h3>
                <ExpenseForm />
                <h3 className="mb-3 text-gray-500 font-bold text-lg sm:text-2xl">Your Expense</h3>
                <p className="text-gray-500 font-medium text-sm sm:text-lg mb-3">Click on an expense to highlight it and come back check later!</p>
                <ExpenseList />
            </div>
        </div>
    )
};

export default ExpensePage;
