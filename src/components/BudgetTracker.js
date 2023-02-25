import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetTotalExpense } from "../services/expenses";
import { Link } from "react-router-dom";

const BudgetTracker = () => {
    const dispatch = useDispatch();

    const budget = useSelector((state) => state.budgetSlice.budget);
    const expenses = useSelector((state) => state.expensesSlice.expenses);
    const totalExpense = useSelector((state) => state.expensesSlice.totalExpense);
    const [budgetLimitReached, setBudgetLimitReached] = useState(false);
    const [percentage, setPercentage] = useState(0);

    console.log("totalExpense", totalExpense);

    useEffect(() => {
        const percentageValue = Math.round((totalExpense / budget) * 100);
        setPercentage(percentageValue);

        const budgetLimit = budget * 0.8;
        if (totalExpense > budgetLimit) {
            setBudgetLimitReached(true);
        } else {
            setBudgetLimitReached(false);
        }
    }, [budget, totalExpense]);

    useEffect(() => {
        GetTotalExpense(dispatch);
    }, [expenses]);

    return (
        <div>
            <p>Budget: ${budget}</p>
            <p>Total Expenses: ${totalExpense}</p>
            {(budgetLimitReached && budget > 0) && (
                <p className="text-red-400 font-bold">
                    You have reached {percentage}% of your budget limit!
                </p>
            )}
            {budget === 0 && (
                <div className="mb-3 sm:flex sm:items-center">
                    <p className="text-red-400 font-bold m-0">
                        You have not set your budget limit!
                    </p>
                    <Link to='/' className=" text-purple-500 font-bold">
                        <span class="material-symbols-outlined text-4xl">
                            savings
                        </span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default BudgetTracker;