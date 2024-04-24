// import { React, useState } from 'react'
import './App.css'
import TopBar from './components/TopBar.tsx'
import BottomBar from './components/BottomBar.tsx'
import BucketListView from './pages/BucketListView.tsx'
import BucketFileListView from './pages/BucketFileListView.tsx'
import ViewImage from './pages/ViewImage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" replace/>}/> */}
          <Route path="/" element={<BucketListView/>} />
          <Route path="/details/:key" element={<BucketFileListView/>}/>
          <Route path="/details/:key/:file/view" element={<ViewImage/>}/>
        </Routes>
        <BottomBar/>
      </BrowserRouter>
    </>
  )
}

export default App
