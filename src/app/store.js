import { configureStore } from '@reduxjs/toolkit';
import expensesSlice from './expensesSlice';
import ToastMiddleWare from '../middlewares/ToastMiddleWare';
import authenticationSlice from './authenticationSlice';
import statisticsSlice from './statisticsSlice';
import budgetSlice from './budgetSlice';

export const store = configureStore({
  reducer: {
    authenticationSlice: authenticationSlice,
    expensesSlice: expensesSlice,
    statisticsSlice: statisticsSlice,
    budgetSlice: budgetSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleWare),
});
