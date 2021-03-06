import {motion} from 'framer-motion';

import mail from './images/send-mail.svg' 

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

function About () {
  return (
    <motion.div 
      key="aboutdiv"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={transition}
      id='about-container' 
      className="about" >
      <h1>Whenever, wherever. <br/>Let's work together.</h1>
      <div className='about-intro'>
        <h2>Contact me for any Shopify questions you have, want to work together or to say hello</h2>
        <h3>I have an inbox zero rule so I'll see your message for sure and, I'll reply with at least one smiley. I promise.</h3>
      </div>
      <a href="mailto:metturanketh@gmail.com" className='contactBtn'>
        <span>Contact Me</span><img src={mail} alt=""/>
      </a>
      <h1 className='whatican'>About Me</h1>
      <p>I started the beginning of my tech career as a front end developer in 2015 taking a bootcamp in Toronto, Canada. Following the bootcamp, I took on freelance projects and was working full-time for a digital agency. I've helped build websites and campaigns for some of the biggest brands in North America like the NBA, Iogo, Nintendo, Decorium and Cialis.</p>
      <p>From big brand websites, web apps for a startup, to a 300k/month visitors e-commerce site custom development. I have laid my mark and gained valuable experience and skills.</p>
      <p><strong>Primary Tech:</strong></p>
      <ul>
        <li>Shopify</li>
        <li>PHP</li>
        <li>WooCommerce</li>
        <li>Wordpress</li>
        <li>React/Redux</li>
        <li>Javascript</li>
        <li>Node</li>
        <li>MySQL</li>
        <li>CSS</li>
      </ul>
      <br/>
      <p><strong>Other Skills:</strong></p>
      <ul>
        <li>Git</li>
        <li>Klaviyo</li>
        <li>Google Analytics, Google Tag Manager</li>
        <li>Adobe Suite</li>
        <li>Facebook Pixel Analytics</li>
      </ul>
      <p className='cta-callout'><strong>If you are looking for a Front End Developer or Shopify Developer to work with your team on any projects or for contract/freelance work, give me a shout, and let's see if we can work together on building something great.</strong></p>
      <div className="cta-button-holder">
        <a href="mailto:metturanketh@gmail.com" className='contactBtn'>
          <span>Contact Me</span><img src={mail} alt=""/>
        </a>
      </div>
    </motion.div>
  )
}

export default About;