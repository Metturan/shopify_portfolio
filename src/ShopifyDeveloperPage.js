import {useRef} from 'react'
import ResponsivePlayer from './ResponsivePlayer'
import ArticleSnippet from './ArticleSnippet'
import Header from './Header'
import Footer from './Footer'
import PricingSection from './Pricing'
import Quiz from './Quiz'
import {motion} from 'framer-motion';

import ProjectExample from './ProjectExample'
import HeroImage from './images/shopifysites.png'

import nanoleaf1 from './images/nanoleaf1project.png'
import klink11 from './images/klink11.png'


const nanourl = 'https://vimeo.com/567703280'
const klinkurl = 'https://vimeo.com/567703881'
const intro = 'https://vimeo.com/576850296'

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

function ShopifyDeveloperPage() {

  const ctaQuiz = useRef();

  function scrollToQuiz() {
    ctaQuiz.current.scrollIntoView({behavior: "smooth", block: "start"} );
  }

  return (
    <motion.div 
    key="shopifydiv"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transition}
    >
      <Header />
      <div className='page-body'>
        <section className="shopify-hero">
          <div className='inner-hero'>
            <div className='left-content'>
              <h1>Web Design/Development all around Shopify</h1>
              <p>Get big agency level quality of work without the agency price tag.</p>
              <button onClick={() => scrollToQuiz()} >Start a Project</button>
            </div>
            <div className="right-content">
              <img src={HeroImage} alt="Mockups of Shopify Sites"/>
            </div>
          </div>
        </section>
        <section className='intro'>
          <div className='intro-vid'>
            <ResponsivePlayer url={intro} />
            <p>We are experienced in delivering a variety of services including Shopify store setups, Custom Store Design & Development, Customisations, App Integrations as well as ongoing retainer support and E-commerce Rate Optimisation.</p>
          </div>
        </section>
        <section className="projects">
          <ProjectExample 
            url={klinkurl}
            caseLink='/klinkhoff'
            classTitle='Klink'
            title='Klinkhoff Art Gallery' 
            desc='E-commerce, Shopify.' />
          <ProjectExample 
            url={nanourl}
            classTitle='Nano'
            title='Nanoleaf' 
            desc='E-commerce, Shopify Headless CMS.' />
        </section>
        <section>
          <PricingSection />
        </section>
        <section className="featured-example">
          <div className="page-width">
            <h2>Featured Article</h2>
            <ArticleSnippet />
          </div>
        </section>
        <section>
          <h2 ref={ctaQuiz} className='cta-title'>Get Started</h2>
          <Quiz />
        </section>
        <Footer />
      </div>
    </motion.div>
  )
}

export default ShopifyDeveloperPage;