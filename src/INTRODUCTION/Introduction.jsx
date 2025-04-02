
import React from 'react'
import './intro.css'
import web from '../../src/assets/web.png'
import { FaReact } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import full from '../assets/fullStack.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import node from '../assets/nodejs.png'
import exp from '../assets/expressjs.png'
import react from '../assets/reactjs.png'
import redux from '../assets/redux.png'
import mongo from '../assets/mongodb.png'
import tail from '../assets/tailwind.png'
import git from '../assets/github.png'
import boot from '../assets/boo.jpg'
import vs from '../assets/vscode.png'
import mongod from '../assets/mongodbCompass.png'
import chat from '../assets/ChatGPT.png'
import chrome from '../assets/chrome.png'
import post from '../assets/postman.png'

const Introduction = () => {
    return (
        <div className="introduction"  id='about'>
            <h6 className='text-lg '>INTRODUCTION</h6>
            <div className="overview">
                <h3>OVERVIEW</h3>
                <p>I'm Lichin Chandran, a skilled software developer with a strong foundation in JavaScript and expertise in
                    frameworks like <span className='frameWork'>React</span>,  <span className='frameWork'>Node.js</span>,
                    <span className='frameWork'>Express.js</span>, and <span className='frameWork'>MongoDB </span>. I'm a quick learner who thrives in dynamic environments,
                    collaborating closely with clients to deliver efficient, scalable, and user-friendly solutions. Let's bring your
                    ideas to life!</p>
            </div>
            <div className="card">
                <div className='cardContainer'>
                    <img src={web} alt="s" />
                    <div>
                        <span>web</span>
                        <span>Developer</span>
                    </div>
                </div>

                <div className='cardContainer'>
                    {/* <img src={web} alt="s" /> */}
                    <FaReact size={60} color="#61DBFB" className='react' />
                    <div>
                        <span>React</span>
                        <span>Developer</span>
                    </div>
                </div>
                <div className='cardContainer'>
                    {/* <img src={web} alt="s" /> */}
                    <VscServerProcess size={60} color='#61DBFB' />
                    <div>
                        <span>Back End</span>
                        <span>Developer</span>
                    </div>
                </div>
                <div className='cardContainer'>
                    <img src={full} alt="s" />
                    <div>
                        <span>Full Stack</span>
                        <span>Developer</span>
                    </div>
                </div>
            </div>
            <div className="skill  flex flex-col items-center flex-wrap gap-14 pt-2">
                <h3 className='text-center text-6xl font-bold capitalize'>skills</h3>
                <div className="dd flex flex-wrap gap-5  px-5 justify-center sm:gap-10">
                    <div className="skills flex flex-col items-center">
                        <img src={html} alt="" />
                        <h6>HTML 5</h6>
                    </div>
                    <div className="skills flex flex-col items-center">
                        <img src={css} alt="" />
                        <h6>CSS</h6>
                    </div>
                    <div className="skills flex flex-col items-center">
                        <img src={js} alt="" />
                        <h6>JavaScript</h6>
                    </div>
                    <div className="skills flex flex-col items-center">
                        <img src={node} alt="" />
                        <h6>Node JS</h6>
                    </div>
                    <div className="skills flex flex-col items-center">
                        <img src={exp} alt="" />
                        <h6>Express JS</h6>
                    </div>
                    <div className="skills flex flex-col items-center">
                        <img src={react} alt="" />
                        <h6>React JS</h6>
                    </div>
                    <div className="skills flex flex-col items-center">
                        <img src={redux} alt="" />
                        <h6>Redux JS</h6>
                    </div>
                    <div className="skills flex flex-col items-center">
                        <img src={mongo} alt="" />
                        <h6>MongoDB</h6>
                    </div>
                    <div className="skills flex flex-col items-center">
                        <img src={tail} alt="" />
                        <h6>Tailwind CSS</h6>
                    </div>
                    <div className="skills flex flex-col items-center">
                        <img src={git} alt="" />
                        <h6>Github</h6>
                    </div>
                    <div className="skills flex flex-col items-center">
                        <img src={boot} alt="" />
                        <h6>Bootstrap</h6>
                    </div>
                </div>

                <div className="skill  flex flex-col items-center flex-wrap gap-14 pt-2 pb-5">
                    <h3 className='text-center text-xl font-bold capitalize'>Tools and Software</h3>
                    <div className="dd flex flex-wrap gap-5  px-5 justify-center sm:gap-10">

                        <div className="skills flex flex-col items-center">
                            <img src={vs} alt="" />
                            <h6>VC Code</h6>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <img src={mongod} alt="" />
                            <h6>MongoDB <br /> Compass</h6>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <img src={chat} alt="" />
                            <h6>chatGPT</h6>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <img src={chrome} alt="" />
                            <h6>Chrome</h6>
                        </div>
                        <div className="skills flex flex-col items-center">
                            <img src={post} alt="" />
                            <h6>Postman</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction