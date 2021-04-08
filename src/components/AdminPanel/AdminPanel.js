
import { faEdit, faPlusSquare, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AddCar from '../AddCar/AddCar';
import EditCar from '../EditCar/EditCar';
import ManageProduct from '../ManageProduct/ManageProduct';
import './AdminPanel.css';
const AdminPanel = () => {
    // let { path, url } = useRouteMatch();
    return (
        <Router>
            <div className="admin-panel">
                <div className="sidebar">
                    <ul>
                        <li>
                            <Link className="sidebar-menu-items" to={`/admin/manageCar`}><FontAwesomeIcon className="icon" icon={faTasks}></FontAwesomeIcon> Manage Car</Link>
                        </li>
                        <li>
                            <Link className="sidebar-menu-items" to={`/admin/addCar`}><FontAwesomeIcon className="icon" icon={faPlusSquare}></FontAwesomeIcon> Add Car</Link>
                        </li>
                    </ul>
                </div>
                <div className="main-container">
                    <Switch>
                        
                        <Route exact path="/admin/manageCar">
                            <ManageProduct></ManageProduct>
                        </Route>
                        <Route path="/admin/addCar">
                            <AddCar></AddCar>
                        </Route>
                        <Route path="/admin/editCar/:id">
                            <EditCar></EditCar>
                        </Route>
                        <Route exact path="/admin">
                            <ManageProduct></ManageProduct>
                        </Route>
                    </Switch>

                </div>




            </div>
        </Router>
    );
};

export default AdminPanel;