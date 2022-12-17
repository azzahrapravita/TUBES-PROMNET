import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Footer from './components/Footer';
import Home from './components/Home';
import Talk from './components/Talk';
import Navbar from './components/Navbar';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Talk" element={<Talk />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

