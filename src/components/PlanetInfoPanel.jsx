import { useState } from 'react'
import { useNasaImages } from '../hooks/useNasaImages'

// ─── ImageGallery ─────────────────────────────────────────────────────────────
function ImageGallery({ images, loading, error, accentColor }) {
  const [lightboxImg, setLightboxImg] = useState(null)

  // ── Loading skeletons
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="shimmer h-24 rounded-lg"
            style={{ animationDelay: `${n * 0.12}s` }}
          />
        ))}
      </div>
    )
  }

  // ── Error state
  if (error) {
    return (
      <div className="rounded-lg border border-white/10 p-5 text-center">
        <div className="mb-2 text-3xl">📡</div>
        <p className="text-sm text-white/40">{error}</p>
      </div>
    )
  }

  // ── Empty state
  if (images.length === 0) {
    return (
      <p className="py-4 text-center text-sm text-white/30">
        No images found in NASA archive.
      </p>
    )
  }

  return (
    <>
      {/* Image grid */}
      <div className="grid grid-cols-2 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setLightboxImg(img)}
            className="group relative overflow-hidden rounded-lg focus:outline-none"
            style={{ border: `1px solid ${accentColor}22` }}
          >
            <img
              src={img.thumbnail}
              alt={img.title}
              className="h-24 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                // Fallback if the NASA thumbnail fails to load
                e.target.src =
                  `https://placehold.co/200x150/111122/444466?text=NASA`
              }}
            />
            {/* Hover overlay showing the image title */}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <p className="line-clamp-2 p-1.5 text-left text-[10px] leading-tight text-white">
                {img.title}
              </p>
            </div>
          </button>
        ))}
      </div>

    </>
  )
}

// ─── StatCard ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, accentColor }) {
  return (
    <div
      className="rounded-xl p-3"
      style={{
        background: `${accentColor}10`,
        border: `1px solid ${accentColor}28`,
      }}
    >
      <div className="mb-1 font-orbitron text-[9px] uppercase tracking-widest text-white/35">
        {label}
      </div>
      <div className="text-xs font-semibold leading-tight text-white">
        {value}
      </div>
    </div>
  )
}

// ─── PlanetInfoPanel (exported) ───────────────────────────────────────────────
export default function PlanetInfoPanel({ planet, onClose }) {
  // Fetch NASA images whenever the planet changes
  const { images, loading, error } = useNasaImages(planet?.nasaQuery)

  // Don't render anything if no planet is selected
  if (!planet) return null

  const accent = planet.color

  return (
    <div
      key={planet.id}
      className="fixed right-0 top-0 bottom-0 z-20 w-80 slide-in"
    >
      <div
        className="glass-panel flex h-full flex-col"
        style={{ borderColor: `${accent}28` }}
      >

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div
          className="flex-shrink-0 px-5 pt-6 pb-4"
          style={{ borderBottom: `1px solid ${accent}20` }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p
                className="mb-0.5 font-orbitron text-[10px] uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                Planet
              </p>
              <h2 className="font-orbitron text-2xl font-bold leading-tight text-white">
                {planet.name}
              </h2>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="mt-0.5 text-xl leading-none text-white/30 transition-colors hover:text-white"
              aria-label="Close panel"
            >
              ×
            </button>
          </div>

          {/* Colour accent bar below the name */}
          <div
            className="mt-3 h-px rounded-full"
            style={{
              background: `linear-gradient(to right, ${accent}, ${accent}00)`,
            }}
          />
        </div>

        {/* ── Scrollable body ─────────────────────────────────────────── */}
        <div className="custom-scroll flex-1 space-y-5 overflow-y-auto px-5 py-4">

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-2.5">
            <StatCard label="Diameter" value={planet.diameter} accentColor={accent} />
            <StatCard label="From Sun" value={planet.distanceFromSun} accentColor={accent} />
          </div>

          {/* Description */}
          <div>
            <h3
              className="mb-2 font-orbitron text-[9px] uppercase tracking-widest"
              style={{ color: `${accent}bb` }}
            >
              About
            </h3>
            <p className="text-sm leading-relaxed text-white/65">
              {planet.description}
            </p>
          </div>

          {/* NASA Images */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <h3
                className="font-orbitron text-[9px] uppercase tracking-widest"
                style={{ color: `${accent}bb` }}
              >
                NASA Archive
              </h3>
              {loading && (
                <span className="font-nunito text-[10px] tracking-normal text-white/25">
                  Loading…
                </span>
              )}
            </div>
            <ImageGallery
              images={images}
              loading={loading}
              error={error}
              accentColor={accent}
            />
          </div>

        </div>

        {/* ── Footer ─────────────────────────────────────────────────── */}
        <div
          className="flex-shrink-0 px-5 py-3 text-center"
          style={{ borderTop: `1px solid ${accent}15` }}
        >
          <p className="font-orbitron text-[9px] uppercase tracking-[0.25em] text-white/20">
            Images via NASA Image Library
          </p>
        </div>

      </div>
    </div>
  )
}
