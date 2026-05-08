export default function Navbar({ selectedPlanet, onReset }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-20 flex h-16 items-center justify-between px-6">
      <div className="pointer-events-none absolute inset-0 glass-panel opacity-90" />
      <div className="relative flex items-center gap-3">
        <span className="text-2xl" role="img" aria-label="planet"></span>
        <div>
          <h1 className="font-orbitron text-sm font-bold tracking-widest text-white leading-none">
            COSMIC EXPLORER
          </h1>
          <p className="font-orbitron text-[9px] tracking-[0.3em] text-white/25 mt-0.5">
            SOLAR SYSTEM
          </p>
        </div>
      </div>
      <div className="relative hidden md:block">
        {selectedPlanet ? (
          <p className="font-orbitron text-xs tracking-wider text-white/50">
            Exploring →{' '}
            <span
              className="font-bold"
              style={{ color: selectedPlanet.color }}
            >
              {selectedPlanet.name}
            </span>
          </p>
        ) : (
          <p className="pulse-glow font-orbitron text-xs tracking-widest text-white/30">
            CLICK A PLANET TO EXPLORE
          </p>
        )}
      </div>
      <div className="relative">
        {selectedPlanet ? (
          <button
            onClick={onReset}
            className="rounded-full border border-white/10 px-4 py-1.5 font-orbitron text-[10px] tracking-wider text-white/45 transition-all duration-200 hover:border-white/30 hover:text-white"
          >
            ← OVERVIEW
          </button>
        ) : (
          <p className="font-orbitron text-[10px] tracking-widest text-white/20">
            8 PLANETS
          </p>
        )}
      </div>
    </nav>
  )
}