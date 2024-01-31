// import { React, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.tsx'
import BucketListView from './pages/BucketListView.tsx'
import BucketFileListView from './pages/BucketFileListView.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/details/:key" element={<BucketFileListView/>}/>
          <Route path="/home" element={<BucketListView/>} />
          <Route path="/" element={<Navigate to="/home" replace/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
