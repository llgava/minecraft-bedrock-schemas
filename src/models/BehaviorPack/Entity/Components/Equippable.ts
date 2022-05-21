export interface Equippable {
  slots?: Slots[];
}


interface Slots {
  accepted_items?: string[];
  interact_text?: string;
  item?: string;
  on_equipe?: string;
  on_unequip?: string;
  slot?: number;
}
