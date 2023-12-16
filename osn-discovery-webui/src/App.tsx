// import { React, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import BucketListView from './pages/BucketListView'
import BucketFileListView from './pages/BucketFileListView'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace/>}/>
          <Route path="/home" element={<BucketListView/>} />
          <Route path="/details/:key" element={<BucketFileListView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
