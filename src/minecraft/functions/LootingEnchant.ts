export interface LootingEnchant {
  function?: 'looting_enchant';
  count?: Count;
}

interface Count {
  max?: number;
  min?: number;
}
