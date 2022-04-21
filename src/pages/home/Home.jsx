import React from 'react';
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
                    <Widget />
                    <Widget />
                </div>
            </div>
        </div>
    )
};

export default Home;