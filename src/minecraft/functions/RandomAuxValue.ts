export interface RandomAuxValue {
  function?: 'random_aux_value';
  values?: Values;
}

interface Values {
  max?: number;
  min?: number;
}
