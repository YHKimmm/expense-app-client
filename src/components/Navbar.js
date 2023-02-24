import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedOut } from '../app/authenticationSlice';
import { useState } from 'react';

const imageFolderPath = process.env.PUBLIC_URL + "/assets/images/";


const Navbar = () => {
    const isAuthenticated = useSelector(state => state.authenticationSlice.isAuthenticated);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    console.log(isAuthenticated);
    const dispatch = useDispatch();

    return (
        <nav className="bg-gray-50">
            <div className="max-w-7xl mx-auto p-3 sm:p-6 lg:p-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl sm:text-3xl font-bold text-purple-600 cursor-pointer">
                            <NavLink to='/'>
                                <img src={`${imageFolderPath}expense_tracker_logo.webp`} alt='logo' className='w-20 sm:w-24' />
                            </NavLink>
                        </h1>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <div className="flex space-x-4">
                            {isAuthenticated
                                ?
                                <>
                                    <NavLink to='/' className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Home</NavLink>
                                    <NavLink to='/expenses' className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Expenses</NavLink>
                                    <NavLink to='/statistics' className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Statistics</NavLink>
                                    <a href='/signin' onClick={() => { dispatch(userLoggedOut()) }} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Log out</a>
                                </>
                                :
                                <>
                                    <NavLink to='/signup' className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Sign up</NavLink>
                                    <NavLink to='/signin' className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Sign in</NavLink>
                                </>
                            }
                        </div>
                    </div>
                    <div className="sm:hidden flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                null
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                        <div className={isMenuOpen ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-20' : ''}>
                            <div className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
                                {isMenuOpen && (
                                    <div>
                                        <div className="relative">
                                            <div className="flex items-center justify-between h-16 absolute right-10 top-12">
                                                <div className="-mr-2 flex items-center sm:hidden">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                                                        aria-expanded="false"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <svg
                                                            className="block h-6 w-6"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 pt-5 pb-3 space-y-1 right-0">
                                            <div className="flex-shrink-0 flex items-center mb-4">
                                                <h1 className="text-2xl sm:text-3xl font-bold text-purple-600 cursor-pointer">
                                                    <NavLink to='/' onClick={() => setIsMenuOpen(false)}>
                                                        <img src={`${imageFolderPath}expense_tracker_logo.webp`} alt='logo' className='w-20 sm:w-24' />
                                                    </NavLink>
                                                </h1>
                                            </div>
                                            <hr />
                                            {isAuthenticated ? (
                                                <>
                                                    <NavLink
                                                        to="/"
                                                        className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                        }}
                                                    >
                                                        Home
                                                    </NavLink>
                                                    <NavLink
                                                        to="/expenses"
                                                        className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                        }}
                                                    >
                                                        Expenses
                                                    </NavLink>
                                                    <NavLink
                                                        to="/statistics"
                                                        className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                        }}
                                                    >
                                                        Statistics
                                                    </NavLink>
                                                    <a
                                                        href="/signin"
                                                        onClick={() => {
                                                            dispatch(userLoggedOut());
                                                            setIsMenuOpen(false);
                                                        }}
                                                        className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                                    >
                                                        Log out
                                                    </a>
                                                </>
                                            ) : (
                                                <>
                                                    <NavLink
                                                        to="/signup"
                                                        className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                                        activeClassName="bg-gray-100 text-gray-900"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                        }}
                                                    >
                                                        Sign up
                                                    </NavLink>
                                                    <NavLink
                                                        to="/signin"
                                                        className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                                        activeClassName="bg-gray-100 text-gray-900"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                        }}
                                                    >
                                                        Sign in
                                                    </NavLink>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
};

export default Navbar;