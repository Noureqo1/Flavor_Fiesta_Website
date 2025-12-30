import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Description from './components/Description';
import Screenshots from './components/Screenshots';
import VideoSection from './components/VideoSection';
import Download from './components/Download';
import Developers from './components/Developers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Description />
      <Screenshots />
      <VideoSection />
      <Download />
      <Developers />
      <Footer />
    </div>
  );
}

export default App;
