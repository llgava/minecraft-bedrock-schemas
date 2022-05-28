export interface Shareables {
  all_items?: boolean;
  all_items_max_amount?: number;
  all_items_surplus_amount?: number;
  all_items_want_amount?: number;
  items?: Items[];
}

interface Items {
  admire?: boolean;
  barter?: boolean;
  consume_item?: boolean;
  craft_into?: string;
  item?: string;
  max_amount?: number;
  pickup_limit?: number;
  priority?: number;
  stored_in_inventory?: boolean;
  surplus_amount?: number;
  want_amount?: number;
}
