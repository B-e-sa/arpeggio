import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/home/Home'
import Artists from './pages/artists/Artists'
import Artist from './pages/artist/Art'
import Header from './components/header/Header'
import Gallery from './pages/gallery/Gallery'
import Loader from './components/loader/Loader'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes >
        <Route index element={<Home />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='artists' element={<Artists />} />
        <Route path="artists/:artName" element={<Artist />} />
        <Route path="test" element={<Loader />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
