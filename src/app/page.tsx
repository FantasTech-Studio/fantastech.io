'use client'

import { Canvas, useFrame } from "@react-three/fiber";
import  Floor from '../components/floor'
import  CameraRig from '../components/camera-rig'
import './styles.scss'
import Points from '../components/points'
import { Navbar } from "../components/navbar/navbar";
import { Scroll, ScrollControls } from "@react-three/drei";

export default function Home() {

  return (

        <div>
            <Navbar />
    <div className={'scene'}>
      <Canvas
        shadows
        className="canvas"
        camera={{
          position: [0, 7, 7],
        }}
        eventSource={document.getElementById('root')}
        eventPrefix="client"
      >
                <CameraRig />
                <hemisphereLight intensity={0.1} />
  <directionalLight color="red" position={[0, 3, 5]} />
                <Floor />
                    <ScrollControls pages={3}>
                        <Scroll>
                            <Points cuantity={400} />
                        </Scroll>
                    </ScrollControls>
      </Canvas>
        </div>
        </div>
  )
}
