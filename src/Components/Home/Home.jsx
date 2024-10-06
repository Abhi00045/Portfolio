
import skills from '../../assets/skills.svg'
// React
import { motion } from "framer-motion"
// import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/
import './home.css'
export const Home = ()=>{
    return(
        <>
        <div className="container" id='Home'>
            <div className="left">
               <div className="profileOne">
                <h1>Hey, I am<span> Abhinav </span></h1>
                <h3><span className="changeheader"></span> Developer</h3>
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
            Committed full-stack developer, passionate about crafting practical and effective digital solutions using cutting-edge technologies.
            Providing the best Project Experience
            </p>
                </div> 
                <div className='btn  py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'href='#'
        target='_blank'>
                    <button>Download CV
                        {/* <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" className="size-4">
  <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
</svg>

                        </div> */}
                    </button>
                </div>
            </div>
            <div className="profileRight">
                <img src={skills} alt="skills" />
            </div>
        </div>
        </>
    )
}