import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedOut } from '../app/authenticationSlice';

const Navbar = () => {
    const isAuthenticated = useSelector(state => state.authenticationSlice.isAuthenticated);
    console.log(isAuthenticated);
    const dispatch = useDispatch();

    return <Nav className='navbar' style={{ backgroundColor: '#e4fff2' }}>
        <h1 style={{ fontFamily: 'Brush Script MT, cursive' }}>Expense Tracker</h1>
        {isAuthenticated
            ?
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink style={{ marginLeft: '1rem' }} variant='link' to='/'>Home</NavLink>
                <NavLink style={{ marginLeft: '1rem' }} variant='link' to='/statistics'>Statistics</NavLink>
                <Button variant='link' href='/signin' onClick={() => { dispatch(userLoggedOut()) }}>Log out</Button>
            </div>
            : <div style={{ display: 'flex' }}>
                <NavLink to="/signup">Sign up</NavLink>
                <NavLink to="/signin" style={{ marginLeft: '1rem' }}>Sign in</NavLink>
            </div>}
    </Nav >
};

export default Navbar;
