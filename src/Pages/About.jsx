import EducationTimeline from './contacts';
import './pages.css'
import Work from './Work';
// import profile from '../Assets/profile.jpeg'
const About = ()=>{

    return <>
    <h1 className='text'>About me..</h1>
    <div className="main-about" id="main-about">
        <div className="right-about" id="right-about">
            <pre>
            👋 Hey, I’m Abhinav!
            <br />
22-year-old software developer from India 🇮🇳

</pre>
<p>
I love building smooth, responsive web interfaces, experimenting with modern stacks, and solving logic puzzles that make my brain say, “nice.” Whether it’s styling pixels to perfection or chasing down edge cases, I’m all about that dev life.
</p>

<p>
You’ll usually catch me deep in code with my VS Code theme just right, my Tailwind classes in a flow, and a browser tab open with “React hook not working why???” in the search bar. 😅
</p>

<p>
When I’m not coding, I’m probably tweaking my setup, watching tech breakdowns, or sipping on instant coffee like it’s rocket fuel ☕💻
</p>

<p>
I'm always up for a tech talk, debugging rant, or random deep dive into why CSS behaves like it has trust issues. 
</p>

<EducationTimeline/>
{/* <Work/> */}
        </div>
    </div>
    </>
} 
export default About;