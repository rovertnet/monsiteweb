import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Skils from './component/body/Skils.jsx'
import About from './component/body/About.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-slate-950 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<App />} />
          <Route path="/skills" exact={true} element={<Skils />} />
          <Route path="/about" exact={true} element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);
