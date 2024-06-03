import React from "react"
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_photo.jpg'


const About = () => {
  return (
    <div>

    <div id="about" className="about">
        <div className="about-title">
            <h1>About Me</h1>
            
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p> I am a Frontend developer from India with a strong passion for creating intuitive and dynamic user interfaces. I am currently a fresher, eager to leverage my skills and knowledge in web development to contribute to innovative projects. Additionally, I have experience with backend development, allowing me to understand and work effectively across the full stack. </p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p> HTML & CSS </p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p> React JS </p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p> JavaScript </p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p> MySQL </p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p> MongoDB </p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p> Git </p><hr style={{width:"70%"}}/></div>
                
                    
                </div>
            </div>
        </div>
        <div className="about-educations">
            <div className="about-education">
                <h1>10th</h1>
                <p> 70% </p>
            </div>
            <hr />
            <div className="about-education">
                <h1>12th</h1>
                <p> Computer Science - 60% </p>
            </div>
            <hr />
            <div className="about-education">
                <h1>UG </h1>
                <p> Bachelor's Computer Science - 58% </p>
            </div>
            <hr />
            <div className="about-education">
                <h1>PG</h1>
                <p> Masters in Computer Applications - 75% </p>
            </div>
        </div>
    </div>

 
    </div>
  )
}

export default About
