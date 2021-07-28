import {motion} from 'framer-motion';

import Header from './Header'
import Footer from './Footer'
import ResponsivePlayer from './ResponsivePlayer'
import QuizContainerContent from './QuizContainerContent'
import Arrow from './Arrow'

import klinkhoffLanding from './images/klinkhofflandingimage.png'

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

const videosUrl = {
  klink: 'https://vimeo.com/567703881',
  klink1: 'https://vimeo.com/567703785',
  klink2: 'https://vimeo.com/567703751',
  klink3: 'https://vimeo.com/567703604',
  klink4: 'https://vimeo.com/567703554',
  klink5: 'https://vimeo.com/567703493',
}

function Klinkhoff() {
  return (
    <motion.div 
    key="articlepage"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transition}
    >
    <div className='case-study-page'>
      <section className="hero klink">
        <h1>Klinkhoff Art Gallery</h1>
      </section>
      <div className="intro-featured">
          <h2>An art gallery that is in the business of collecting valuable artworks from across the globe. Take a look below to see some of the features we built for this shopify site.</h2>
        </div>
      <section className='case-study-landing-image'>
        <img src={klinkhoffLanding} alt="Klinkhoff Landing Page" />
      </section>
      <section className="case-intro">
        <h2>Custom Features + Integrations</h2>
        <div className="featured">
          <ResponsivePlayer url={videosUrl.klink} />
          <p>Follow Interests and Artists - To enhance their email marketing capacities and increase engagement we created custom functionlity that allows logged in users to save artists and interests to their profile. The result is information that can then be marketed to through specific email campaigns.</p>
        </div>
        <div className="featured">
          <ResponsivePlayer url={videosUrl.klink1} />
          <p>Follow Interests and Artists - To enhance their email marketing capacities and increase engagement we created custom functionlity that allows logged in users to save artists and interests to their profile. The result is information that can then be marketed to through specific email campaigns.</p>
        </div>
        <div className="featured">
          <ResponsivePlayer url={videosUrl.klink4} />
          <p>Follow Interests and Artists - To enhance their email marketing capacities and increase engagement we created custom functionlity that allows logged in users to save artists and interests to their profile. The result is information that can then be marketed to through specific email campaigns.</p>
        </div>
        <div className="featured border-bottom">
          <ResponsivePlayer url={videosUrl.klink5} />
          <p>Follow Interests and Artists - To enhance their email marketing capacities and increase engagement we created custom functionlity that allows logged in users to save artists and interests to their profile. The result is information that can then be marketed to through specific email campaigns.</p>
        </div>
        <Arrow />
        {/* <h2 className='cta-title'>Let's talk about your project</h2> */}
        <QuizContainerContent title="Let's talk about your project" />
      </section>
      <Footer />
    </div>
    </motion.div>
  )
}

export default Klinkhoff;