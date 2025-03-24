import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './navbar/Navbar.jsx'
import First from './FirstPage/First.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar/>
    <First/>
  </StrictMode>,
)
