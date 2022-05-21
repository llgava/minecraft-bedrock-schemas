export interface SetDamage {
  function?: 'set_damage';
  damage?: Damage;
}

interface Damage {
  max?: number;
  min?: number;
}
