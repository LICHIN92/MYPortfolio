import React from 'react'
import './work.css'
import shope from '../assets/eshope.png'
import turf from '../assets/turf.jpg'
import ct from '../assets/costr.png'
import { Tooltip } from 'react-tooltip'
const Work = () => {
    return (
        <div className='workContainer ' id='work' >
            <h2 className='capitalize'>My work</h2>
            <h2 className='capitalize text-5xl '> projects</h2>
            <div className="project">
                <div className="projects">

                    <div className='imgg'>
                        <img src={turf} alt="" />
                        <Tooltip id='turf_tooltip' place='top' content='Click to View' />
                    </div>
                    <div className='aboutWork'>
                        <h2 data-tooltip-id='turf_tooltip' onClick={()=>window.open('https://turfhub-mauve.vercel.app/','_blank')} >Turf Booking</h2>
                        <p>"A web-based platform that allows users to search and book turf slots.
                            Admins can manage turfs, bookings, reviews, and users—providing a convenient and efficient
                            solution for people seeking the best turf booking experience."</p>
                    </div>
                </div>
                <div className="projects">
                    <div className="imgg">
                        <img src={shope} alt="" />
                        <Tooltip id='Eshop_tooltip' place='top' content='Click to View' />
                    </div>
                    <div className='aboutWork'>
                        <h2 data-tooltip-id='Eshop_tooltip' onClick={()=>window.open('https://e-comme-pygm.vercel.app ','_blank')}>E shop</h2>
                        "A simple web-based platform where users can search and order products. Admins can manage
                        products, orders, and users—offering an easy and efficient shopping experience for local
                        customers.
                    </div>
                </div>
                <div className="projects">

                    <div className="imgg">
                        <img src={ct} alt="" />
                        <Tooltip id='cntn_tooltip' place='top' content='Click to View' />
                    </div>
                    <div className='aboutWork' >
                        <h2  data-tooltip-id='cntn_tooltip' onClick={() => window.open('https://construction-eosin.vercel.app/', '_blank')}>Construction solution</h2>
                        This app is for the construction sector. Users can register their construction activities
                        and we support them by providing efficient workers for their needs.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work