import { SchemaBase } from 'types/SchemaBase';

// global
import { ManifestSchema } from '@models/global/Manifest';

// behavior_packs
import { AnimationControllersSchema } from '@models/behavior_packs/animation_controllers/Schema';
import { AnimationsSchema } from '@models/behavior_packs/animations/Schema';
import { BlocksSchema } from '@models/behavior_packs/blocks/Schema';
import { EntitiesSchema } from '@models/behavior_packs/entities/Schema';
import { ItemsSchema } from '@models/behavior_packs/items/Schema';
import { LootTablesSchema } from '@models/behavior_packs/loot_tables/Schema';
import { RecipesSchema } from '@models/behavior_packs/recipes/Schema';
import { Tick } from '@models/behavior_packs/Tick';

// resource_packs
import { BlocksTextureSchema } from '@models/resource_packs/blocks_texture/Schema';
import { ClientEntitySchema } from '@models/resource_packs/entity/Schema';
import { MusicDefinitionsSchema } from '@models/resource_packs/music_definitions/Schema';
import { SoundDefinitionsSchema } from '@models/resource_packs/sound_definitions/Schema';
import { SoundsSchema } from '@models/resource_packs/sounds/Schema';
import { ItemTextureSchema } from '@models/resource_packs/ItemTexture';
import { SplashesSchema } from '@models/resource_packs/Splashes';
import { TerrainTextureSchema } from '@models/resource_packs/TerrainTexture';

export const Schemas: SchemaBase[] = [
  new ManifestSchema(),

  // BPacks
  new Tick(),
  new BlocksSchema(),
  new ItemsSchema(),
  new EntitiesSchema(),
  new RecipesSchema(),
  new AnimationControllersSchema(),
  new AnimationsSchema(),
  new LootTablesSchema(),

  // RPacks
  new SplashesSchema(),
  new ItemTextureSchema(),
  new TerrainTextureSchema(),
  new BlocksTextureSchema(),
  new SoundsSchema(),
  new SoundDefinitionsSchema(),
  new MusicDefinitionsSchema(),
  new ClientEntitySchema(),
];
