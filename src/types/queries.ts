export type QueryParams = Partial<{
  suspense: boolean;
  enabled: boolean;
}>;

export type Status = 'error' | 'success' | 'loading';
