import { BreathabilityType, ICollision, IFlammable, IMaterialInstances, IPlacementFilter, IRandomTicking, ITicking } from '../typings/BlocksComponents';

export class BlocksComponents {
  public 'minecraft:block_light_absorption': number;
  public 'minecraft:block_light_emission': number;
  public 'minecraft:breakonpush': boolean;
  public 'minecraft:breathability': BreathabilityType;
  public 'minecraft:destroy_time': number;
  public 'minecraft:display_name': string;
  public 'minecraft:entity_collision': false | ICollision;
  public 'minecraft:explosion_resistance': number;
  public 'minecraft:flammable': IFlammable;
  public 'minecraft:friction': number;
  public 'minecraft:geometry': string;
  public 'minecraft:immovable': boolean;
  public 'minecraft:map_color': string;
  public 'minecraft:material_instances': IMaterialInstances;
  public 'minecraft:onlypistonpush': boolean;
  public 'minecraft:pick_collision': false | ICollision;
  public 'minecraft:placement_filter': IPlacementFilter;
  public 'minecraft:preventsjumping': boolean;
  public 'minecraft:random_ticking': IRandomTicking;
  public 'minecraft:rotation': [number, number, number];
  public 'minecraft:ticking': ITicking;
  public 'minecraft:unit_cube': string;
  public 'minecraft:unwalkable': boolean;

  constructor() {
    this['minecraft:block_light_absorption'] = 0;
    this['minecraft:block_light_emission'] = 0;
    this['minecraft:breakonpush'] = false;
    this['minecraft:breathability'] = 'solid';
    this['minecraft:destroy_time'] = 10;
    this['minecraft:display_name'] = 'My custom block';
    this['minecraft:entity_collision'] = {

      origin: [-8.0, 0.0, -8.0],
      size: [16.0, 16.0, 16.0]
    };

    this['minecraft:explosion_resistance'] = 10;
    this['minecraft:flammable'] = {

      burn_odds: 0,
      flame_odds: 0
    };

    this['minecraft:friction'] = 0.1;
    this['minecraft:geometry'] = 'geometry.custom_block';
    this['minecraft:immovable'] = true;
    this['minecraft:map_color'] = '#FF00FF';

    this['minecraft:material_instances'] = {
      '*': {
        render_method: 'alpha_test',
        texture: 'my_custom_block_texture'
      }
    };

    this['minecraft:onlypistonpush'] = false;

    this['minecraft:pick_collision'] = {
      origin: [-8.0, 0.0, -8.0],
      size: [16.0, 16.0, 16.0]
    };

    this['minecraft:placement_filter'] = {
      allowed_faces: 'up',
      block_filter: ['minecraft:stone']
    };

    this['minecraft:preventsjumping'] = true;

    this['minecraft:random_ticking'] = {
      on_tick: {
        condition: '1',
        event: 'namespace:my_custom_block_event',
        range: [10, 10],
        target: 'self'
      }
    };

    this['minecraft:rotation'] = [0, 0, 0];

    this['minecraft:ticking'] = {
      looping: false,
      range: [10, 10],
      on_tick: {
        condition: '1',
        event: 'namespace:my_custom_block_event',
        range: [10, 10],
        target: 'self'
      }
    };

    this['minecraft:unit_cube'] = 'unit_cube';
    this['minecraft:unwalkable'] = true;
  }
}
