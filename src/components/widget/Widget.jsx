import React from 'react';
import './widget.scss';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
    let data;

    const amount = 145;
    const diff = 20;

    switch (type) {
        case 'user':
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlinedIcon className='app__widget-icon' />
                )
            }
            break;
        case 'order':
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartOutlinedIcon className='app__widget-icon' />
                )
            }
            break;
        case 'earning':
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon className='app__widget-icon' />
                )
            }
            break;
        case 'balance':
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletOutlinedIcon className='app__widget-icon' />
                )
            }
            break;
        default:
            break;
    }

    return (
        <div className='app__widget'>
            <div className='app__widget-left'>
                <span className='app__widget-title'>{data.title}</span>
                <span className='app__widget-counter'>{data.isMoney && '$'} {amount}</span>
                <span className='app__widget-link'>{data.link}</span>
            </div>
            <div className='app__widget-right'>
                <div className='app__widget-percentage positive'>
                    <KeyboardArrowUpIcon className='app__widget-icon' />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget