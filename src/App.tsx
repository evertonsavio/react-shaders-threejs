import React from 'react';
import {Canvas} from '@react-three/fiber';

import './App.css';

const Scene:React.FC = () => {
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

const App:React.FC = () => {
  return (
    <Scene />
  )
}


export default App;
