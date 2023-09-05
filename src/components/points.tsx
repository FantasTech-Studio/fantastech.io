import { useThree } from "@react-three/fiber";

type PointsProps = {
    cuantity: number;
}

const COLORS = [
'#3498db', // Blue
  '#2ecc71', // Green
  '#9b59b6', // Purple
  '#e67e22', // Orange
  '#f1c40f', // Yellow
  '#1abc9c', // Turquoise
  '#34495e', // Dark Blue
  '#95a5a6', // Gray
  '#e74c3c', // Red
  '#16a085', // Teal
]

const Points = (props: PointsProps) => {
    const { width, height } = useThree((state) => state.viewport)
    const array = new Array(props.cuantity).fill(0);
    return <>
        {
            array.map((item, index) => {
                   return <mesh key={`${item}-${index}`}  
                    position={[
                        (0.5 - Math.random()) * width * 2,
                        // index,
                        0.5 * height + Math.random() ** 0.25 * height * -3,
                        // Math.floor(Math.random()*props.cuantity),
                        (0.5 - Math.random()) * 25
                        // -5
                    ]} >
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color={COLORS[index % COLORS.length]} />

                </mesh> 
            })
        }
    </>
}

export default Points;
