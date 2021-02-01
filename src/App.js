import {useState, useRef} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

import Landing from './Landing'
import Home from './Home'
import About from './About'

function App() {
  let [key, setKey] = useState(0);
  let [isLoading, setLoading] = useState(true);

  function forceRemount() {
      setKey(key + 1)
      setLoading(false)
  }

  return (
    <Router>
      <div id="App" className="style-0">
        <Landing remount={forceRemount} />
        <AnimatePresence initial={true} exitBeforeEnter>
          <Switch location={window.location} key={window.location.pathname}>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path={["/", "/lunar", "/nanoleaf", "/o2b", "/interface", "/fooi"]} key={key}>
              <Home isLoading={isLoading}/>
            </Route >
          </Switch >
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
