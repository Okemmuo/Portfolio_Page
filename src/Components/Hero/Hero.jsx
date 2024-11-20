import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pf3.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span> I'm Iwuji Chibueze,</span> fullstack developer based in Nigeria.</h1>
        <p>I am a fullstack web deveoloper from Imo State, Nigeria with 2 years of experience seeking for an intern role in a Tech company</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
      
    </div>
  )
}

export default Hero
