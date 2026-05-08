export const SUN_DATA = {
  id: 'sun',
  name: 'The Sun',
  color: '#FDB813',
  emissiveColor: '#FF6000',
  size: 2.5,
}

export const PLANETS_DATA = [
  {
    id: 'mercury',
    name: 'Mercury',
    color: '#c0bebe',
    emissiveColor: '#a2a2a2',
    size: 0.28,
    orbitRadius: 5,
    orbitSpeed: 0.047,        
    initialAngle: 0.5,        
    diameter: '4,879 km',
    distanceFromSun: '57.9 million km',
    description:
      'Mercury is the smallest planet and the one closest to the Sun. ' +
      'With almost no atmosphere, temperatures swing wildly: −180 °C at night ' +
      'and 430 °C during the day. A year on Mercury lasts only 88 Earth days.',
    nasaQuery: 'mercury planet surface craters',
  },
  {
    id: 'venus',
    name: 'Venus',
    color: '#ffd388',
    emissiveColor: '#c68802',
    size: 0.48,
    orbitRadius: 7.5,
    orbitSpeed: 0.035,
    initialAngle: 1.2,
    diameter: '12,104 km',
    distanceFromSun: '108.2 million km',
    description:
      'Venus is the hottest planet in the solar system despite not being the closest ' +
      'to the Sun. A thick atmosphere of carbon dioxide traps heat in a runaway ' +
      'greenhouse effect, keeping the surface at a blistering 465 °C.',
    nasaQuery: 'venus planet atmosphere clouds',
  },
  {
