import { UUID } from '../Definitions';

export interface Header {
  name: string | 'pack.name';
  description: string | 'pack.description';
  version: [number, number, number] | [1, 0, 0];
  base_game_version?: [number, number, number] | [1, 18, 0];
  min_engine_version?: [number, number, number] | [1, 16, 0];
  lock_template_options?: boolean;
  uuid: UUID;
}
