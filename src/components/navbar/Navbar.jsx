import React from 'react';
import './navbar.scss';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import avatar from '../../images/avatar.png'

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__navbar-wrapper'>
        <div className='app__navbar-search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon className='app__navbar-icon' />
        </div>
        <div className='app__navbar-items'>
          <div className='app__navbar-item'>
            <LanguageOutlinedIcon className='app__navbar-icon' />
            English
          </div>
          <div className='app__navbar-item'>
            <DarkModeOutlinedIcon className='app__navbar-icon' />
          </div>
          <div className='app__navbar-item'>
            <FullscreenExitOutlinedIcon className='app__navbar-icon' />
          </div>
          <div className='app__navbar-item'>
            <NotificationsNoneOutlinedIcon className='app__navbar-icon' />
            <div className='app__navbar-counter'>
              1
            </div>
          </div>
          <div className='app__navbar-item'>
            <ChatBubbleOutlineOutlinedIcon className='app__navbar-icon' />
            <div className='app__navbar-counter'>
              2
            </div>
          </div>
          <div className='app__navbar-item'>
            <ListOutlinedIcon className='app__navbar-icon' />
          </div>
          <div className='app__navbar-item'>
            <img src={avatar} alt='avatar' className='app__navbar-avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar