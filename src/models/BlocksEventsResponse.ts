import { IAddMobEffect, IDamage, IDie, IPlayEffect, IPlaySound, IRemoveMobEffect, IRunCommand, ISetBlock, ISetBlockAtPos, ISetBlockProperty, ISpawnLoot, ITeleport, ITransformItem } from '../typings/BlockEventsResponse';

export class BlocksEventsResponse {
  public add_mob_effect: IAddMobEffect;
  public damage: IDamage;
  public decrement_stack: any;
  public die: IDie;
  public play_effect: IPlayEffect;
  public play_sound: IPlaySound;
  public remove_mob_effect: IRemoveMobEffect;
  public run_command: IRunCommand;
  public set_block: ISetBlock;
  public set_block_at_pos: ISetBlockAtPos;
  public set_block_property: ISetBlockProperty;
  public spawn_loot: ISpawnLoot;
  public swing: any;
  public teleport: ITeleport;
  public tranform_item: ITransformItem;

  constructor() {
    this.add_mob_effect = {
      amplifier: 0,
      duration: 0.0,
      effect: 'luck',
      target: 'self'
    };

    this.damage = {
      amount: 1,
      target: 'self',
      type: 'item'
    };

    this.decrement_stack = true;
    this.die = { target: 'self' };

    this.play_effect = {
      data: 0,
      effect: 'luck',
      target: 'self'
    };

    this.play_sound = {
      sound: 'dig.grass',
      target: 'self'
    };

    this.remove_mob_effect = {
      effect: 'luck',
      target: 'self'
    };

    this.run_command = {
      command: 'say This is a test',
      target: 'self'
    };

    this.set_block = { block_type: 'minecraft:stone' };

    this.set_block_at_pos = {
      block_offset: [0, 0, 0],
      block_type: 'minecraft:stone'
    };

    this.set_block_property = { property: '1' };
    this.spawn_loot = { table: 'loot_tables/blocks/stone.loot_table.json' };
    this.swing = '1';

    this.teleport = {
      avoid_water: true,
      destination: [0.0, 0.0, 0.0],
      land_on_block: true,
      max_range: [8.0, 8.0, 8.0],
      target: 'self'
    };

    this.tranform_item = { transform: 'minecraft:stone' };
  }
}
