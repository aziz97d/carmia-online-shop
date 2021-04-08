import React, { useContext } from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';
import AddCar from '../AddCar/AddCar';
import Checkout from '../Checkout/Checkout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Order from '../Order/Order';
import AdminPanel from '../AdminPanel/AdminPanel';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    
    return (
        <Router>
            <div className="header">
                <div>
                    <h2>Carmia</h2>
                </div>

                <ul className="menu">
                    <Link className="menu-items" to="/home">Home</Link>
                    <Link className="menu-items" to="/orders">Orders</Link>
                    <Link className="menu-items" to="/admin">Admin</Link>
                    <Link className="menu-items" to="/deals">Deals</Link>
                    {
                        loggedInUser.email && <Link className="menu-items active" to="/login" >Logout</Link>
                    }{
                        !loggedInUser.email && <Link className="menu-items active" to="/login" >Login</Link>
                    }
                    
                </ul>
            </div>

            <Switch>
                
                <PrivateRoute path="/orders">
                    <Order></Order>
                </PrivateRoute>
                <PrivateRoute path="/admin">
                    <AdminPanel></AdminPanel>
                </PrivateRoute>
                <PrivateRoute path="/checkout/:id">
                    <Checkout></Checkout>
                </PrivateRoute>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route exact path="/home">
                    <Home></Home>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    );
};

export default Header;