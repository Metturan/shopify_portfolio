import { useRef, useEffect, useState, Component } from 'react';
import { useFrame, extend } from 'react-three-fiber'
import { useTexture, shaderMaterial } from 'drei'
import glsl from 'babel-plugin-glsl/macro'
import * as THREE from 'three';
import gsap from 'gsap';
import debounce from 'lodash.debounce'

import earth from './images/earth.jpg'
import nano from './images/nanoleaf.jpg'
import o2b from './images/o2b.jpg';
import inter from './images/inter.jpg'
import fooi from './images/fooipanel.png'

let speed = 0;
let position = 0;
let rounded = 0;
let previousRounded = 0;
let time = 0;
let scrolling = true;
let attractMode = false;
let attractTo = 0;

let rotationOfSlider;
let positionOfSlider;

function changeSlider() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    positionOfSlider = [0,0.5,-3];
    rotationOfSlider = [0,0,0];

  } else {
    positionOfSlider = [2,0,-1];
    rotationOfSlider = [0,-0.4,-0.1];
  }
}

changeSlider();

window.addEventListener('wheel', (e) => {
  if (position >= -0.2 && scrolling) {
    if (position <= 4.2) {
      speed += e.deltaY * 0.0002
    }
  }
})

const ColorMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector4(),
    texture1: null,
    distanceFromCenter: 0,
    yCurve: 0.03,
    paralax: 0.02,
    alphaOfPanel: 0.65,
    introOpacity: 0.001,
    uvRate1: new THREE.Vector2(1,1),
  },
  // vertex shader
  glsl`
    uniform float time;
    uniform float yCurve;
    uniform float paralax;
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform vec2 pixels;
    float PI = 3.141592653589793238;
    void main() {
      vUv = (uv - vec2(0.5))*0.9 + vec2(0.5);
      vec3 pos = position;
      pos.y += sin(PI*uv.x)*yCurve;
      pos.z += sin(PI*uv.x)*0.0001;
    
      pos.y +=sin(time*0.3)*paralax;
      vUv.y -=sin(time*0.3)*paralax;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  glsl`
    uniform float time;
    uniform float progress;
    uniform float distanceFromCenter;
    uniform float alphaOfPanel;
    uniform float introOpacity;
    uniform sampler2D texture1;
    uniform vec4 resolution;
    varying vec2 vUv;
    varying vec3 vPosition;
    float PI = 3.141592653589793238;
    void main() {
      vec4 t = texture2D(texture1, vUv);
      float bw = (t.r + t.b + t.g)/3.;
      vec4 another = vec4(bw, bw, bw, 1.);

      gl_FragColor = mix(another, t, distanceFromCenter);
      gl_FragColor.a = clamp(distanceFromCenter*introOpacity, alphaOfPanel*introOpacity, 1.);
    }
  `
)

extend({ ColorMaterial })


function useDidMount() {
  const didMountRef = useRef(true);
  
  useEffect(() => {
    didMountRef.current = false;
  }, []);
  return didMountRef.current;
};


let objs = Array(5).fill({dist: 0})

function HandleImages(props) {

  function flattenSlider() {
    attractMode = true;
    gsap.to(props.forwardedRef.current.position, {x: 0, y: 0, z: -1, duration: 0.5 })
    gsap.to(props.forwardedRef.current.rotation, {x: 0,y: 0,z: 0, duration: 0.5})
  }

  function normalizeSlider() {
    attractMode = false;
    gsap.to(props.forwardedRef.current.position, {x: 2, y: 0, z: -1, duration: 0.5 })
    gsap.to(props.forwardedRef.current.rotation, {x: 0, y: -0.4, z: -0.1, duration: 0.5 })
  }

  const didMount = useDidMount()

  const arrayOfListItems = [];

  function addListenersToBullets() {
    arrayOfListItems.forEach((item, i)=> {

      item.addEventListener('mouseover', function() {
        attractTo = Number(this.attributes[0].value);
      })
    })
  }


  useEffect(() => {
    if (didMount) {
      scrolling = true;

      setTimeout(() => {
        for (var i=0; i<objs.length; i++) {

          arrayOfListItems.push(props.listItems.current.childNodes[i])
          gsap.to(meshes.current[i].material.uniforms.introOpacity, {value: 1, duration: 1.3, delay: i*0.3, ease: "power2.out"})
          gsap.from(meshes.current[i].position, {y: -0.3, duration: 1, delay: i*0.3, ease: "power2.out"})
        }

        props.listItems.current.addEventListener('mouseenter', flattenSlider, true)
        props.listItems.current.addEventListener('mouseleave', normalizeSlider, true)
        gsap.to(props.listItems.current, {duration: 0.3, autoAlpha: 1})
        addListenersToBullets()

      }, 1000)
      
    }
  })

  const earth1 = useTexture(earth);
  const nano1 = useTexture(nano);
  const o2b1 = useTexture(o2b)
  const inter1 = useTexture(inter)
  const fooi1 = useTexture(fooi)

  const images = [earth1, nano1, o2b1, inter1, fooi1];

  const names = ['lunar', 'nanoleaf', 'o2b', 'interface', 'fooi'];

  const meshes = useRef([]);

  function allMeshes(mesh, i) {
    meshes.current.push(mesh);
  }

  function removeInactiveInfoPanels(rounded) {
    props.section.forEach((item, i) => {
      if (rounded !== i) {
        item.current.classList.remove('active');
      }
    })
  }

  useFrame(() => {
      position += speed;
      speed *= 0.8;
      rounded = Math.round(position);
      time += 0.05;

      objs.forEach((o, i) => {
        o.dist = Math.min(Math.abs(position - i),1)
        o.dist = 1 - o.dist**2;

        // let scale = 4 + 0.6*o.dist;        

        // meshes.current[i].position.y = -i*4.8 + position*4.8
        meshes.current[i].position.x = -i*1.35 + position*1.35
        // meshes.current[i].scale.set(scale, scale, scale)
        meshes.current[i].material.uniforms.distanceFromCenter.value = o.dist
        meshes.current[i].material.uniforms.time.value = time;
       
      })

      let diff = (rounded - position)

      if (rounded !== previousRounded) {
        switch(rounded) {
          case 0:
            props.section[rounded].current.classList.add('active');
            removeInactiveInfoPanels(rounded);
            break;
          case 1:
            props.section[rounded].current.classList.add('active');
            removeInactiveInfoPanels(rounded);
            break;
          case 2:
            props.section[rounded].current.classList.add('active');
            removeInactiveInfoPanels(rounded);
            break;
          case 3:
            props.section[rounded].current.classList.add('active');
            removeInactiveInfoPanels(rounded);
            break;
          case 4:
            props.section[rounded].current.classList.add('active');
            removeInactiveInfoPanels(rounded);
            break;
        }
      }

      if (attractMode) {
        position += -(position - attractTo)*0.03;
      } else {
        position += Math.sign(diff)*Math.pow(Math.abs(diff), 0.7)*0.015;
      }

      previousRounded = rounded;

 
  })

  function panelClicked(e) {

    scrolling = false;

    props.link.linkChange(e.object.name, e.object.index);

    gsap.to(props.listItems.current, {duration: 0.3, autoAlpha: 0})

    document.querySelector('.section-names.active .titleId').classList.add('active');

    gsap.to('.arrow-loader', {duration: 0.6, autoAlpha: 1, delay: 0.9})
    gsap.to('.section-names.active .hide', {autoAlpha: 0, duration: 0.3});
    gsap.to('.section-names.active h1', {x: '27%', y: '37%', duration: 0.5, scaleX: 1.1, scaleY: 1.1});

    gsap.to(props.forwardedRef.current.position, {x: 0, y: 0, z: 0, duration: 0.5})
    gsap.to(props.forwardedRef.current.rotation, {x: 0, y: 0, z: 0, duration: 0.5})

    e.object.parent.children.forEach(item => {
      if (e.object.uuid !== item.uuid) {
        gsap.to(item.material.uniforms.alphaOfPanel, {value: 0.1, duration: 0.3})

      } else {
        gsap.to(item.material.uniforms.yCurve, {value: 0.001, duration: 0.3})
        gsap.to(item.material.uniforms.paralax, {value: 0.001, duration: 0.3})
      }
    })
  }

  return (
    <>
    { images.map((image, i) => {

      image.generateMipmaps = true;
      image.minFilter = THREE.LinearFilter;

      return (
        <mesh name={names[i]} index={i} onClick={(e) => {panelClicked(e)}} ref={(mesh) => allMeshes(mesh, i)} key={i} position={[0,0,0]} rotation={[0,0,0]}>
          <planeGeometry args={[1.1, 1, 40,40]} />
          <colorMaterial texture1={image} attach="material" />
        </mesh>
      )
    })}
    </>
  )
}

function CanvasData (props) {

  const groupMesh = useRef();
  const [isMobile, setIsMobile] = useState('');

  useEffect(() => {
    function responsive() {
      if (window.matchMedia("(max-width: 800px)").matches) {
        setIsMobile(true);

      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener('resize', debounce(responsive, 150), true)

    return window.removeEventListener('resize', debounce(responsive, 150));

  })

  if (isMobile) {
    gsap.to(groupMesh.current.position, {x: 0, y: 0, z: -3, duration: 0.5 })
    gsap.to(groupMesh.current.rotation, {x: 0,y: 0,z: 0, duration: 0.5})

  } else if (!isMobile && !props.isPanelClicked) {
    if (groupMesh.current !== undefined) {
      gsap.to(groupMesh.current.position, {x: 2, y: 0, z: -1, duration: 0.5 })
      gsap.to(groupMesh.current.rotation, {x: 0, y: -0.4, z: -0.1, duration: 0.5 })
    }
  }

  return (
    <group ref={groupMesh} position={positionOfSlider} scale={[4.1,4.1,4.1]} rotation={rotationOfSlider}>
      <HandleImages section={props.section} items={props.items} listItems={props.listItems} forwardedRef={groupMesh} link={props}/>
    </group>
  )
}

export default CanvasData;