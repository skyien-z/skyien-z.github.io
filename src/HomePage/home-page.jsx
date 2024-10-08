import './home-page.css'
import TypingWord from '../TypingWord/typing-word';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti'

const WORDS_TO_ANIMATE = ['poke at', 'like', 'weave', 'explain', 'dance with', 'borrow', 'tease', 'teach'];


const confettiShape = (ctx) => {
    ctx.beginPath();
    ctx.arc(10, 10, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();

    // Draw the letter K
    ctx.beginPath();
    ctx.moveTo(8, 6);
    ctx.lineTo(8, 14);
    ctx.moveTo(8, 10);
    ctx.lineTo(12, 6);
    ctx.moveTo(8, 10);
    ctx.lineTo(12, 14);
    ctx.stroke();
    ctx.closePath();
}

function ColorfulConfettiWords({words}) {
    const wordsArray = words.split(' ');
    return (
        <span className="rainbow-words">
            {wordsArray.map((word, wordIndex) => (
            <>
                {word.split('').map((letter, letterIndex) => (
                    <span
                    key={letterIndex}
                    className={`rainbow-letter letter-${(letterIndex + 1) % 7}`}
                    >
                    {letter}
                    </span>
                ))}
                {" "}
            </>
            ))}
        </span>
    )
}

function BulletAboutProfile() {
    return (
        <div className='about-container'>
            <img className='profile-img' alt='hello!' width={200} src={require('../resources/img/profile_pic.JPG')}></img>
            <h1> Kylie Zhang </h1>
            <h2> BS in CS, UIUC. </h2>
            <h2> MS in CS, Princeton. </h2>
        </div>
    )
}

function HomePage() {
    const [wordOrder, setWordOrder] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const wordTimeout = setInterval(() => {
          setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
        }, 2000)
    
        return () => clearInterval(wordTimeout)
      }, [])
    

    return (    
    <div className='homepage-container'>
        <BulletAboutProfile/>
        
        <div className='content-container'>
            <h1> Hi! <span className='wave'>👋</span> I'm Kylie. </h1>
            <h2> I <TypingWord word={WORDS_TO_ANIMATE[wordOrder]}/> ideas. </h2>
            <br/>
            <p>
                I'm obsessed with cyber policy, programming language design,
                and finding the most consistently awesome flavor of ice cream.
            </p>
            <p onMouseEnter={() => setIsHovering(true)} 
                onMouseLeave={() => setIsHovering(false)}>
                I also write websites and can make 
                <ColorfulConfettiWords words={" colorful graphics "} setIsHovering={setIsHovering}/> 
                 appear on your screen.
            </p>
            <p>
                Throw me a simile and I'll catch you a metaphor.
            </p>
            <p style={{fontSize:'x-small', textAlign:'right'}}>
            </p>
            {isHovering && <Confetti recycle={false} numberOfPieces={300} drawShape={confettiShape}/>}
        </div>
    </div>    
    )
}

export default HomePage;