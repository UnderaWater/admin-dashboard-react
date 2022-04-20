import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

const Home = () => {
    return (
        <div className='app__home'>
            <Sidebar />
            <div className='app__home-wrapper'>
                <Navbar />
                content
            </div>
        </div>
    )
};

export default Home;