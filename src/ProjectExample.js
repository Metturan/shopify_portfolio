import {Link} from 'react-router-dom'
import ResponsivePlayer from './ResponsivePlayer'

function ProjectExample (props) {
  return (
    <div className='projects-section'>
      <div className={'clusterImages ' + props.classTitle}>
        {props.image1 ? <img src={props.image1} alt={props.title} /> : null }
        {props.image2 ? <img src={props.image2} alt={props.title} /> : null }
        {props.image3 ? <img src={props.image3} alt={props.title} /> : null }
        {props.url ? <ResponsivePlayer url={props.url} /> : null }
      </div>
      <div className="projectInfo">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        {props.caseLink ?  <Link to={props.caseLink} >Case Study</Link> : null}
      </div>
    </div>
  )
}

export default ProjectExample;