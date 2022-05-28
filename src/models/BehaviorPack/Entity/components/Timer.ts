export interface Timer {
  looping?: boolean;
  randomInterval?: boolean;
  random_time_choices?: number[];
  time?: [number, number, number];
  time_down_event?: string;
}
