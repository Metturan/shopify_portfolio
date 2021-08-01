import {useRef} from 'react'
import { hotjar } from 'react-hotjar';
import ResponsivePlayer from './ResponsivePlayer'
import ArticleSnippet from './ArticleSnippet'
import Footer from './Footer'
import PricingSection from './Pricing'
import Quiz from './Quiz'
import {motion} from 'framer-motion';


import ProjectExample from './ProjectExample'
import HeroImage from './images/shopifysites.png'


hotjar.initialize(2525375, 6);

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

      <div className='page-body'>
        <section className="shopify-hero">
          <div className='inner-hero'>
            <div className='left-content'>
              <h1>Web Development all around Shopify</h1>
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
          <div className="quiz-section">
            <div>
            <h2 ref={ctaQuiz} className='cta-title'>Get Started</h2>
              <Quiz />
            </div>
            <div>
              <h3>Example for project details.</h3>
              <p><strong>About Us:</strong></p>
              <p>Hi there, I'm Charlie, the founder of Melt. We sell CBD-infused bath bombs and are just getting started building this new business.</p>

              <p><strong>Project Description:</strong></p>
              <p>I recently purchased a Shopify theme from Out of the Sandbox and need help customizing it to fit our needs.</p>
              <p>Given that we only sell 1 product (with a handful of variations), we want to feature it directly on the home page, so that people don't have to click into the product page in order to buy.</p>
              <p> I'll attach the designs below to give you a sense of exactly what we're looking for.</p>
              <p><strong>Project Goal:</strong></p>
              <p>Before we launch, I want to make sure our store feels like our brand and properly highlights our product, as well as maximizes conversion rates.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </motion.div>
  )
}

export default ShopifyDeveloperPage;