import type { UseQueryResult } from '@tanstack/react-query';

import type { Status } from '@/types/queries';

export const getStatus = (query: UseQueryResult): Status => {
  if (query.status === 'error' || query.status === 'success') {
    return query.status;
  }
  return 'loading';
};
