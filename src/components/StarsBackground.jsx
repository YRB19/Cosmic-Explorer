

import { Stars } from '@react-three/drei'

export default function StarsBackground() {
  return (
    <Stars
      radius={300}     
      depth={60}        
      count={5000}      
      factor={4}        
      saturation={0}    
      fade              
      speed={0.4}       
    />
  )
}
