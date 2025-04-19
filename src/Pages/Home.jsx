import { Contacts } from "./contacts"
// React
import { motion } from "framer-motion"
import './pages.css'
import leetcode from '../Assets/code.svg'
import github from '../Assets/github.svg'
import linkdin from '../Assets/linkdin.svg'
import twitter from '../Assets/twitter.svg'
import resume from '../Assets/resume.svg'
export const Home = ()=>{
    
    return(
        <>
        <div className="container" id='Home'>
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
                <div id="bar">
                   
                  <a href="https://leetcode.com/u/Abhi00045/">
                  <img src={leetcode} alt="" height="20px" width="20px" />
                  </a>

                  <a href="https://github.com/Abhi00045">
                  <img src={github} alt="" height="20px" width="20px" />
                  </a>

                  <a href="https://www.linkedin.com/in/abhinavreddy-rajidi-988633280/">
                  <img src={linkdin} alt="" height="20px" width="20px" />
                  </a>

                  <a href="https://x.com/rabhinavreddie">
                  <img src={twitter} alt="" height="20px" width="20px" />
                  </a>

                  <a href="https://drive.google.com/file/d/1-FeMDU8r8q_v9gAxp5tNdqVQ3vn2-pi4/view?usp=drive_link">
                  <img src={resume} alt="" height="20px" width="20px"  />
                  </a>

                  {/* <div id="nav-part2">
                     <h4><a href="https://drive.google.com/file/d/1-FeMDU8r8q_v9gAxp5tNdqVQ3vn2-pi4/view?usp=drive_link">Resume</a></h4>
                  </div> */}
                  
                </div>
            </div>
            
        </div>
        </>
    )
}

