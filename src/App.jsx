import React from 'react';
import './App.css'
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Skill from './components/Skill/skill'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Toaster />
    </div>
  );
}

export default App;
