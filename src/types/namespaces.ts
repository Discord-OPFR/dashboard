import type { LOCALES_NAMESPACES } from '@/config/namespaces';
import type { LOCALES_PREFIXES } from '@/config/prefixes';

export type OpfrNamespaces = 'equipments' | 'items' | 'raids';

export type LocalesNamespaces =
  | (typeof LOCALES_NAMESPACES)[number]
  | OpfrNamespaces;
export type LocalesPrefix = (typeof LOCALES_PREFIXES)[number];
