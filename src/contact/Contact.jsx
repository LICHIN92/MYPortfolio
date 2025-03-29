import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RxGithubLogo } from "react-icons/rx";
import contactus from '../assets/contactus.jpg'

const Contact = () => {
    return (
        <div className='contact gap-5 py-20'>
            <div className=' flex flex-col justify-center gap-5 first rounded-xl'>
                <p className='uppercase ps-2'>Get in touch</p>
                <h1 className='uppercase ps-2 font-bold text-4xl'>contact</h1>
                <div className='flex flex-wrap  justify-center gap-5 uppercase  w-100'>
                    <div className='flex items-center justify-center gap-1 social'
                     onClick={() => window.location.href = "mailto:lichinchandra143@gmail.com"}>
                        <span>email</span>
                        <MdOutlineEmail className='icon'/>
                    </div>
                    <div className='flex items-center justify-center gap-1 social'
                    onClick={() => window.open('https://www.linkedin.com/in/lichin-c-55186b128/', '_blank')}
>

                        <span>linkedin</span>
                        <AiOutlineLinkedin className='icon'/>
                    </div>
                    <div className='flex items-center justify-center gap-1 social'>

                        <span>github</span>
                        <RxGithubLogo className='icon' />
                    </div>
                </div>
            </div>
            <div className='touch object-cover'>
                <img src={contactus} alt="lm" />
            </div>
        </div>
    )
}

export default Contact