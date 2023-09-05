import { useState } from "react";

const Floor = (props) => {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
            scale={clicked ? 1.4 : 1}
            onClick={() => setClicked(!clicked)}
        >
          <boxGeometry args={[2,2,2]} />
          <meshStandardMaterial color={hovered ? 'red' : 'white'} />
        </mesh>
    )
}

export default Floor;
