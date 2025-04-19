import './mainComponent.css'
import { motion } from 'framer-motion';

const Navbar = ()=>{

    return <>
    <div id="nav-component" className="nav-component">
                <div className="sections" id="sections">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        {/* <li>Experience</li> */}
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
    </div>
    </>
}
 
export default Navbar;