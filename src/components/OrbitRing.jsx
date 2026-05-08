export default function OrbitRing({ radius }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.04, 2, 120]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.12} depthWrite={false} />
    </mesh>
  )
}
