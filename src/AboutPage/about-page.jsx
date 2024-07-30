import './about-page.css'
import React, { useState, useEffect } from 'react';
import { NewTabLink } from '../utils';

function AboutPage() {
    const [position, setPosition] = useState('left');

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition((prevPosition) => (prevPosition === 'left' ? 'right' : 'left'));
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <div className='about-page-container'>
            <div className='left-container'>
            <span className="left-side-clouds"> ☁️⛅🌤️ </span>
                <span className={`sun ${position === 'right' ? 'go-right' : 'go-left'}`}>
                    ☀️
                </span>
                <span className="right-side-clouds"> 🌤️⛅☁️ </span>
                <img className='about-png' alt='me looking up' src={require('../resources/img/about-page.png')}/>
            </div>
            <div className='content-container'>
            <h1> About Me </h1>
                <p> 
                    My friends say my personality can be boiled down to ice cream, hopping around places, and Taylor Swift.
                </p>
                <p>
                    In the past, I've run a <NewTabLink 
                                                href='https://sigpolicy.acm.illinois.edu/' 
                                                linkedText='special interest group'
                                                /> for 
                    policy and ethics in UIUC's ACM chapter; we were incredibly lucky to be coached by <NewTabLink 
                        href='https://cs.illinois.edu/about/people/faculty/rcunnin2' 
                        linkedText='Ryan Cunningham'
                    />. This website was made at the recommendation of <NewTabLink href='https://waf.cs.illinois.edu/' linkedText='Wade Fagen-Ulmschneider'/>, 
                    who taught me about <NewTabLink href='https://www.senate.illinois.edu/educationalpolicy.asp' linkedText='governance'/>. 
                </p>
                <p> 
                    I program in Python, Java, JS, C++, C, and MATLAB. This website is made with React, and I spent a summer 
                    making a React/Express/MongoDB full-stack Chat-GPT-integrated file interface for <NewTabLink 
                    href='https://www.mathworks.com/matlabcentral/profile/authors/140947' linkedText='Ned Gulley'/> at MathWorks.
                </p>
                <p>   
                    This summer, I built a full-stack Ruby on Rails reservation system and played around with <NewTabLink href='https://www.sitespeed.io/' 
                    linkedText='sitespeed.io'/> for <NewTabLink href='https://www.linkedin.com/in/willyi/' linkedText='Will Yi'/> at Cisco Meraki.
                </p>
                <p>
                    In the past, I've researched the <NewTabLink 
                                                    href={require('../resources/files/cultural_pressures.pdf')} 
                    linkedText='cultural'/> and <NewTabLink href={require('../resources/files/religious_pressures.pdf')}
                    linkedText='religious'/> aspects of sexuality under <NewTabLink 
                    href='https://history.illinois.edu/directory/profile/chettiar' linkedText='Teri Chettiar'/>.
                     I'm fascinated by how incentive systems shape when people scale.
                </p>
            </div>
        </div>
    )
}

export default AboutPage;