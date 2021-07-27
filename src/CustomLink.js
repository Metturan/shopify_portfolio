import {useRouteMatch, withRouter} from 'react-router-dom'

const CustomLink = withRouter((props) => {
  
  let match = useRouteMatch("/")

  function routechange () {

      // props.history.push('/');
      // props.changeRoute();

    if (props.pageHistory[0] == '/' ) {
      props.history.push('/');
      props.changeRoute();
    } else {
      window.location.href = 'http://localhost:3000/'
    }
    
  }

  if (match.isExact) {
    return (
      <p className="author-title">Metturan K.</p>
    )
  } else {
    return (
      <p onClick={routechange} className="author-title">Metturan K.</p>
    )
  }
})

export default CustomLink;