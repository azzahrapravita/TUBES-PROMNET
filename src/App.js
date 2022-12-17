import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Talk from './components/Talk';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Talk />
      <Footer />
    </div>
  );
}

export default App;
