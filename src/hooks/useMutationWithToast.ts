import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

export const useMutationWithToast = <T, V = void>(
  options: UseMutationOptions<T, Error, V> & {
    errorMessage?: string;
  },
) => {
  return useMutation<T, Error, V>({
    ...options,
    onError: (error, variables, result, context) => {
      console.error(options.errorMessage || 'An error occurred:', error);
      options.onError?.(error, variables, result, context);
    },
  });
};
