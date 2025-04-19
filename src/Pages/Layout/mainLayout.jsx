import React from 'react'
import Navbar from '../../Components/Navbar'
import { Home } from '../Home'
import About from '../About'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    </>
  )
}

export default MainLayout