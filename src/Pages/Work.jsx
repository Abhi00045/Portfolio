import './pages.css'

const Work = ()=>{

    const projectWork =[
        {
            title:'',
            description:'',
            image : '',
            live_link :'',
            Github_link:''

        }
    ];

    return(
        <>
        <div className="project-container">
            {
                projectWork.map((projects , index)=>(
                    <div className="projects">
                <div className="project-img">
                    <img src={projects.image} alt="" />
                </div>
                <div className="project-title">
                    <h2>{projects.title}</h2>
                </div>
                <div className="project-des">
                    <pre>{projects.description}</pre>
                </div>
                <div className="project-links">
                    <div className="live-link">
                        <p>{projects.live_link}</p>
                    </div>
                    <div className="github-link">
                        <p>{projects.Github_link}</p>
                    </div>
                </div>
            </div>
                ))
            }
        </div>
        </>
    )

}
export default Work;