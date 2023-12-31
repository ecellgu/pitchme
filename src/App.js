import './App.css';
import About from './Components/About';
import Countdown from './Components/Countdown';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Why from './Components/Why';

function App() {
  const targetDate = new Date('2024-01-11T00:00:00');
  return (
    <div className='bg-black p-10'>
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
