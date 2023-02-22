import React from "react";
import { ToastContainer } from 'react-toastify';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const HomePage = () => {
    return (
        <div className="mt-10">
            <div className="max-w-[80%] md:max-w-2xl m-auto">
                <ToastContainer />
                <h3 className="mb-3 text-gray-500 font-bold text-lg sm:text-2xl">New Expense</h3>
                <ExpenseForm />
                <h3 className="mb-3 text-gray-500 font-bold text-lg sm:text-2xl">Your Expense</h3>
                <ExpenseList />
            </div>
        </div>
    )
};

export default HomePage;
