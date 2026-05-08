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
    id: 'earth',
    name: 'Earth',
    color: '#4dc7ff',
    emissiveColor: '#1568e6',
    size: 0.52,
    orbitRadius: 10,
    orbitSpeed: 0.029,
    initialAngle: 2.1,
    diameter: '12,742 km',
    distanceFromSun: '149.6 million km',
    description:
      'Earth is our home — the only planet known to harbour liquid water on its ' +
      'surface and life as we understand it. Its magnetic field shields us from ' +
      'harmful solar radiation. Earth has one natural satellite: the Moon.',
    nasaQuery: 'earth blue marble from space',
  },
  {
    id: 'mars',
    name: 'Mars',
    color: '#ff8a63',
    emissiveColor: '#cb4400',
    size: 0.38,
    orbitRadius: 13,
    orbitSpeed: 0.024,
    initialAngle: 3.5,
    diameter: '6,779 km',
    distanceFromSun: '227.9 million km',
    description:
      'Mars is called the Red Planet because iron oxide — rust — covers its surface. ' +
      'It hosts Olympus Mons, the largest volcano in the solar system at 22 km tall. ' +
      'Multiple rovers and landers have explored its ancient riverbeds.',
    nasaQuery: 'mars planet rover surface perseverance',
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    color: '#ffb14c',
    emissiveColor: '#bb6701',
    size: 1.1,
    orbitRadius: 18,
    orbitSpeed: 0.013,
    initialAngle: 0.8,
    diameter: '139,820 km',
    distanceFromSun: '778.5 million km',
    description:
      'Jupiter is the largest planet — more than twice as massive as all other ' +
      'planets combined. Its iconic Great Red Spot is a storm that has raged for ' +
      'over 350 years. Jupiter has at least 95 known moons, including Europa ' +
      'which may harbour a subsurface ocean.',
    nasaQuery: 'jupiter great red spot clouds juno',
  },
  {
    id: 'saturn',
    name: 'Saturn',
    color: '#ffdd80',
    emissiveColor: '#cd9a01',
    size: 0.95,
    orbitRadius: 24,
    orbitSpeed: 0.0095,
    initialAngle: 1.9,
    hasRings: true,
    ringStyle: 'saturn',
    diameter: '116,460 km',
    distanceFromSun: '1.43 billion km',
    description:
      'Saturn is the most visually striking planet, famous for its vast ring system ' +
      'made of billions of chunks of ice and rock. It is so light for its size that ' +
      'it would float in water. Saturn has 146 confirmed moons — the most of any planet.',
    nasaQuery: 'saturn rings cassini spacecraft',
  },