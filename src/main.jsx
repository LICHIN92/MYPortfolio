import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar/Navbar.jsx'
import First from './FirstPage/First.jsx'
import Introduction from './INTRODUCTION/Introduction.jsx'
import Contact from './contact/Contact.jsx'
import Work from './work/Work.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <First/>
    <Introduction/>
    <Work/>
    <Contact/>
  </StrictMode>,
)
