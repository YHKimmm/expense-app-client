import React, { useEffect } from 'react';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import ExpensePage from './components/pages/ExpensePage';
import StatistcsPage from './components/pages/StatistcsPage';
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { userAuthenticated } from './app/authenticationSlice';
import Navbar from './components/Navbar';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  const isAuthenticated = useSelector(state => state.authenticationSlice.isAuthenticated);
  console.log(isAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token !== undefined && token !== null) {
      dispatch(userAuthenticated({ token }));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/expenses' element={isAuthenticated ? <ExpensePage /> : <SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/statistics' element={isAuthenticated ? <StatistcsPage /> : <SignInPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
