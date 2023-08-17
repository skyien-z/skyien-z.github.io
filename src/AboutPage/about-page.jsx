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
                    While at school, I run a <NewTabLink 
                                                href='https://www.acm.illinois.edu/#/#sighighlight' 
                                                linkedText='special interest group'
                                                /> for 
                    policy and ethics in our local ACM chapter, and we've done well at <NewTabLink 
                        href='https://cs.illinois.edu/news/excellence-in-cyber-912-strategy-challenge-proves-cs-relevancy-by-solving-global-cybersecurity-issues' 
                        linkedText='competitions'
                    />. 
                    We're incredibly lucky to be coached by <NewTabLink 
                        href='https://cs.illinois.edu/about/people/faculty/rcunnin2' 
                        linkedText='Ryan Cunningham'
                    />. 
                </p>
                <p> 
                    I program in Python, Java, JS, C++, C, and MATLAB. This website is made with React, and I spent the summer 
                    making a React/Express/MongoDB full-stack Chat-GPT-integrated file interface for <NewTabLink 
                    href='https://dl.acm.org/profile/81100468423' linkedText='Ned Gulley'/> at MathWorks. 
                </p>
                <p>
                    This website was made at the recommendation of my fellow CS Undergraduate Studies Committee and Education Policy Committee 
                    member <NewTabLink href='https://waf.cs.illinois.edu/' linkedText='Wade Fagen-Ulmschneider'/>, who told me that I needed to learn how to 
                    market myself. In an effort to do so, I now co-lead ACM's marketing committee, and you can find information on 
                    our latest events <NewTabLink href='https://www.instagram.com/acm.uiuc/' linkedText='here'/>.
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