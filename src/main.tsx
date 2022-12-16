import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.sass'

import Header from './components/Header/Header'
import Artist from './pages/artist/Artist'
import Artists from './pages/artists/Artists'
import Gallery from './pages/gallery/Gallery'
import Home from './pages/home/Home'
import Fof from './pages/404/Fof'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path='*' element={<Fof />} />
        <Route index element={<Home />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='artists' element={<Artists />} />
        <Route path="artists/:artistName" element={<Artist />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
