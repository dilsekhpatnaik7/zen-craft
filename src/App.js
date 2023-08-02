import {useState, useEffect} from 'react'

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import './App.css'
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Works from './Components/Works';
// import Loader from "./Components/Loader"

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000);
  // }, [])
  
  return (
    <div className="bg-gradient-to-r from-[#dee2e6] to-[#adb5bd] h-max-content">
        <Navbar/>
        <Hero/>
        <Services/>
        <Works/>
        <Team/>
        <Contact/>
    </div>
  );
}

export default App;
