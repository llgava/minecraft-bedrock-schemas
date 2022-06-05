import { MinecraftClientVariables } from '@minecraft/MinecraftClientVariables';

export interface ClientScripts {
  pre_animation?: string[];
  initialize?: string[];
  parent_setup?: string;
  scale?: string;
  scalex?: string;
  scaley?: string;
  scalez?: string;
  should_update_bones_and_effects_offscreen?: string | boolean;
  should_update_effects_offscreen?: string | boolean;
  variables?: MinecraftClientVariables;
  animate?: string[];
}
