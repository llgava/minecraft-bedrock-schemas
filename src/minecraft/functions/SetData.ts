export interface SetData {
  function?: 'set_data';
  data?: Data;
}

interface Data {
  max?: number;
  min?: number;
}
