import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RxGithubLogo } from "react-icons/rx";

const Contact = () => {
    return (
        <div className='contact gap-14'>
            <div className=' flex flex-col justify-center gap-5 first'>
                <p className='uppercase'>Get in touch</p>
                <h1 className='uppercase font-bold text-6xl'>contact</h1>
                <div className='flex justify-center gap-5 uppercase  w-100'>
                    <div className='flex items-center justify-center gap-1 social'>
                        <span>email</span>
                        <MdOutlineEmail className='icon'/>
                    </div>
                    <div className='flex items-center justify-center gap-1 social'>

                        <span>linkedin</span>
                        <AiOutlineLinkedin className='icon'/>
                    </div>
                    <div className='flex items-center justify-center gap-1 social'>

                        <span>github</span>
                        <RxGithubLogo className='icon' />
                    </div>
                </div>
            </div>
            <div className='touch'>
                <img src="" alt="lm" />
            </div>
        </div>
    )
}

export default Contact