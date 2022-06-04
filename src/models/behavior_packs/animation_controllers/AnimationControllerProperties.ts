import { StatesProperty } from './properties/StatesProperty';

export interface AnimationControllerProperties {
  initial_state?: string | 'default';
  states?: States;
}

// States
export interface States {
  [property_name: string]: StatesProperty;
}
