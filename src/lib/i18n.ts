import i18n from 'i18next';
import Fetch from 'i18next-fetch-backend';
import { initReactI18next } from 'react-i18next';

import { LOCALES_NAMESPACES } from '@/config/namespaces';

import type { LocalesNamespaces } from '../types/namespaces';

const localesPathBuilder = (lng: string, namespace: LocalesNamespaces) => {
  if (namespace === 'equipments') {
    return `node_modules/@opfr/items/locales/equipments/${lng}.json`;
  } else if (namespace === 'items') {
    return `node_modules/@opfr/items/locales/items/${lng}.json`;
  } else if (namespace === 'raids') {
    return `node_modules/@opfr/raids/locales/${lng}.json`;
  }

  return `/locales/${lng}/${namespace}.json`;
};

i18n
  .use(Fetch)
  .use(initReactI18next)
  .init({
    fallbackLng: ['en', 'fr'],
    ns: [...LOCALES_NAMESPACES, 'equipments', 'raids', 'items'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: localesPathBuilder,
    },
  });

export default i18n;
