import { MinecraftQueryAnimation } from '@minecraft/MinecraftQueryAnimation';

export interface StatesProperty {
  animations?: string[] | MinecraftQueryAnimation[];
  transitions?: string[] | MinecraftQueryAnimation[];
  on_entry?: string[];
  on_exit?: string[];
}
