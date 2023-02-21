import React, { useEffect } from 'react';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import StatistcsPage from './components/StatistcsPage';
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { userAuthenticated } from './app/authenticationSlice';
import Navbar from './components/Navbar';

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
        <Route path='/' element={isAuthenticated ? <HomePage /> : <SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/statistics' element={isAuthenticated ? <StatistcsPage /> : <SignInPage />} />
        <Route component={() => <h2>Page not found!</h2>} />
      </Routes>
    </>
  );
}

export default App;
