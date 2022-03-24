import { StatesProperty } from './Components/StatesProperty';

export interface AnimationControllerProperty {
  initial_state?: string | 'default';
  states?: States;
}

// States
export interface States {
  [property_name: string]: StatesProperty;
}
