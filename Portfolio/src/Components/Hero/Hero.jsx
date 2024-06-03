import React from "react"
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll"

const Hero = () => {
  return (
    <div id='home' className="hero">
        <img src={profile_img} alt="" />
        <h1><span>I'm Subin Tom Thomas,</span> Frontend and Backend Developer.</h1>
        <p>
             I am a frontend developer from India, currently a fresher, eager to apply my skills in web development to exciting projects.
        </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>

        
    </div>
  )
}

export default Hero
