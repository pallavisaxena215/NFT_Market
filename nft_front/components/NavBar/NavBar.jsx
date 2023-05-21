"use client";
import React, {useState, useEffect} from 'react'


import {Discover,Help,Notification,Profile,SideBar} from './index.js'
import {Mdnotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import {CgMenuLeft, CgMenuRight} from 'react-icons/cg';
import {Button} from "../componentsindex";
const NavBar = () => {
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

        <div className ="  width 60%
    border 1px solid var(--icons-color)
    display flex
    align-items center
    padding .5rem
    border-radius 2rem">
    {/* left input sub div */}
    <div className='  width 90%
    border none
    outline none
    background-color  transparent'>

      <input type='text' placeholder='search NFT'/>
      <BsSearch className='cursor pointer
    font-size 1.4rem'/>

    </div>

    </div>
            </div>
            </div>
            </div>
  )
}

export default NavBar