export interface ConditionalBandwidthOptimization {
  conditional_values?: ConditionalValues[];
  default_values?: DefaultValues;
}

interface ConditionalValues extends DefaultValues {
  max_dropped_ticks?: number;
}

interface DefaultValues {
  max_optimized_distance?: number;
  use_motion_prediction_hints?: boolean;
}
