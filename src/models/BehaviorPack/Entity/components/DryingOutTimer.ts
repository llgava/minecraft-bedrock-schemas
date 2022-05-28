export interface DryingOutTimer {
  dried_out_event?: string;
  recover_after_dried_out_event?: string;
  stopped_drying_out_event?: string;
  total_time?: number;
  water_bottle_refill_time?: number;
}
