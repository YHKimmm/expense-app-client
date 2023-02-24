import { createSlice, createAction } from '@reduxjs/toolkit';

export const setExpensesError = createAction('SET_EXPENSES_ERROR');
export const addExpenseError = createAction('ADD_EXPENSE_ERROR');
export const editExpenseError = createAction('EDIT_EXPENSE_ERROR');
export const deleteExpenseError = createAction('DELETE_EXPENSE_ERROR');

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: [],
        totalExpense: 0,
    },
    reducers: {
        setExpenses: (state, action) => {
            return { ...state, expenses: [...action.payload] };
        },
        totalExpense: (state, action) => {
            return { ...state, totalExpense: action.payload };
        },
        addExpense: (state, action) => {
            return { ...state, expenses: [action.payload, ...state.expenses] };
        },
        editExpense: (state, action) => {
            return { ...state, expenses: state.expenses.map(expense => expense.id === action.payload.id ? action.payload : expense) };
        },
        deleteExpense: (state, action) => {
            return { ...state, expenses: state.expenses.filter(expense => expense.id !== action.payload.id) };
        }
    },
});

export const { setExpenses, addExpense, editExpense, deleteExpense, totalExpense } = expensesSlice.actions;

export default expensesSlice.reducer;