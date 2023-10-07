import React from 'react'
import './Main.css'
import Background from './asset/bg.png'
import project1 from './asset/p1.jpeg'
import project2 from './asset/p2.jpeg'
import project3 from './asset/p3.jpeg'
import github from './asset/git.png'
import Insta from './asset/ig.png'
import Tiktok from './asset/tiktok.png'
import Gmail from './asset/gmail.png'
import Backgroun2 from './asset/bg2.png'

const Main = () => {
  return (
    <main >
      <div className="containerMain">
      <div className='main'>
        <h1>Hi, I'm Miftah</h1>
        <h3> Welcome to my portofolio</h3>
        <p>Student from SMK Letris Indonesia 2 majoring in software enginering. I invite you to explore my site to get a better understanding of my specialities</p>
        <button>My Projects</button>
        
      </div>
      <div>
      <img src={Background} />
      </div>
      </div>

      <div className="hero">
        <div className="heroBox">
        <h2>ABOUT MIFTAH</h2>
        <p>My name is Miftah Kamiliyah. <br /> Currently studying at SMK Letris Indonesia 2. <br /> My goal is to collaborate with many people <br /> and companies that will gave me a lot of <br /> experience and opportunity to <br /> prove my specialities and abilities. </p>
        </div>
        <div className='heroContainer'><img src={Backgroun2} /></div>
      </div>

      <div className='mainBox'>
        <div className="box">
        <h1>Take a look at my projects</h1>
        <p>You can see more in github</p>
        </div>
        <div className='containerBox'>
          <ul>
            <li>
              <img src={project1} />
              <a href="inimita.github.io/TugasLandingPage.github.io/"><p>Project Web Travel dengan html, css, dan JS</p></a>
            </li>
            <li>
              
              <img src={project2} />
              <a href=""><p>Cloning web Zenius</p></a>
            </li>
            <li>
              
              <img src={project3} />
              <a href=""><p>Project Web Travel dengan reactJS</p></a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className='boxContact'>
        <div className='a'></div>
        <p>You can find me at here</p>
        <div className="contact">
          <ul>
            <li>
              <a href="https://github.com/Inimita"><img src={github} /></a>
              
            </li>
            <li>
            <a href="https://www.instagram.com/miftah_927/"><img src={Insta} /></a>
            </li>
            <li>
            <a href="https://www.tiktok.com/@jo__jee"><img src={Tiktok} /></a>
            </li>
            <li>
            <a href="https://mail.google.com/mail/u/?view=cm&tf=1&to=miftahkamiliyah927@gmail.com"><img src={Gmail} /></a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Main