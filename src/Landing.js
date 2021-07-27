import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import CustomLink from './CustomLink'

let pageHistory = [];

function Landing(props) {

  useEffect(() => {
    
    pageHistory.push(window.location.pathname)

  }, [window.location.pathname])

  const homeOrNot = window.location.pathname == '/' ? 'hide' : 'show';

  return (
    <div className={'header ' + ' ' + homeOrNot}>
      <CustomLink isLoading={props.isLoading} pageHistory={pageHistory} changeRoute={props.remount} to='/' />
      <ul className='menu-items'>
        <li><Link to='/about' className='about'>About</Link></li>
        <li><Link to='/shopify-developer' className='about'>Shopify</Link></li>
      </ul>
    </div>
  )
}

export default Landing;