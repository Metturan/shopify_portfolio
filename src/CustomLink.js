import {useRouteMatch, withRouter} from 'react-router-dom'

const CustomLink = withRouter((props, {history}) => {
  let match = useRouteMatch("/")

  function routechange () {
    props.history.push('/');
    props.changeRoute();
  }

  if (match.isExact) {
    return (
      <p className="author-title">Metturan K.</p>
    )
  } else {
    return (
      <p onClick={routechange} className="author-title">Go Back</p>
    )
  }
})

export default CustomLink;