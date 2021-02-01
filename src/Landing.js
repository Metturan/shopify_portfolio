import {Link} from 'react-router-dom'

import CustomLink from './CustomLink'

function Landing(props) {

  return (
    <div className="header">
      <CustomLink changeRoute={props.remount} to='/' />
      <Link to='/about' className='about'>About</Link>
    </div>
  )
}

export default Landing;