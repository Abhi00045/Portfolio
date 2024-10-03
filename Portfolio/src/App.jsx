import { useState } from 'react'

import 'primeicons/primeicons.css';
        
import './App.css'
import skills from './assets/skills.svg' 
import { Header } from './Components/Header/header'
// import blackhole from './assets/blackhole.webm'

function App() {

  return (
   <>
   {/* <img src={skills} alt="" /> */}
   {/* <video
        autoPlay
        muted
        loop
        className='absolute rotate-180 top-[-400px] md:top-[-340px] left-0 z-0 w-full h-full object-cover'>
            <source src={blackhole} type='video/webm'></source>
        </video> */}
        <Header/>  
   </>
  )
}

export default App
