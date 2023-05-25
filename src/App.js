import './App.css';
import Cover from './components/cover/Cover.js';
import About from './components/about-me/About.js';
import Stack from "./components/stack-list/Stack"
import Navbar from './components/header/navbar.js';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
import { useEffect, useState } from 'react';


function App() {

const [loading, setLoading] = useState(false)

useEffect(
  ()=>{
    setLoading(true)
    setTimeout( ()=>{
      setLoading(false)
    }, 3000)
  }, [])

 


  return (
    <div className='home' id='home'>
      { loading ? 
        <Loading/>
       :
      <div className='home-container'>
        <Navbar />
        <div className='body-container'>
          <Cover/>
          <About/>
          <Stack/>
          <Portfolio/>
          <Contact/>
          <Footer />
        </div>
      </div> }
    </div>
  );
}

export default App;
