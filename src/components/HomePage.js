import React from "react";
import { ToastContainer } from 'react-toastify';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const HomePage = () => {
    return (
        <div>
            <div style={{ width: '60%', margin: "auto" }}>
                <ToastContainer />
                <h3>New Expense</h3>
                <ExpenseForm />
                <hr style={{ border: '2px solid grey' }} />
                <h3>Your Expense</h3>
                <ExpenseList />
            </div>
        </div>
    )
};

export default HomePage;
