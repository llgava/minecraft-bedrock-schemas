export interface Genetics {
  genes?: Genes[];
  mutation_rate?: number;
}

interface Genes {
  allele_range?: AlleleRange;
  genetic_variants?: GeneticVariants[];
  mutation_rate?: number;
  name?: string;
}

interface AlleleRange {
  range_max?: number;
  range_min?: number;
}

interface GeneticVariants {
  birth_event?: string;
  both_allele?: number;
  either_allele?: number;
  hidden_allele?: number;
  main_allele?: number;
}
