
import './App.css'
import Homepage from './Homepage';
import React from 'react';
import Suggestions from './suggestions'
import ImageUpload from './ImageUpload'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Leaderboard from './Leaderboard';


function App() {

  return (
    <>
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/upload" element={<ImageUpload />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
