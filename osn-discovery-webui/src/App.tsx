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
          <Route path="/web/" element={<Navigate to="/web/home" replace/>}/>
          <Route path="/web/home" element={<BucketListView/>} />
          <Route path="/web/details/:key" element={<BucketFileListView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
