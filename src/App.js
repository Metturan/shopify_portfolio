import {useState, useRef} from 'react'
import ReactPixel from 'react-facebook-pixel'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

import ScrollToTop from './ScrollToTop'
import Landing from './Landing'
import Home from './Home'
import About from './About'
import ShopifyDeveloperPage from './ShopifyDeveloperPage'
import WorkWithMe from './WorkWithMe'
import Klinkhoff from './Klinkhoff'
import Blog from './Blog'
import Article from './article/Article'

ReactPixel.init('201368258608406');

function App() {
  let [key, setKey] = useState(0);
  let [isLoading, setLoading] = useState(true);

  function forceRemount() {
      setKey(key + 1)
      setLoading(false)
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <div id="App" className="style-0">
          <Landing remount={forceRemount} isLoading={isLoading} />
          <AnimatePresence initial={true} exitBeforeEnter>
            <Switch location={window.location} key={window.location.pathname}>
              <Route exact path='/blog' component={Blog} />
              <Route exact path={`/blog/:article`} component={Article} />
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path ='/klinkhoff' component={Klinkhoff} />
              <Route exact path='/shopify-developer' component={ShopifyDeveloperPage} />
              <Route exact path='/work-with-me' component={WorkWithMe} />
              <Route exact path={["/", "/lunar", "/nanoleaf", "/o2b", "/interface", "/fooi"]} key={key}>
                <Home isLoading={isLoading}/>
              </Route >
              
            </Switch >
          </AnimatePresence>
        </div>
      </Router>
    </>
  );
}

export default App;
