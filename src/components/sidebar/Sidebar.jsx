import { Dashboard } from '@mui/icons-material';
import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className='app__sidebar'>
            <div className='app__sidebar-top'>
                <span className='app__sidebar-logo'>
                    Admin
                </span>
            </div>
            <hr/>
            <div className='app__sidebar-center'>
                <ul>
                    <li>
                        <Dashboard />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Users</span>
                    </li>
                    <li>
                        <span>Products</span>
                    </li>
                    <li>
                        <span>Orders</span>
                    </li>
                    <li>
                        <span>Delivery</span>
                    </li>
                    <li>
                        <span>Stats</span>
                    </li>
                    <li>
                        <span>Notifications</span>
                    </li>
                    <li>
                        <span>System Health</span>
                    </li>
                    <li>
                        <span>Logs</span>
                    </li>
                    <li>
                        <span>Settings</span>
                    </li>
                    <li>
                        <span>Profile</span>
                    </li>
                    <li>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='app__sidebar-bottom'>color options</div>
        </div>
    )
}

export default Sidebar