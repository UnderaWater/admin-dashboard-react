import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import './home.scss';

const Home = () => {
    return (
        <div className='app__home'>
            <Sidebar />
            <div className='app__home-wrapper'>
                <Navbar />
                <div className='app__home-widgets'>
                    <Widget type='user' />
                    <Widget type='order' />
                    <Widget type='earning' />
                    <Widget type='balance' />
                </div>
                <div className='app__home-charts'>
                    <Featured />
                    <Chart />
                </div>
            </div>
        </div>
    )
};

export default Home;