import {Link} from 'react-router-dom'

import CustomLink from './CustomLink'

function Header() {
  return (
    <div className='second-header'>
      <div className='main-font'><Link to='/'>Home</Link></div>
      <ul>
        <li>Get in touch</li>
        <li><Link to='/klinkhoff'>Case Studies</Link></li>
      </ul>
    </div>
  )
}

export default Header;