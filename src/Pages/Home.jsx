// import { Contacts } from "./contacts"
// React
// import { motion } from "framer-motion"
import './pages.css'
import leetcode from '../Assets/code.svg'
import github from '../Assets/github.svg'
import linkdin from '../Assets/linkdin.svg'
import twitter from '../Assets/twitter.svg'
import resume from '../Assets/resume.svg'
import profile from '../Assets/profile.jpeg'
export const Home = ()=>{
    
    return(
        <>
        <div className="container" id='Home'style={{
            height:"90vh",
            width:"90vw"
        }} >
            <div className="left">
               <div className="profileOne">
                <h1>
                    ABHINAV REDDY
                </h1>
                <h3><span className="changeheader"></span> <br /> Developer</h3>
               </div>
               <div className="two">
                <h4>
                I <span className="change-text"></span>{" "}
          <span className="responsive">r</span>
          <span className="responsive">e</span>
          <span className="responsive">s</span>
          <span className="responsive">p</span>
          <span className="responsive">o</span>
          <span className="responsive">n</span>
          <span className="responsive">s</span>
          <span className="responsive">i</span>
          <span className="responsive">v</span>
          <span className="responsive">e</span> websites.
                </h4>
               </div>
               <div className="profile-three">
               <p
        className='text-lg text-gray-500 my-5 max-w-[600px]'>
            Building robust web applications with Typescript, Next.js,<br /> MongoDB, Express.js, React, and Node.js
            </p>
                </div> 
                
            </div>
            {/* <div className="left-about" id="left-about">
            <img src={profile} alt="" height='90%' width='400px' style={{
                borderRadius:"50%"
            }} />
        </div> */}
        <div className="image"> 
            <img src={profile} alt="" height="auto" width='400px' style={{
                borderRadius:"25px"
            }} />
        </div>
            
        </div>
        </>
    )
}

