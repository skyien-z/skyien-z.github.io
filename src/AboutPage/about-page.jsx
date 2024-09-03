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
                    I research the privacy implications of AI policy at <NewTabLink href='https://citp.princeton.edu/' linkedText='CITP'/>, 
                    where I'm lucky to be advised by <NewTabLink href='https://www.peterhenderson.co/' linkedText='Peter Henderson'/>.
                </p>
                <p>
                    In the past, I've run a <NewTabLink 
                                                href='https://sigpolicy.acm.illinois.edu/' 
                                                linkedText='special interest group'
                                                /> for 
                    policy and ethics in UIUC's ACM chapter; we were incredibly fortunate to be coached by <NewTabLink 
                        href='https://cs.illinois.edu/about/people/faculty/rcunnin2' 
                        linkedText='Ryan Cunningham'
                    />. This website was made at the recommendation of <NewTabLink href='https://waf.cs.illinois.edu/' linkedText='Wade Fagen-Ulmschneider'/>, 
                    who taught me about <NewTabLink href='https://www.senate.illinois.edu/educationalpolicy.asp' linkedText='governance'/>. 
                </p>
                <p> 
                    I program in Python, Java, JS, C++, C, and MATLAB. I spent a summer making a React/Express/MongoDB 
                    Chat-GPT-integrated file interface for <NewTabLink href='https://www.mathworks.com/matlabcentral/profile/authors/140947' 
                    linkedText='Ned Gulley'/> at MathWorks. I spent another summer making a Ruby on Rails reservation system and 
                    Grafana page load dashboards for <NewTabLink href='https://www.linkedin.com/in/willyi/' linkedText='Will Yi'/> at Cisco Meraki.
                </p>
                <p>
                    I have also researched the cultural and religious aspects of sexuality under <NewTabLink 
                    href='https://history.illinois.edu/directory/profile/chettiar' linkedText='Teri Chettiar'/>.
                     I'm fascinated by how incentive systems shape when people scale.
                </p>
            </div>
        </div>
    )
}

export default AboutPage;