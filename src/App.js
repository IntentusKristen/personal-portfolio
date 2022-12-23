import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { ProjectComp } from './components/ProjectsComp';
import Contact from './pages/Contact';
import { Footer } from './components/Footer';
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import { render } from '@testing-library/react';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>    
    </>
  );
}

export default App;
