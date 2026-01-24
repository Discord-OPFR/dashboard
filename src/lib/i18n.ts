import i18n from 'i18next';
import Fetch from 'i18next-fetch-backend';
import { initReactI18next } from 'react-i18next';

import { LOCALES_NAMESPACES } from '@/config/namespaces';

import type { LocalesNamespaces } from '../types/namespaces';

const localesPathBuilder = (lng: string, namespace: LocalesNamespaces) => {
  return `/locales/${lng}/${namespace}.json`;
};

i18n
  .use(Fetch)
  .use(initReactI18next)
  .init({
    fallbackLng: ['en', 'fr'],
    ns: LOCALES_NAMESPACES,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: localesPathBuilder,
    },
  });

export default i18n;
