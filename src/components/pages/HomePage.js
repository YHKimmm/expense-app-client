import React from "react";
import { Link } from "react-router-dom";
import BudgetForm from "../BudgetForm";

const HomePage = () => {
    return (
        <div className="mt-20">
            <div className="text-center m-auto max-w-2xl">
                <h2 className="mb-3 text-gray-500 font-bold text-lg sm:text-2xl">Welcome to the Expense Tracker App</h2>
                <p className="mb-3 text-gray-500">Keep track of your expenses and stay on top of your finances with our easy-to-use expense tracking tool. You can create, edit, and delete your own expenses, and view detailed statistics to help you understand your spending habits.</p>
                <p className="text-gray-500 mb-7">Set a budget for yourself and track your expenses against it. You can set a budget and the app will show you how much you have left to spend.</p>
                <BudgetForm />
                <div className="flex flex-column items-center sm:block mt-5">
                    <Link to="/statistics" className="w-2/3 bg-purple-500 mb-2 sm:mr-3 hover:bg-purple-700 text-white no-underline font-bold py-2 px-4 rounded text-sm sm:text-base">
                        📈 View Statistics 📉
                    </Link>
                    <Link to="/expenses" className="w-2/3 bg-purple-500 hover:bg-purple-700 text-white no-underline font-bold py-2 px-4 rounded text-sm sm:text-base">
                        💰 Manage Expenses 💰
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
