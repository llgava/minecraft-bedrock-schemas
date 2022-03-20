import { MinecraftFilterBase } from '../MinecraftFilterBase';

export interface HasTradeSupply extends MinecraftFilterBase {
  test?: 'has_trade_supply';
  value?: boolean;
}
