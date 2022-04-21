import React from 'react';
import './widget.scss';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = () => {
    return (
        <div className='app__widget'>
            <div className='app__widget-left'>
                <span className='app__widget-title'>USERS</span>
                <span className='app__widget-counter'>3654</span>
                <span className='app__widget-link'>See all users</span>
            </div>
            <div className='app__widget-right'>
                <div className='app__widget-percentage positive'>
                    <KeyboardArrowUpIcon className='app__widget-icon' />
                    20%
                </div>
                <PersonOutlinedIcon className='app__widget-icon' />
            </div>
        </div>
    )
}

export default Widget