import React from 'react';
import { ToastContainer } from 'react-toastify';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div style={{ width: '60%', margin: "auto" }}>
      <ToastContainer/>
      <h3>New Expense</h3>
      <ExpenseForm />
      <hr style={{ border: '2px solid grey' }} />
      <h3>Your Expense</h3>
      <ExpenseList />
    </div>
  );
}

export default App;
