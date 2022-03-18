import { MinecraftSubjects } from '../../../minecraft/types/MinecraftSubjects';

export interface OnTick {
  on_tick?: {
    condition?: string;
    event?: string;
    target?: MinecraftSubjects;
    range?: [number, number];
  };
}
