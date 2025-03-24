import React, { useEffect, useState } from 'react'
import './navbar.css'
import { CgMenuGridR } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [menuOpen,setMenu]=useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className=' h-12 px-1 capitalize navbaar sm:px-5'>
        <div className='flex justify-between  h-full items-center bar '>
            <h4 className='text-violet-400 font-bold'>mern stack developer</h4>

            <button className={menuOpen?"menuButtonActive":'menuButtonInActive '}
          aria-label="Toggle navigation menu"
          >
              {menuOpen?< IoCloseSharp onClick={()=>setMenu(false)}/>:<CgMenuGridR onClick={()=>setMenu(true)}/>}
              </button>
            <ul className={menuOpen?'active':''}>
                <li onClick={()=>setMenu(false)}>about </li>
                <li onClick={()=>setMenu(false)}>work</li>
                <li onClick={()=>setMenu(false)}>contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar