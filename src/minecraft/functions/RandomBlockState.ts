export interface RandomBlockState {
  function?: 'random_block_state';
  block_state?: string;
  values?: Values;
}

interface Values {
  max?: number;
  min?: number;
}
