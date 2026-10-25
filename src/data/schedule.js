export const phases = {
  base: 'Base Building',
  unit: 'Unit Progression',
  tech: 'Tech Research',
  drone: 'Drone Boost',
  hero: 'Hero Advancement',
};

// Arms Race base schedule (before personal swaps): six 4-hour phases from 00:00 server time.
// overlap: phases that also score in that day's Alliance Duel (VS).
export const days = [
  { id: 'monday', name: 'Monday', theme: 'Radar Training', vp: '1', focus: 'Radar, stamina, drone parts',
    arms: ['base', 'unit', 'hero', 'tech', 'drone', 'hero'], overlap: ['drone'] },
  { id: 'tuesday', name: 'Tuesday', theme: 'Base Expansion', vp: '2', focus: 'Construction speedups, buildings',
    arms: ['unit', 'tech', 'base', 'drone', 'hero', 'base'], overlap: ['base'] },
  { id: 'wednesday', name: 'Wednesday', theme: 'Age of Science', vp: '2', focus: 'Research, Valor Badges',
    arms: ['drone', 'hero', 'tech', 'base', 'unit', 'tech'], overlap: ['tech'] },
  { id: 'thursday', name: 'Thursday', theme: 'Train Heroes', vp: '2', focus: 'Hero EXP, shards, medals',
    arms: ['base', 'unit', 'hero', 'tech', 'drone', 'hero'], overlap: ['hero'] },
  { id: 'friday', page: true, name: 'Friday', theme: 'Total Mobilization', vp: '2', focus: 'All speedups, troop training',
    arms: ['tech', 'drone', 'unit', 'hero', 'base', 'unit'], overlap: ['base', 'tech', 'unit'] },
  { id: 'saturday', name: 'Saturday', theme: 'Enemy Buster', vp: '4', focus: 'PvP, healing, remaining items',
    arms: ['unit', 'tech', 'base', 'drone', 'hero', 'base'], overlap: ['base', 'tech', 'unit'] },
  { id: 'sunday', name: 'Sunday', theme: 'Prep', vp: '—', focus: 'Save for next week',
    arms: ['drone', 'hero', 'tech', 'base', 'unit', 'tech'], overlap: [] },
];
