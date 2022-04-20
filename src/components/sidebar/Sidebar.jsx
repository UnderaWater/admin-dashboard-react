import { Dashboard, PersonOutlineOutlined } from '@mui/icons-material';
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
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
            <div className='app__sidebar-center'>
                <ul>
                    <p className='app__sidebar-title'>MAIN</p>
                    <li>
                        <Dashboard className='app__sidebar-icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className='app__sidebar-title'>LISTS</p>
                    <li>
                        <PersonOutlineOutlined className='app__sidebar-icon' />
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreIcon className='app__sidebar-icon' />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardIcon className='app__sidebar-icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='app__sidebar-icon' />
                        <span>Delivery</span>
                    </li>
                    <p className='app__sidebar-title'>USEFUL</p>
                    <li>
                        <InsertChartIcon className='app__sidebar-icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='app__sidebar-icon' />
                        <span>Notifications</span>
                    </li>
                    <p className='app__sidebar-title'>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='app__sidebar-icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='app__sidebar-icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className='app__sidebar-icon' />
                        <span>Settings</span>
                    </li>
                    <p className='app__sidebar-title'>USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='app__sidebar-icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className='app__sidebar-icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='app__sidebar-bottom'>
                <div className='app__sidebar-color'></div>
                <div className='app__sidebar-color'></div>
            </div>
        </div>
    )
}

export default Sidebar