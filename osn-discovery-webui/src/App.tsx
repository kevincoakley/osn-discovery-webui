// import { React, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import BucketListView from './pages/BucketListView'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace/>}></Route>
          <Route path="/home" element={<BucketListView/>} />
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
