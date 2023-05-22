"use client";
import React, {useState, useEffect} from 'react'


import {Discover,Help,Notification,Profile,SideBar} from './index.js'
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import {CgMenuLeft, CgMenuRight} from 'react-icons/cg';
import {Button} from "../componentsindex";
const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () =>{
    if(!notification)
    {setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    }
    else{
      setNotification(false);
    }
  }


  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };



  return (
<div className='width 100% padding-block 3.5 rem position relative z-index 111111111'>
      <div className='width 80% margin 0 auto display grid grid-template-columns repeat(2, 1fr)
    align-items center
    justify-content space-between
    gap 1rem'>
        <div className='  display: grid grid-template-columns 1fr 2fr  align-items center'>
          <div className=''>
            <img src="https://cdn-icons-png.flaticon.com/512/6298/6298358.png" alt="NFT LOGO" width={100} height={100}/>
            </div>

        <div className ="  width 60% border 1px solid var(--icons-color)display flex align-items center padding .5rem border-radius 2rem">
                {/* left input sub div */}
              <div className='  width 90% border none outline none background-color  transparent'>
                   <  input type='text' placeholder='search NFT'/>
                   <BsSearch className='cursor pointer font-size 1.4rem'/>
              </div> 
        </div>
        </div>


        {/* right section*/}
        <div className=" display grid grid-template-columns 1fr 1fr .5fr 1fr .3fr gap 1rem align-items center">
          <div className="position relative cursor: pointer">
            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className="position absolute padding 1rem .5rem box-shadow var(--box-shadow) font-size 1rem width 15rem border-radius 1rem background-color var(--main-bg-color)">
                <Discover />
              </div>
            )}
          </div>

         {/* HELP SECTION */}
          <div className='position relative cursor pointer'>
            <p onClick={(e) => openMenu(e)}>HelpCenter</p>
            { help && (<div className=' position absolute padding 1rem .5rem box-shadow var(--box-shadow) font-size 1rem width 15rem border-radius 1rem background-color var(--main-bg-color)'>
              <Help/>
              </div>

            )}
          </div>


         <div className="position relative cursor pointer">
            <MdNotifications
              className='font-size 2rem'
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className='position relative cursor pointer'>
            <Button btnName="Create" handleClick={() => {}} />
          </div>

          {/* USER PROFILE */}

          <div className='position relative cursor pointer'>
            <div className='position relative cursor pointer'>
              <img
                src='https://www.persofoto.de/apple-touch-icon-180x180.png'
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className='position relative cursor pointer'
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* MENU BUTTON */}

          <div className='display none'>
            <CgMenuRight
              className='font-size 2.5rem cursor pointer'
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDBAR CPMPONE/NT */}
      {openSideMenu && (
        <div className=' display none'>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
  
}

export default NavBar