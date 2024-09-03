import './contact-page.css'
import { NewTabLink } from '../utils';

function ContactPage() {
    return (
    <div className='contact-page-container'>
        <div className='header-container'>
            <h1> Contact </h1>
        </div>
        <figure className='figure'>
             <img className='contact-png' alt="" width={400} height={400} src={require('../resources/img/about-page-sunflowers.png')}></img>
             <figcaption style={{fontSize:'x-small', textAlign:'right'}}> Photoshop courtesy of <NewTabLink 
                        href='https://groovyboron.com/' 
                        linkedText='Griffin Bates'/>. </figcaption>
        </figure>
        <p> Shoot me an email at kyliez2(at)illinois.edu to get in touch.</p>
        <p> You can also reach me at the following (virtual) locations: </p>
        <ul className='contact-links'>
            <li> <NewTabLink href='https://www.linkedin.com/in/kyliez/' 
                             linkedText={<img width={50} height={50} alt=""
                             src={require('../resources/img/linkedin-official-logo.png')}/>
                             }/>
            </li>
            
            <li> <NewTabLink href='mailto:kyliez2@illinois.edu' 
                             linkedText={<img width={50} height={50} alt=""
                             src={require('../resources/img/mail-icon.png')}/>
                             }/> 
            </li>

            <li> <NewTabLink href='https://github.com/skyien-z' 
                             linkedText={<img width={50} height={50} alt=""
                             src={require('../resources/img/github-mark.png')}/>
                             }/> 
            </li>
        </ul>
        <p> Take care! </p>
    </div>
    )
}

export default ContactPage;