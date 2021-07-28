import {useRef} from 'react'
import Quiz from './Quiz'

export default function QuizContainerContent(props) {

  const ctaQuiz = useRef();

  return (
    <div className="quiz-section">
      <div>
      <h2 ref={ctaQuiz} className='cta-title'>{props.title}</h2>
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
  )
}