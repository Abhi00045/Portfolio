import { useState } from 'react'

import 'primeicons/primeicons.css';
        
import './App.css'
// import skills from './assets/skills.svg' 
import { Header } from './Components/Header/header'
import { Home } from './Components/Home/Home';
import Router from './Routers/Router';
// import blackhole from './assets/blackhole.webm'
// import { Projects } from './Components/Projects/projects';

function App() {

  return (
   <>
     <Router/>
      <Header/>  
        
   </>
  )
}

export default App
