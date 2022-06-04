export interface RailSensor {
  check_block_types?: boolean;
  eject_on_activate?: boolean;
  eject_on_deactivate?: boolean;
  on_activate?: string;
  on_deactivate?: string;
  tick_command_block_on_activate?: boolean;
  tick_command_block_on_deactivate?: boolean;
}
