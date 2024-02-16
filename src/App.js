// import './styles/app.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Squares from './components/Squares';

function App() {
  return (
    <div className='test'>
      <Squares />
      <Hero />
      <About />
      <Skills />
      <Showcase />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
