import Navbar from "./Components/Navbar"
import Loader from "./Components/pageLoader";
import './main.css'
import About from "./Pages/About";
import { Home } from "./Pages/Home"
import { useState, useEffect } from "react"
import MainLayout from "./Pages/Layout/mainLayout";


function App() {
 
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(true);
    }, 5000); // 3000ms = 3 seconds

    // Optional cleanup (good practice)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showDiv ? (
       <>
       <MainLayout/>
       </> 
      ) : (
      <Loader/>
      )}
    </div>
  )
}

export default App
