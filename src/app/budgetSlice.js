import { createSlice } from '@reduxjs/toolkit';


const budgetFromStorage = localStorage.getItem('budget');
const initialBudget = budgetFromStorage ? Number(budgetFromStorage) : 0;

export const budgetSlice = createSlice({
    name: 'budget',
    initialState: {
        budget: initialBudget,
    },
    reducers: {
        setBudget: (state, action) => {
            return { ...state, budget: action.payload };
        }
    },
});

export const { setBudget } = budgetSlice.actions;

export default budgetSlice.reducer;