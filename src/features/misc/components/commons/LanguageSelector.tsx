import { Input } from '@gatewatcher/skin';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { label: 'FR', value: 'fr' },
  { label: 'EN', value: 'en' },
];

export const LanguageSelector = () => {
  const [value, setValue] = useState('en');

  const { i18n } = useTranslation();

  const handleChange = (newValue: (typeof LANGUAGES)[number] | null) => {
    if (newValue) {
      setValue(newValue.value);
      i18n.changeLanguage(newValue.value);
    }
  };

  return (
    <Input.Select
      isClearable={false}
      onChange={handleChange}
      options={LANGUAGES}
      value={value}
    />
  );
};
