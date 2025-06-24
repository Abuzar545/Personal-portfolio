import React from 'react'
import Nov from './components/nov'
import Footer from './components/footer'
import Index from './components/index'
import Resume from './components/Resume'
import { Route, Routes } from 'react-router-dom'
export default function Router() {
  return (
  <>
    <Nov/>
     <Routes>                
      <Route path='/*' element={<Index/>} />
      <Route path='/Resume' element={<Resume />} />
    </Routes>
    <Footer/>
  </>
    
  )
}
