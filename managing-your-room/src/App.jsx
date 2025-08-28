import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Room() {
  return (
    <mesh>
      {/* Floor */}
      <boxGeometry args={[10, 0.2, 10]} />
      <meshStandardMaterial color="lightgray" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Room />
      <OrbitControls />
    </Canvas>
  );
}
