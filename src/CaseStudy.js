import {motion} from 'framer-motion'

import Arrow from './Arrow'

function CaseStudy (props){
    return (
      <motion.div 
      key="casediv"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className={props.toggle ? 'caseStudy open' : 'caseStudy close' }>
        <div className="arrow-loader">
          <Arrow />
        </div>
        <div className='caseBody'>
          <div className="caseText">
            <h3>The Brief</h3>
            <h2>{props.data.title}</h2>
          </div>
          <div className="bodyContainer">
            <p className='casedesc'>{props.data.description}</p>
            <div>
              <p className='sub'>ROLE</p>
              <p className='role' style={{lineHeight: 1}}>Front-End Developer</p>
              <p className='sub'>TECH</p>
              <ul>
                {props.data.tech.map(item => {
                  return <li key={item}>{item}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <img className='caseImg' src={props.image} alt=""/>
        <img className='caseImg' src={props.image2} alt=""/>
        {props.image3 ? <img className='caseImg' src={props.image3} alt=""/> : null}
        {props.image4 ? <img className='caseImg' src={props.image4} alt=""/> : null}
        <div className="spacer"></div>
      </motion.div>
    )
}

export default CaseStudy;