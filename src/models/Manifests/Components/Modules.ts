import { Type, UUID } from '../Definitions';

export interface Modules {
  description?: string;
  type: Type;
  version: [number, number, number];
  uuid: UUID;
}
