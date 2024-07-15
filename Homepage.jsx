import React from 'react'
import './homepage.css'
import Sidenav from './SideNav'
import Timeline from './Timeline'

import Suggestions from './suggestions'
import { Routes, Route } from 'react-router-dom';
import Leaderboard from './Leaderboard'




function Homepage() {
  
  return (
    
    <div className='homepage'>
       <div className='homepage__nav'>
        <Sidenav />
        <Routes>
                <Route path="/" element={< Sidenav/>} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        
        
       </div>
       <div className='homepage__timeline'>
       <Timeline />
       
    
       </div>
       <div className='homepage_suggestions'>
        <Suggestions/>
       </div>
    </div>
  )
}

export default Homepage