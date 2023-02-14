import { addExpense, editExpense, deleteExpense, setExpensesError, addExpenseError, editExpenseError, deleteExpenseError  } from "../app/expensesSlice";
import {toast} from 'react-toastify';

const ToastMiddleWare = () => next => action => {
    switch (action.type) {
        case addExpense.type:
            toast.success("Expense Added");
            break;
        case editExpense.type:
            toast.success("Expense Updated");
            break;
        case deleteExpense.type:
            toast.success("Expense Deleted");
            break;
        case setExpensesError.type:
            toast.error("Error while fetching expenses");
            break;
        case addExpenseError.type:
            toast.error("Error while adding expense");
            break;
        case editExpenseError.type:
            toast.error("Error while updating expense");
            break;
        case deleteExpenseError.type:
            toast.error("Error while deleting expense");
            break;
        default:
            break;
    }
    return next(action);
}

export default ToastMiddleWare;