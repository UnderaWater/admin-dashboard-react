import React from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Featured = () => {
    return (
        <div className='app__featured'>
            <div className='app__featured-top'>
                <h1 className='app__featured-title'>
                    Total Revenue
                </h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className='app__featured-bottom'>
                <div className='app__featured-chart'>
                    
                </div>
            </div>
        </div>
    )
}

export default Featured