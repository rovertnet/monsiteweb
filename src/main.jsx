import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Skils from './component/body/Skils.jsx'
import About from './component/body/About.jsx'
import Navbar from './component/header/Navbar.jsx'
import Project from './component/body/Project.jsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Progresse from './component/body/Progresse.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-black h-screen flex justify-center items-center">
      <Progresse />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<App />} />
          <Route path="/skills" exact={true} element={<Skils />} />
          <Route path="/about" exact={true} element={<About />} />
          <Route path="/projet" exact={true} element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
