// import { React, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import BucketList from './components/BucketList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BucketList/>} />
        </Routes>
      </BrowserRouter>
      {/* <div>
        <NavBar />
        <BucketList/>
      </div> */}
    </>
  )
}

export default App
