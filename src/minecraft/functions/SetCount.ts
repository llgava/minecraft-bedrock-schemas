export interface SetCount {
  function?: 'set_count';
  count?: Count;
}

interface Count {
  max?: number;
  min?: number;
}
