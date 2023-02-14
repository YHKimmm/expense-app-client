import { configureStore } from '@reduxjs/toolkit';
import expensesSlice from './expensesSlice';
import ToastMiddleWare from '../middlewares/ToastMiddleWare';

export const store = configureStore({
  reducer: {
    expensesSlice: expensesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleWare),
});
