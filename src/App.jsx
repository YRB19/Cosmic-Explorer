import { useState } from 'react'
import SolarSystem from './components/SolarSystem'
import Navbar from './components/Navbar'
import PlanetInfoPanel from './components/PlanetInfoPanel'

export default function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null)

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">

      {/* 1. The 3D scene — always visible in the background */}
      <SolarSystem
        selectedPlanet={selectedPlanet}
        onPlanetSelect={setSelectedPlanet}  
      />

      {/* 2. Top navigation bar */}
      <Navbar
        selectedPlanet={selectedPlanet}
        onReset={() => setSelectedPlanet(null)}
      />

      {/* 3. Info panel — slides in when a planet is selected */}
      <PlanetInfoPanel
        planet={selectedPlanet}
        onClose={() => setSelectedPlanet(null)}
      />

      {/* Bottom hint — only shown when nothing is selected */}
      {!selectedPlanet && (
        <div className="pointer-events-none fixed bottom-8 inset-x-0 z-10 text-center">
          <p className="glow font-orbitron text-[10px] tracking-[0.3em] text-white/25">
            CLICK A PLANET TO EXPLORE
          </p>
        </div>
      )}

    </div>
  )
}
