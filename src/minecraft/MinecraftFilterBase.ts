import { MinecraftFilterTest } from './types/MinecraftFilterTest';
import { MinecraftOperators } from './types/MinecraftOperators';
import { MinecraftSubjects } from './types/MinecraftSubjects';

export interface MinecraftFilterBase {
  subject?: MinecraftSubjects;
  operator?: MinecraftOperators;
}
