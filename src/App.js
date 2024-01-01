import './App.css';
import React from 'react';
import About from './Components/About';
import Countdown from './Components/Countdown';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Why from './Components/Why';
import backgroundVideo from './Assets/bg2.mp4'

function App() {

  const videoRef = React.useRef(null);

  React.useEffect(() => {
    // Access the video element and set the playbackRate
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // You can adjust this value for your desired speed
    }
  }, []);

  const targetDate = new Date('2024-01-11T00:00:00');
  return (
    <div className=' relative bg-black'>
           <video
           ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute w-full h-screen object-cover opacity-50 z-0"
        
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Navbar/>
      <Hero/>
      <About/>
      <Countdown targetDate={targetDate}/>
      <Why/>
      <Footer/>
    </div>
  );
}

export default App;
