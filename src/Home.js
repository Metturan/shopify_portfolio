import {Suspense, useState, useRef} from 'react'
import { Canvas } from 'react-three-fiber'
import {motion} from 'framer-motion';
import { useHistory} from 'react-router-dom';
import {gsap} from 'gsap';
import {useProgress} from 'drei';
import CanvasData from './CanvasData'
import Grids from './Grids'
import ChapterSelection from './ChapterSelection'
import CaseStudy from './CaseStudy'

import data from './Data'

import lunar1 from './images/lunar1.png'
import lunar2 from './images/lunar2.png'
import lunar3 from './images/lunar3.png'

import nano1 from './images/nanoa.png'
import nano2 from './images/nanob.png'

import o2b1 from './images/o2b11.jpg'
import o2b2 from './images/o2b22.jpg'
import o2b3 from './images/o2b33.jpg'
import o2b4 from './images/o2b55.png'

import interface1 from './images/interfacea.png'
import interface2 from './images/interfaceb.png'
import interface3 from './images/interfacec.png'

import fooi1 from './images/fooi1.png'
import fooi2 from './images/fooi2.png'


const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

function DetectCaseStudy (props) {

  if (props.name === 'lunar') {
    return (<CaseStudy toggle={props.toggle} image={lunar1} image2={lunar2} image3={lunar3} data={data[0]}/>)
  } else if (props.name === 'nanoleaf') {
    return (<CaseStudy toggle={props.toggle} image={nano1} image2={nano2} data={data[1]}/>)
  } else if (props.name === 'o2b') {
    return (<CaseStudy toggle={props.toggle} image={o2b1} image2={o2b2} image3={o2b3} image4={o2b4} data={data[2]}/>)
  } else if (props.name === 'interface') {
    return (<CaseStudy toggle={props.toggle} image={interface1} image2={interface2} image3={interface3} data={data[3]}/>)
  } else if (props.name === 'fooi') {
    return (<CaseStudy toggle={props.toggle} image={fooi1} image2={fooi2} data={data[4]}/>)
  } else {
    return null;
  }
  
}

function Loader(props) {

  let uiBar = useRef();
  let loadingOverlay = useRef();

  const {loaded, active} = useProgress();
  const completePercent = (loaded / 5) * 100;

  gsap.to(uiBar.current, {duration:1, scaleX: completePercent/100})

  if (completePercent == 100 && active === false) {
    gsap.to(loadingOverlay.current, {duration: 0.3, autoAlpha: 0, delay: 1.1})
    gsap.to('.header', {duration: 0.3, autoAlpha: 1, delay: 1.1});

    // props.setLoading(false);
  }

  return (
    <div ref={loadingOverlay} className='loader-overlay'>
    <div className='loading-container'>
      <div ref={uiBar} className="uibar"></div>
      <div className="fakebar"></div>
      <div className='percent'>{completePercent} %</div>
    </div>
  </div>
  )
}

function LoaderWrapper(props) {
  if (props.loading) {
    return (
      <Loader />
    )
  } else {
    return null;
  }
    
}

function Home (props) {

  let section0 = useRef();
  let section1 = useRef();
  let section2 = useRef();
  let section3 = useRef();
  let section4 = useRef();

  const history = useHistory();

  let listItems = useRef();

  let jobPositionDom = useRef();

  let [isOpen, setOpen] = useState(false);
  let [isPanelClicked, setPanelClicked] = useState(false);
  let [routeName, setName] = useState('lunar');


  function changeURL(name, i){
    history.push(`/${name}`);

    setPanelClicked(true);
    setOpen(true);
    setName(name);
  }

  return (
    <motion.div 
    key="homediv"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transition}
    id='home-container'>
        <Grids />
        <ChapterSelection section={[section0, section1, section2, section3, section4]} />
        <Canvas style={{touchAction: 'pan-y'}} camera={{position: [0,0,4.5]}} >
          <ambientLight intensity={0.2} />
          <Suspense fallback={null}>
            <CanvasData 
              listItems={listItems} 
              linkChange={changeURL} 
              section={[section0, section1, section2, section3, section4]}
              jobPositionDom={jobPositionDom}
              isPanelClicked={isPanelClicked}/>
          </Suspense>
        </Canvas>
          <ul ref={listItems} className='carousel-list'>
            <li data-nav={0}><span></span></li>
            <li data-nav={1}><span></span></li>
            <li data-nav={2}><span></span></li>
            <li data-nav={3}><span></span></li>
            <li data-nav={4}><span></span></li>
          </ul>
        <LoaderWrapper loading={props.isLoading}/>
        <DetectCaseStudy name={routeName} toggle={isOpen} />
        <h2 ref={jobPositionDom} className='positionTitle'>Front End Developer /<br/> Senior Wordpress Developer</h2>
    </motion.div>
    );
}

export default Home;
