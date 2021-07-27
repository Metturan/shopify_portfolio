import { Link } from 'react-router-dom'  

import Shopifybadge from './images/shopifypartnerbadge.png'

function Footer () {
  return (
    <section className='footer'>
      <div>
        <h3>Metturan K.</h3>
        <p>I'm a Senior Shopify developer with many years of experience and owner of a Shopify Development company. I've worked with a variety of brands and whether small or big, I can help you accomplish you're goals.</p>
        <p>Proud member of the Shopify Partner Program</p>
        <img style={{width: '200px'}} src={Shopifybadge} alt="Shopify Partner" />
      </div>
      <div>
        <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/shopify-developer'>Shopify</Link></li>
        </ul>
      </div>

    </section>
  )
}

export default Footer;