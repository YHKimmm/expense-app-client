import { setExpenses, addExpense, editExpense, deleteExpense, setExpensesError, addExpenseError, editExpenseError, deleteExpenseError }
    from "../app/expensesSlice";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7078/api/Expenses',
})

export const GetExpenses = async (dispatch) => {
    try {
        // api call
        const {data} = await axiosInstance.get();
        dispatch(setExpenses(data));
    } catch {
        dispatch(setExpensesError());
    }
}

export const AddExpense = async (dispatch, expense) => {
    try {
        // api call
        const {data} = await axiosInstance.post('', expense);
        dispatch(addExpense(data));
    } catch {
        dispatch(addExpenseError());
    }
}

export const UpdateExpense = async (dispatch, expense) => {
    try {
        // api call
        await axiosInstance.put('', expense);
        dispatch(editExpense(expense));
    } catch {
        dispatch(editExpenseError());
    }
}

export const DeleteExpense = async (dispatch, expense) => {
    try {
        // api call
        await axiosInstance.delete('', {data: {...expense}});
        dispatch(deleteExpense(expense));
    } catch {
        dispatch(deleteExpenseError());
    }
}
