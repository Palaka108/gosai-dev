import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      {splashDone && (
        <div className="min-h-screen bg-dark-900">
          <Navbar />
          <Hero />
          <Services />
          <Projects />
          <Process />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
