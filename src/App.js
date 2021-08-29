import React from 'react';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
//const glsl = require('babel-plugin-glsl/macro');
import {Canvas} from '@react-three/fiber';

import './App.css';

const WaveShaderMaterial = shaderMaterial(
  //Uniform
  {},
  //Vertex
  glsl``,
  //Fragment Shader
  glsl``
)

const Scene = () => {
  return(
    <Canvas>
      <pointLight position={[10,10,10]} />
      <mesh>
        <planeBufferGeometry args={[3, 5]} />
        <meshStandardMaterial color='lightblue' />
      </mesh>
    </Canvas>
  )
}

const App = () => {
  return (
    <Scene />
  )
}


export default App;
