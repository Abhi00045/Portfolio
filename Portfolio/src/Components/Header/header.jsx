import {Contacts} from "../../Components/contacts"
import './header.css'
import github from './github.svg'
import 'primeicons/primeicons.css';
        

export const Header = ()=>{
    return(
        <>
        <nav >
            <div className="name">
                <h1>Dev Portfolio</h1>
            </div>
            <div className="sections">
                <a href="#">Home</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <div className="flex flex-row gap-6 text-base" >
                    {
                       Contacts.map((contacts)=>(
                        <a href={contacts.link} key={contacts.name} className="text-lg"><i  className={contacts.icon}></i></a>
                    ))}
                </div>
            </div>
        </nav>
        </>
    )
}