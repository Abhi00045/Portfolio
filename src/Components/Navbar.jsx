import './mainComponent.css'
import { motion } from 'framer-motion';
import leetcode from '../Assets/code.svg'
import github from '../Assets/github.svg'
import linkdin from '../Assets/linkdin.svg'
import twitter from '../Assets/twitter.svg'
import resume from '../Assets/resume.svg'
import profile from '../Assets/profile.jpeg'

const Navbar = ()=>{

    return <>
    <div id="nav-component" className="nav-component">
                <div className="sections" id="sections">
                    {/* <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul> */}
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
}
 
export default Navbar;