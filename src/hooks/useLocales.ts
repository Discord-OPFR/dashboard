import type { UseTranslationOptions } from 'react-i18next';
import { useTranslation } from 'react-i18next';

import type { LocalesNamespaces, LocalesPrefix } from '../types/namespaces';

export const useLocales = (
  namespace: LocalesNamespaces,
  options?: UseTranslationOptions<LocalesPrefix>,
) => {
  return useTranslation<LocalesNamespaces, LocalesPrefix>(namespace, options);
};

export const useCommonLocales = (
  options?: UseTranslationOptions<LocalesPrefix>,
) => {
  return useLocales('commons', options);
};

export const useActionsLocales = (
  options?: UseTranslationOptions<LocalesPrefix>,
) => {
  return useCommonLocales({ keyPrefix: 'actions', ...options });
};
