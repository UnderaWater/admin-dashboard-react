import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

const Home = () => {
    return (
        <div className='app__home'>
            <Sidebar />
            <div className='app__home-wrapper'>
                wrapper
            </div>
        </div>
    )
};

export default Home;