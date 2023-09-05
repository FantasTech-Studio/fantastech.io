import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [
            -1 + (state.pointer.x * state.viewport.width) /10 , 
            // state.pointer.x * 4,
            -1 + (state.pointer.y * state.viewport.height) / 10 ,
            // (1 + state.pointer.y) / 2,
            // 5.5
            state.camera.position.z
        ],
        0.5,
        delta)
    state.camera.lookAt(0, 0, 0)
  })
    return <></>
}

export default CameraRig;
