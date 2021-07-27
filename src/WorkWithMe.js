import {motion} from 'framer-motion';
import mail from './images/send-mail.svg' 

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

function WorkWithMe () {
  return (
    <motion.div 
    key="aboutdiv"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transition}
    id='about-container' 
    className="about" >
      <section id='work-with-me'>
        <div class='hero-section'>
          <div class='header-shopify'>
            <h1>Coding with Metturan</h1>
          </div>
          <div class='hero-body'>
            <div className="left-body">
              <h2>Web Development <br/> all around Shopify</h2>
              <p></p>
            </div>
            <div className="right-body"></div>
          </div>
        </div>
        

      </section>
  </motion.div>
  )
}

export default WorkWithMe;