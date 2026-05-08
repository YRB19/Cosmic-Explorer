

import { useRef } from 'react'                     
import { Canvas, useFrame } from '@react-three/fiber'  

import StarsBackground from './StarsBackground'
import OrbitRing from './OrbitRing'
import Planet from './Planet'
import { PLANETS_DATA, SUN_DATA } from '../data/planets'


function Sun() {
  const meshRef = useRef)

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += 0.04 * delta
  })

  return (
    <group>

      <mesh ref={meshRef}>
        <sphereGeometry args={[SUN_DATA.size, 40, 40]} />
        <meshStandardMaterial
          color={SUN_DATA.color}
          emissive={SUN_DATA.emissiveColor}
          emissiveIntensity={1.4}
          roughness={0.35}
        />
      </mesh>


      <mesh>
        <sphereGeometry args={[SUN_DATA.size * 1.25, 20, 20]} />
        <meshBasicMaterial color="#FF7700" transparent opacity={0.06} depthWrite={false} />
      </mesh>


      <pointLight color="#FDB813" intensity={3.5} distance={250} decay={1.1} />
    </group>
  )
}


export default function SolarSystem({ selectedPlanet, onPlanetSelect }) {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Canvas
        camera={{ position: [0, 80, 0], fov: 58 }}
        gl={{ antialias: true }}
        style={{ background: '#00000F' }}
      >
        <ambientLight intensity={0.07} color="#1a1a4e" />

        <StarsBackground />
        <Sun />

        {PLANETS_DATA.map((planet) => (
          <group key={planet.id}>
            <OrbitRing radius={planet.orbitRadius} />
            <Planet
              data={planet}
              isSelected={selectedPlanet?.id === planet.id}
              onSelect={onPlanetSelect}
            />
          </group>
        ))}


      </Canvas>
    </div>
  )
}
