import './App.css';
import Cover from './components/cover/Cover.js';
import About from './components/about-me/About.js';
import Navbar from './components/header/navbar.js';
import Portfolio from './components/portfolio/Portfolio';
import Loading from './components/loading/Loading'
import { useEffect, useState } from 'react';

function App() {

const [loading, setLoading] = useState(false)

useEffect(
  ()=>{
    setLoading(true)
    setTimeout( ()=>{
      setLoading(false)
    }, 5000)
  }, [])

 


  return (
    <div className='home'>
      { loading ? 
        <Loading/>
       :
      <div className='home-container'>
        <Navbar />
        <Cover/>
        <About/>
        <Portfolio/>
      </div> }
    </div>
  );
}

export default App;
