export interface EconomyTradeTable {
  convert_trades_economy?: boolean;
  cured_discount?: [number, number];
  display_name?: string;
  hero_demand_discount?: number;
  max_cured_discount?: [number, number];
  max_nearby_cured_discount?: number;
  nearby_cured_discount?: number;
  new_screen?: boolean;
  persist_trades?: boolean;
  show_trade_screen?: boolean;
  table?: string;
  use_legacy_price_formula?: boolean;
}
