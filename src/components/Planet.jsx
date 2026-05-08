import { useRef, useState } from 'react'       
import { useFrame } from '@react-three/fiber'    
import * as THREE from 'three'

export default function Planet({ data, onSelect, isSelected }) {
  const groupRef = useRef()   
  const meshRef  = useRef()   

  const [hovered, setHovered] = useState(false)

  const angleRef = useRef(data.initialAngle ?? 0)

  useFrame((_, delta) => {
    angleRef.current += data.orbitSpeed * delta
    const x = Math.cos(angleRef.current) * data.orbitRadius
    const z = Math.sin(angleRef.current) * data.orbitRadius
    groupRef.current.position.set(x, 0, z)

    if (meshRef.current) meshRef.current.rotation.y += 0.25 * delta
  })

  const handleClick = (e) => {
    e.stopPropagation()
    onSelect(data)  
  }

  const onOver = () => { setHovered(true);  document.body.style.cursor = 'pointer' }
  const onOut  = () => { setHovered(false); document.body.style.cursor = 'auto'    }

  const emissiveIntensity = isSelected ? 0.65 : hovered ? 0.42 : 0.07

  return (
    <group ref={groupRef}>

      {/* Main sphere */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={onOver}
        onPointerOut={onOut}
      >
        <sphereGeometry args={[data.size, 40, 40]} />
        <meshStandardMaterial
          color={data.color}
          emissive={data.emissiveColor ?? data.color}
          emissiveIntensity={emissiveIntensity}
          roughness={0.78}
          metalness={0.05}
        />
      </mesh>

      {/* Saturn rings */}
      {data.ringStyle === 'saturn' && (
        <mesh rotation={[-Math.PI / 7, 0, 0.15]}>
          <ringGeometry args={[data.size * 1.45, data.size * 2.35, 80]} />
          <meshStandardMaterial
            color="#C9A95A" transparent opacity={0.78}
            side={THREE.DoubleSide} depthWrite={false}
          />
        </mesh>
      )}

      {/* Uranus rings */}
      {data.ringStyle === 'uranus' && (
        <mesh rotation={[1.48, 0, 0]}>
          <ringGeometry args={[data.size * 1.4, data.size * 1.95, 64]} />
          <meshStandardMaterial
            color="#7DE8E8" transparent opacity={0.38}
            side={THREE.DoubleSide} depthWrite={false}
          />
        </mesh>
      )}

      {/* Glow shell on hover / selected */}
      {(hovered || isSelected) && (
        <mesh>
          <sphereGeometry args={[data.size * 1.22, 20, 20]} />
          <meshBasicMaterial
            color={data.color}
            transparent
            opacity={isSelected ? 0.16 : 0.08}
            depthWrite={false}
          />
        </mesh>
      )}

    </group>
  )
}
