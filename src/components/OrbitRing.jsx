/**
 * OrbitRing.jsx
 *
 * A thin flat ring showing a planet's orbital path.
 * Uses a torus (donut shape) rotated flat — much simpler than
 * the previous LineLoop approach which could break in some setups.
 */

export default function OrbitRing({ radius }) {
  return (
    // rotation={[-Math.PI / 2, 0, 0]} rotates the torus from vertical to flat
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.04, 2, 120]} />
      {/*                  ↑ orbit radius  ↑ thickness  ↑ segments */}
      <meshBasicMaterial color="#ffffff" transparent opacity={0.12} depthWrite={false} />
    </mesh>
  )
}
