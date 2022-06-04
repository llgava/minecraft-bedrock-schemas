export interface TameMount {
  attempt_temper_mod?: number;
  autoRejectItems?: AutoRejectItems[];
  feed_items?: FeedItems;
  feed_text?: string;
  max_temper?: number;
  min_temper?: number;
  ride_text?: string;
  tame_event?: string;
}

interface AutoRejectItems {
  item?: string;
}

interface FeedItems extends AutoRejectItems {
  temper_mod?: number;
}
